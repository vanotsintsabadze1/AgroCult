import { NextResponse, NextRequest } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

async function getActiveProducts() {
  const checkProducts = await stripe.products.list();
  const activeProducts = checkProducts.data.filter((prod: any) => prod.active === true);
  return activeProducts;
}

export async function POST(req: NextRequest) {
  const { products, user } = await req.json();
  let activeProducts = await getActiveProducts();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  try {
    for (const product of products) {
      const stripeProduct = activeProducts?.find(
        (prod: any) => prod?.name?.toLowerCase() === product?.title?.toLowerCase(),
      );

      if (!stripeProduct) {
        await stripe.products.create({
          name: product.title,
          description: product.description,
          images: product.images,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
          },
        });
      }
    }

    activeProducts = await getActiveProducts();

    const stripeItems = [];

    for (const product of products) {
      const stripeProduct = activeProducts?.find(
        (prod: any) => prod?.name?.toLowerCase() == product?.title?.toLowerCase(),
      );

      if (stripeProduct) {
        stripeItems.push({
          price: stripeProduct?.default_price,
          quantity: product?.quantity,
        });
      }
    }

    const session = await stripe.checkout.sessions.create({
      line_items: stripeItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/checkout/cancel`,
      customer_email: user.email,
      payment_intent_data: {
        metadata: {
          id: user.sub,
          email: user.email,
        },
      },
    });

    return NextResponse.json({ url: session?.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating products" }, { status: 500 });
  }
}

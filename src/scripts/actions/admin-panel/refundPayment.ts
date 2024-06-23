"use server";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

export async function refundPayment(pid: string) {
  try {
    await stripe.refunds.create({
      charge: pid,
    });

    return { status: 200 };
  } catch (error) {
    console.error(error);
    return null;
  }
}

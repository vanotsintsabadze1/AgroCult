const stripe = require("stripe")(process.env.STRIPE_SECRET);

export async function getAllPayments() {
  try {
    const payments = await stripe.paymentIntents.list({
      expand: ["data.latest_charge"],
    });
    const paymentData: Payment[] = payments.data;

    return paymentData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

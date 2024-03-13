import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const stripeSecretKey = String(process.env.STRIPE_SK_KEY); 
    const stripe = new Stripe(stripeSecretKey);

    return await stripe.paymentIntents.create({
        amount: Number(body.amount),
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
    });
});

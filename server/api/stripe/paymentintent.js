import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig(); 
    console.log('Stripe Secret Key:', config.private.stripeSk); 
    const stripe = new Stripe(config.private.stripeSk); 

    return await stripe.paymentIntents.create({
        amount: Number(body.amount),
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
    });
});

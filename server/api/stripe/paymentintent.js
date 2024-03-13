// E:\sites\Ecommerce-VueJS\server\api\stripe\paymentintent.js

import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig();
    
    // Use the environment variable name as defined in Vercel for the Stripe Secret Key
    const stripeSecretKey = config.private.STRIPE_SK_KEY; 
    
    // Initialize Stripe with the secret key
    const stripe = new Stripe(stripeSecretKey);

    return await stripe.paymentIntents.create({
        amount: Number(body.amount),
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
    });
});

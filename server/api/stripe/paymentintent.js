import Stripe from 'stripe';

// Specify the API version
const API_VERSION = '2020-08-27';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Initialize Stripe with the secret key and API version
    const stripe = new Stripe(process.env.STRIPE_SK_KEY, {
        apiVersion: API_VERSION,
    });

    try {
        // Create a payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(body.amount),
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
        });

        // Return the payment intent object
        return {
            statusCode: 200,
            body: JSON.stringify(paymentIntent),
        };
    } catch (error) {
        // Handle any errors and return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
});

export const payments = sku => {
  const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  stripe.redirectToCheckout({
    items: [
      {
        // Define the product and SKU in the Dashboard first, and use the SKU
        // ID in your client-side code.

        sku: sku,
        quantity: 1
      }
    ],
    successUrl: process.env.REACT_APP_URI,
    cancelUrl: process.env.REACT_APP_URI
  });
};

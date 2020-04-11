import { gaEvent } from "marketing/gAnalytics";

export const payments = (sku, name, value) => {
  const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  gaEvent(`Practico ${name}`, "Click Buy", sku, value);

  stripe.redirectToCheckout({
    items: [
      {
        // Define the product and SKU in the Dashboard first, and use the SKU
        // ID in your client-side code.

        sku: sku,
        quantity: 1
      }
    ],
    successUrl: `${process.env.REACT_APP_URI}/thanks`,
    cancelUrl: `${process.env.REACT_APP_URI}/something-wrong`
  });
};

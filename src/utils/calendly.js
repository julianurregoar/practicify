export const calendly = (sku, name, value) => {
  const calendly = window.Calendly;

  calendly.initPopupWidget({
    url: "https://calendly.com/julian-urrego/spanish-conversation",
    return: false
  });
};

export const PriceFormat = (price) => {
  if (isNaN(price) || price == null) {
    return "$0.00"; // Return a default value if the price is invalid
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

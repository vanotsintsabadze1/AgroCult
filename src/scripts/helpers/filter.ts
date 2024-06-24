import toast from "react-hot-toast";
import { z } from "zod";

const scheme = z.object({
  from: z.number().min(0, "Minimum price is 0").max(2147483647, "Minimum price exceeded"),
  to: z.number().min(100, "Minimum price is 100").max(2147483647, "Maximum price exceeded"),
});

export function changeCategory(productCategory: string, price: string, category: string) {
  if (!category && price) {
    window.location.href = `/store?category=${productCategory}&price=${price}`;
  }

  if (category && price) {
    window.location.href = `/store?category=${productCategory}&price=${price}`;
  }

  if (category && !price) {
    window.location.href = `/store?category=${productCategory}`;
  }

  if (!category && !price) {
    window.location.href = `/store?category=${productCategory}`;
  }
}

export function changePrice(
  from: string,
  to: string,
  setFrom: React.Dispatch<React.SetStateAction<string>>,
  setTo: React.Dispatch<React.SetStateAction<string>>,
  category: string,
  price: string,
) {
  const priceObj = {
    from: parseInt(from),
    to: parseInt(to),
  };

  const result = scheme.safeParse(priceObj);
  const parsedFrom = parseInt(from);
  const parsedTo = parseInt(to);

  if (from === "" || to === "") {
    toast.error("Please fill in the price range");
    return;
  }

  if (!result.success) {
    toast.error(result.error.errors[0].message);
    return;
  }

  if (parsedFrom > parsedTo) {
    toast.error("Minimum price is greater than maximum price");
    setFrom("");
    setTo("");
    return;
  }

  if (parsedFrom > 2147483647 || parsedTo > 2147483647) {
    toast.error("Maximum or minimum price exceeded");
    setFrom("");
    setTo("");
    return;
  }

  if (category && !price) {
    window.location.href = `/store?category=${category}&price=${from}-${to}`;
  }

  if (category && price) {
    window.location.href = `/store?category=${category}&price=${from}-${to}`;
  }

  if (!category && !price) {
    window.location.href = `/store?price=${from}-${to}`;
  }

  if (!category && price) {
    window.location.href = `/store?price=${from}-${to}`;
  }
}

export function onResetFilter() {
  window.location.href = "/store";
}

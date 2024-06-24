"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    category: string;
    price: string;
    search: string;
  };
}

export async function fetchItems({ searchParams }: Props) {
  if (Object.keys(searchParams).length > 0 && !searchParams.category && !searchParams.price && !searchParams.search) {
    return redirect("/store");
  }

  if (searchParams.search) {
    const search = `%${searchParams.search}%`;
    const res = await sql`SELECT * FROM products WHERE title ILIKE ${search} OR brand ILIKE ${search}`;

    return res.rows;
  }

  if (Object.keys(searchParams).length === 0 || (searchParams.category === "any" && !searchParams.price)) {
    const res = await sql`SELECT * FROM products ORDER BY RANDOM()`;

    return res.rows;
  } else {
    const category = searchParams?.category ? searchParams.category : "";
    const [from, to] = searchParams?.price ? searchParams.price.split("-") : [];

    if (searchParams.price && (!from || !to)) {
      return redirect("/store");
    }

    if (from && to) {
      if (isNaN(Number(from)) || isNaN(Number(to))) {
        return redirect("/store");
      } else if (
        Number(from) > Number(to) ||
        Number(from) < 0 ||
        Number(to) < 0 ||
        Number(from) === Number(to) ||
        Number(to) === 0 ||
        Number(from) > 2147483647 ||
        Number(to) > 2147483647
      ) {
        return redirect("/store");
      }
    }

    let res;

    if (searchParams.category === "any" && searchParams.price) {
      res = await sql`SELECT * FROM products WHERE price BETWEEN ${Number(from)} AND ${Number(to)}`;
      return res?.rows;
    }

    if (searchParams.category && !searchParams.price) {
      res =
        await sql`SELECT * FROM products WHERE EXISTS (SELECT 1 FROM jsonb_array_elements_text(products.category) AS elem WHERE elem ILIKE ${String(category)})`;
      return res?.rows;
    } else if (searchParams.price && searchParams.category && searchParams.category !== "any") {
      res =
        await sql`SELECT * FROM products WHERE EXISTS (SELECT 1 FROM jsonb_array_elements_text(products.category) AS elem WHERE elem ILIKE ${String(category)}) AND price BETWEEN ${Number(from)} AND ${Number(to)};`;
      return res?.rows;
    } else if (!searchParams.category && searchParams.price) {
      res = await sql`SELECT * FROM products WHERE price BETWEEN ${Number(from)} AND ${Number(to)}`;
      return res?.rows;
    }
    return [];
  }
}

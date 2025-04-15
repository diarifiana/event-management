import { getCategories } from "@/app/api/getCategories";
import Link from "next/link";
import { useEffect, useState } from "react";

export default async function BrowseCategories() {
  const data = await getCategories();
  const [category, setCategory] = useState("");

  return (
    <main>
      {data.map((category) => (
        <Link key={category.id} href={category.slug}>
          <button>{category.name}</button>
        </Link>
      ))}
    </main>
  );
}

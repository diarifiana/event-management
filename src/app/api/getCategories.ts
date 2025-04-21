import { Category } from "../types/Category";

export async function getCategories() {
  const data = await fetch("http://localhost:8000/categories");
  const categories: Category[] = await data.json();

  return categories;
}

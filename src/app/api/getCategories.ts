import Category from "../types/category";

export async function getCategories() {
  const data = await fetch("http://localhost:8000/categories");
  const categories: Category[] = await data.json();

  return categories;
}

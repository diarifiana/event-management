import Category from "@/app/types/Category";

export default async function CategoriesList() {
  const data = await fetch("http://localhost:8000/categories");
  const categories: Category[] = await data.json();

  return (
    <main>
      {categories.map((category: Category) => (
        <div key={category.id}>
          <h1>{category.name}</h1>
        </div>
      ))}
    </main>
  );
}

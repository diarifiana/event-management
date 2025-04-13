interface Product {
  id: number;
  productName: string;
  price: number;
  stock: number;
  merchantId: number;
  slug: string;
  merchant: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default async function UsersPage() {
  const data = await fetch("http://localhost:8000/products");
  const json = await data.json();
  const products = json.data;

  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>{product.productName}</li>
      ))}
    </ul>
  );
}

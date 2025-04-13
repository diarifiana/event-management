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
  let data = await fetch("http://localhost:8000/products");
  let json = await data.json();
  let products = json.data;

  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>{product.productName}</li>
      ))}
    </ul>
  );
}

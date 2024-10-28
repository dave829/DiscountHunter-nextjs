import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  store: string;
  name: string;
  img_path: string;
  price: number;
  etc: string;
  use_yn: string;
};

export async function getProducts(): Promise<Product[]> {
  //return ["coke", "sprite", "fanta", "pepsi", "soda"];

  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => id === item.id);
}

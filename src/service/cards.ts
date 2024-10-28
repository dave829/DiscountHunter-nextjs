import { readFile } from "fs/promises";
import path from "path";

export type Card = {
  id: string;
  title: string;
  description: string;
  date: Date;
  storeType: string;
  category: string;
  imagePath: string;
  price: string;
  eventType: string;
  comment: number;
  featured: boolean;
};

export async function getAllCards(): Promise<Card[]> {
  const filePath = path.join(process.cwd(), "data", "cards", "cards.json");
  return readFile(filePath, "utf-8")
    .then<Card[]>((data) => JSON.parse(data))
    .then((cards) => cards.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedCards(): Promise<Card[]> {
  return getAllCards() //
    .then((cards) => cards.filter((card) => card.featured));
} 

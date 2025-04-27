import * as fs from "node:fs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const book = request.nextUrl.searchParams.get("bookId");
  const categoryType = request.nextUrl.searchParams.get("categoryType");
  console.log(book, categoryType, `assets/books/book${book}.json`);
  if (!book || !categoryType) {
    return Response.error();
  }
  try {
    let fileData = fs.readFileSync(`assets/books/book${book}.json`, "utf-8");
    fileData = fileData.replace("{type}", categoryType);
    const jsonData = JSON.parse(fileData);

    return Response.json(jsonData);
  } catch {
    return Response.error();
  }
}

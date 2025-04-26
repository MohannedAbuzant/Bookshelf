import * as fs from "node:fs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const categoryType = request.nextUrl.searchParams.get("categoryType");
  console.log(categoryType);
  if (!categoryType) {
    return Response.error();
  }
  try {
    const fileData = fs.readFileSync(
      `assets/categories/${categoryType}.json`,
      "utf-8"
    );
    const jsonData = JSON.parse(fileData);

    return Response.json(jsonData.books.slice(0, 8));
  } catch {
    return Response.error();
  }
}

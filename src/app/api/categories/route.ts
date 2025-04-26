import * as fs from "node:fs";

export async function GET() {
  const fileData = fs.readFileSync("assets/categories.json", "utf-8");
  try {
    const jsonData = JSON.parse(fileData);

    return Response.json(jsonData.categories.slice(0, 8));
  } catch {
    return Response.error();
  }
}

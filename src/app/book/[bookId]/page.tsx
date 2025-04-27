import React from "react";
import Image from "next/image";
import { IBookDetails } from "@/types/book";

async function Page({
  searchParams,
  params
}: {
  searchParams: Promise<{ categoryType: string }>;

  params: Promise<{ bookId: string }>;
}) {
  const { categoryType } = await searchParams;
  const { bookId } = await params;

  const request = await fetch(
    `http://localhost:3000/api/book?bookId=${bookId}&categoryType=${categoryType}`
  );
  const { title, image, author, description, reviewedBy, publishedOn } =
    (await request.json()) as IBookDetails;
  return (
    <section className="container d-flex flex-column flex-lg-row py-4 gap-2 justify-content-center align-items-center text-align-center text-align-lg-start ">
      <figure className="m-0">
        <Image
          src={image}
          alt={`${title} image`}
          width={200}
          height={200}
          className="object-fit-contain"
        />
      </figure>
      <article className="d-flex flex-column gap-2">
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Author: {author}</p>
        <p>Reviewed By: {reviewedBy}</p>
        <p>Published On: {publishedOn}</p>
      </article>
    </section>
  );
}

export default Page;

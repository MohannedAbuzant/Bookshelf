import React, { ReactNode } from "react";
import Carousel from "@/core/components/carousel/carousel";
import Image from "next/image";
import { IBook } from "@/types/book";
import Link from "next/link";

const CategoriesSection = async ({
  title,
  categoryKey,
  backgroundColor,
  carouselTitleColor,
  bookTitleColor,
  byTextColor,
  imageKey
}: {
  title: string;
  categoryKey: string;
  backgroundColor: string;
  bookTitleColor: string;
  byTextColor: string;
  carouselTitleColor: string;
  imageKey?: string;
}): Promise<ReactNode> => {
  const request = await fetch(
    `http://localhost:3000/api/category?categoryType=${categoryKey}`
  );
  const data = (await request.json()) as IBook[];
  return (
    <section
      className="d-flex  flex-column  justify-content-center  align-items-center py-5"
      style={{ backgroundColor: backgroundColor }}
    >
      <Carousel title={title} carouselTitleColor={carouselTitleColor}>
        {data.map(({ image, title, id, author, reviewedBy }) => {
          return (
            <nav key={id}>
              <Link
                href={{
                  pathname: `/book/${id}`,
                  query: { categoryType: imageKey || categoryKey }
                }}
              >
                <figure className="m-0">
                  <Image
                    src={image}
                    width={146}
                    height={250}
                    alt={title}
                    style={{ objectFit: "contain" }}
                  ></Image>
                  <figcaption className="text-align-center text-align-lg-start">
                    <h3
                      className="mt-2"
                      style={{ color: bookTitleColor, fontWeight: "normal" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-1 fs-12  text-uppercase text-gray"
                      style={{ color: byTextColor }}
                    >
                      BY {author}
                    </p>
                    <p
                      className="mt-1 fs-12 text-uppercase text-gray"
                      style={{ color: byTextColor }}
                    >
                      REVIEWED BY {reviewedBy}
                    </p>
                  </figcaption>
                </figure>
              </Link>
            </nav>
          );
        })}
      </Carousel>
    </section>
  );
};

export default CategoriesSection;

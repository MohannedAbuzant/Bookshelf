import React, { ReactNode } from "react";
import { ICategory } from "@/types/categories";
import Image from "next/image";
import classes from "./browse-categories.module.scss";

const BrowseCategories = async (): Promise<ReactNode> => {
  const request = await fetch("http://localhost:3000/api/categories");
  const data = (await request.json()) as ICategory[];
  return (
    <section className="py-4 text-align-center">
      <h1 className="text-wrap-balance mb-3">
        <strong>Browse</strong>{" "}
        <span style={{ fontStyle: "normal" }}>
          {" "}
          Our Most Popular Categories
        </span>
      </h1>
      <section className="d-flex flex-column gap-4">
        {data?.map(({ id, image, description, title }) => {
          return (
            <article key={id} className="d-flex flex-column ">
              <figure className={classes.categoryContainer}>
                <Image
                  src={image}
                  width={130}
                  height={130}
                  className={classes.categoryImg}
                  alt={title}
                />
              </figure>
              <article>
                <h4>title</h4>
                <p className="text-gray mt-1">{description}</p>
              </article>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default BrowseCategories;

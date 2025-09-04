"use client";
import Image from "next/image";
import React from "react";
import { DataEntity } from "../types/type";
import { format } from "date-fns";
// import { CourseContent } from "./CourseContent";
import Breadcrumbs from "./Breadcrumbs";
import { StarIcon } from "@heroicons/react/solid";
import CourseContent from "./CourseContent";

export default function CoursePage({
  attributes: { Cover, Title, Description, Rating, updatedAt, Content, Price },
}: DataEntity) {
  return (
    <main className="py-2">
      <Breadcrumbs />

      <div className="py-2 h-full flex max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 grid grid-cols-12 gap-8">
        <main className="col-span-8">
          {/* Primary column */}
          <section
            aria-labelledby="primary-heading"
            className="min-w-0 h-full lg:order-last"
          >
            <h1 id="primary-heading" className="sr-only">
              Photos
            </h1>
            {/* Your content */}
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {Title}
            </p>
            <div className="py-5">
              <p className="text-lg text-gray-500">{Description}</p>
            </div>

            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    Math.trunc(Rating) > rating
                      ? "text-orange-300"
                      : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
              <p className="text-sm font-medium ml-4 text-gray-700">{Rating}</p>
            </div>

            <h3>Last updated {format(new Date(updatedAt), "M/yyyy")}</h3>

            {/* {Content && <CourseContent Content={Content} />} */}

            {Content && <CourseContent Content={Content} />}
          </section>
        </main>

        {/* Secondary column (hidden on smaller screens) */}
        <aside className="hidden col-span-4 border-l border-gray-200 lg:block p-4">
          {/* Your content */}

          <div className="group relative bg-white border border-gray-200 rounded-lg">
            <div className="bg-gray-200">
              <Image
                src={process.env.uploads + Cover.data.attributes.url}
                className="w-full h-full object-center object-cover sm:w-full sm:h-full !relative"
                fill={true}
                alt={Cover.data.attributes.alternativeText}
              />
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <div className="flex justify-between">
                <p className="text-lg text-gray-900 sm:text-xl">{Price} EGP</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to cart
              </button>

              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Buy now
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

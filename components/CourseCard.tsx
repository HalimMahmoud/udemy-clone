"use client";

import React from "react";
import { DataEntity } from "../types/type";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function CourseCard({
  attributes: { Cover, Title, Description, Paid, Price, Rating, Slug },
  id,
}: DataEntity) {
  return (
    <Link href={`/course/${Slug}`} className="px-1 absolute">
      <div className="group relative bg-white border border-gray-200 rounded-lg shadow">
        <div className="bg-gray-200 group-hover:opacity-75">
          <Image
            src={process.env.uploads + Cover.data.attributes.url}
            className="w-full h-full object-center object-cover sm:w-full sm:h-full !relative"
            fill={true}
            alt={Cover.data.attributes.alternativeText}
          />
        </div>
        <div className="flex-1 p-4 space-y-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">
            <>
              <span aria-hidden="true" className="absolute inset-0" />
              <span className="line-clamp-2">{Title}</span>
            </>
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{Description}</p>

          <div className="flex justify-between">
            <p className="text-lg text-gray-900 sm:text-xl">{Price} EGP</p>

            <div className="ml-4 pl-4 border-l border-gray-300 flex ">
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

                <p className="text-sm font-medium ml-4 text-gray-700">
                  {Rating}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

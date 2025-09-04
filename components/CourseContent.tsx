"use client";
import React from "react";
// import { Accordion } from "semantic-ui-react";
import { ContentEntity } from "../types/type";

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CourseContent({
  Content,
}: {
  Content: ContentEntity[];
}) {
  return (
    <>
      <h3 className="py-5 text-lg leading-6 font-medium text-gray-900">
        Course content
      </h3>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list">
          {Content.map((x) => (
            <Disclosure as="div" key={x.id}>
              {({ open }) => (
                <>
                  <li className="text-base border-b	border-b-gray-200">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900 flex items-center px-4 py-4 sm:px-6">
                        {x.Section}
                      </span>

                      <span className="ml-6 flex items-center px-4 py-4 sm:px-6">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </li>
                  <Disclosure.Panel
                    as="dd"
                    className="py-2  border-b	border-b-gray-200"
                  >
                    {x?.Lecture?.map((y) => (
                      <p
                        key={y.id}
                        className="text-base text-gray-500 flex items-center px-4 py-2 sm:px-6 "
                      >
                        <span className="h-6 w-6 mr-3">
                          <PlayIcon />
                        </span>
                        {y.Name}
                      </p>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
    </>
  );
}

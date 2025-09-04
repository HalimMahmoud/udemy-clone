"use client";

import {
  ArrowNarrowLeftIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { generateBreadcrumbs } from "../lib/generateBreadcrumbs";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const sections = useMemo(
    () => generateBreadcrumbs(pathname ? pathname : ""),
    [pathname]
  );
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div className="py-3">
        <nav className="flex" aria-label="Breadcrumb">
          <div className="flex sm:hidden">
            <a
              href="#"
              className="group inline-flex space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <ArrowNarrowLeftIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                aria-hidden="true"
              />
              <span>Back to Applicants</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="/" className="text-gray-400 hover:text-gray-500">
                    <HomeIcon
                      className="flex-shrink-0 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {sections.map((item) => (
                <li key={item.key}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />

                    <a
                      href={item.href ? item.href : ""}
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      aria-current={item.active ? "page" : undefined}
                    >
                      {item.content}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}

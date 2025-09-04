import { Suspense, use } from "react";
import CoursePage from "../../../components/CoursePage";
import { DataEntity } from "../../../types/type";

// export const dynamicParams = false;

async function getCourses() {
  const res = await fetch(
    `${process.env.strapiUrl}/courses?populate[Cover][populate]=%2A`
  );
  const json = await res.json();
  return json.data;
}

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map(({ attributes, id }: DataEntity) => ({
    slug: attributes.Slug,
  }));
}

async function getCourseById(slug: string) {
  const res = await fetch(
    `${process.env.strapiUrl}/courses?filters[slug]=${slug}&populate[0]=Content&populate[1]=Content.Lecture&populate[2]=Cover`
  );

  const resp = await res.json();

  return resp.data[0];
}

export default async function Layout({ params }: { params: { slug: string } }) {
  const course = await getCourseById(params.slug);
  return (
    // <Suspense>
    <CoursePage attributes={course.attributes} id={course.id} />
    // </Suspense>
  );
}

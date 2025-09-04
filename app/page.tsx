import Courses from "../components/Courses";
import Header from "../components/Header";
import { Data, DataEntity } from "../types/type";

async function getCourses() {
  const res = await fetch(
    `${process.env.strapiUrl}/courses?populate[Cover][populate]=%2A`
  );
  const json = await res.json();
  return json as Data;
}

const getCoursesPromise = getCourses();

export default async function Page() {
  const data = await getCoursesPromise;

  return (
    <>
      <Header />
      <Courses {...data} />
    </>
  );
}

"use client";
import { Data, DataEntity } from "../types/type";
import CourseCard from "./CourseCard";
import { NewSlides } from "./NewSlides";
import { Slide } from "pure-react-carousel";

export default function Courses({ data }: Data) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <NewSlides>
        {newData?.map(({ attributes, id }) => (
          <Slide key={id} index={id}>
            <CourseCard attributes={attributes} id={id} />
          </Slide>
        ))}
      </NewSlides>
    </div>
  );
}

const newData = [
  {
    id: 1,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 1.5,
      Paid: true,
      Cover: {
        data: {
          id: 3,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 3,
      Paid: true,
      Cover: {
        data: {
          id: 3,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 3.4,
      Paid: true,
      Cover: {
        data: {
          id: 3,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 4,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 4.3,
      Paid: true,
      Cover: {
        data: {
          id: 3,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 5,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 2.3,
      Paid: true,
      Cover: {
        data: {
          id: 3,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 6,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 3,
      Paid: true,
      Cover: {
        data: {
          id: 4,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 7,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 3,
      Paid: true,
      Cover: {
        data: {
          id: 2.7,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 8,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 3,
      Paid: true,
      Cover: {
        data: {
          id: 4.2,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 9,
    attributes: {
      Title: "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
      Description:
        "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
      Price: 50,
      createdAt: "2022-08-09T16:54:06.057Z",
      updatedAt: "2022-08-28T00:34:05.689Z",
      publishedAt: "2022-08-09T17:17:11.351Z",
      Slug: "learn-the-mern-stack",
      Rating: 2.1,
      Paid: true,
      Cover: {
        data: {
          id: 3,
          attributes: {
            name: "hqdefault.jpg",
            alternativeText: "hqdefault.jpg",
            caption: "hqdefault.jpg",
            width: 476,
            height: 247,
            formats: {
              thumbnail: {
                name: "thumbnail_hqdefault.jpg",
                hash: "thumbnail_hqdefault_1d3a04ad61",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 245,
                height: 127,
                size: 8.44,
                url: "/uploads/thumbnail_hqdefault_1d3a04ad61.jpg",
              },
            },
            hash: "hqdefault_1d3a04ad61",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 21.63,
            url: "/uploads/hqdefault_1d3a04ad61.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2022-08-10T16:59:51.455Z",
            updatedAt: "2022-09-03T14:10:50.873Z",
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
                {
                  id: 1,
                  attributes: {
                    __type: "api::course.course",
                    Title:
                      "Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack",
                    Description:
                      "This is the goalsetter app from the Learn The MERN Stack Learn The MERN Stack Learn The MERN Stack series on YouTube.",
                    Price: 50,
                    createdAt: "2022-08-09T16:54:06.057Z",
                    updatedAt: "2022-08-28T00:34:05.689Z",
                    publishedAt: "2022-08-09T17:17:11.351Z",
                    Slug: "learn-the-mern-stack",
                    Rating: 3,
                    Paid: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
];

export interface Data {
  data?: DataEntity[] | null;
  meta: Meta;
}
export interface DataEntity {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  Title: string;
  Description: string;
  Price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Slug: string;
  Rating: number;
  Paid: boolean;
  Content?: ContentEntity[] | null;
  Cover: Cover;
}
export interface ContentEntity {
  id: number;
  Section: string;
  Lecture?: LectureEntity[] | null;
}
export interface LectureEntity {
  id: number;
  Name: string;
}
export interface Cover {
  data: Data1;
}
export interface Data1 {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats {
  thumbnail: Thumbnail;
}
export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
export interface Meta {
  pagination: Pagination;
}
export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

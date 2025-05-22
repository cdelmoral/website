export type Site = {
  NAME: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export enum Color {
  BLUE = "blue",
  RED = "red",
  PURPLE = "purple",
}

export enum LibraryItemType {
  BLOG = "blog",
  BOOK = "book",
  VIDEO = "video",
}

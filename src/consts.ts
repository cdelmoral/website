import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Carlos del Moral",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my site!",
};

export const READS: Metadata = {
  TITLE: "Procrastinate",
  DESCRIPTION: "Some procrastination material, in no specific order.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/cdelmoral",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/cdelmoralronda",
  },
  {
    NAME: "flickr",
    HREF: "https://flickr.com/photos/cdelmoral",
  },
];

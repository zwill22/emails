import { ReactNode } from "react";

export interface LinkProps {
  href: string;
  text?: string;
  img: string;
  alt: string;
}

export interface EmailProps {
  name?: string;
  info?: string[];
  title?: string;
  content?: string;
  links?: LinkProps[];
  pictureLinks?: LinkProps[];
  previewText?: string;
  copyright?: string;
}

export type EmailTemplate = (props: EmailProps) => ReactNode;
export type Renderer = (props: EmailProps) => Promise<string>;

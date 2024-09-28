import type { IIconProps } from "@/components/icon/types";

export type SocialMediaPropTypes = {
  id: string;
  label: string;
  icon: IIconProps["icon"];
  href: string;
};

export const SOCIAL_MEDIA: SocialMediaPropTypes[] = [
  {
    id: "github",
    href: "https://github.com/leoromero97",
    icon: "GitHub",
    label: "GitHub",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/leonardogerbacioromero/",
    icon: "Linkedin",
    label: "Linkedin",
  },
  {
    id: "behance",
    href: "https://www.behance.net/leonardogromero",
    icon: "Behance",
    label: "Behance",
  },
];

import { CategoryTypes } from "@/components/pill/types";

export type ServicePropTypes = {
  id: string;
  category: CategoryTypes;
  categoryLabel: string;
  title: string;
  href?: string;
};

export const SERVICES: ServicePropTypes[] = [
  {
    id: "deslp",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de landing page",
  },
  {
    id: "devlp",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de landing page",
  },
  {
    id: "desfrrss",
    category: "design",
    categoryLabel: "Diseño",
    title: "Flyers para redes sociales",
  },
  {
    id: "dessw",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de sitio web",
  },
  {
    id: "devsw",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de sitio web",
  },
  {
    id: "desappm",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de aplicación móvil",
  },
  {
    id: "devappm",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de aplicación móvil",
  },
  {
    id: "desec",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de e-commerce",
  },
  {
    id: "devec",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de e-commerce",
  },
  {
    id: "desappw",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de aplicación web",
  },
  {
    id: "devappw",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de aplicación web",
  },
  {
    id: "desmm",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de manual de marca",
  },
  {
    id: "descom",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de componentes",
  },
  {
    id: "devcom",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de componentes",
  },
  {
    id: "despe",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de plantilla de email",
  },
  {
    id: "devpe",
    category: "development",
    categoryLabel: "Desarrollo",
    title: "Desarrollo de plantilla de email",
  },
  {
    id: "descv",
    category: "design",
    categoryLabel: "Diseño",
    title: "Diseño de curriculum vitae",
  },
  {
    id: "edumfe",
    category: "education",
    categoryLabel: "Educación",
    title: "Mentoría de desarrollo frontend",
  },
  {
    id: "edupe",
    category: "education",
    categoryLabel: "Educación",
    title: "Prácticas de entrevistas",
  },
  {
    id: "edupet",
    category: "education",
    categoryLabel: "Educación",
    title: "Prácticas de entrevistas técnicas",
  },
  {
    id: "advhd",
    category: "advisory",
    categoryLabel: "Asesoría",
    title: "Asesoría en herramientas digitales",
  },
  {
    id: "advdf",
    category: "advisory",
    categoryLabel: "Asesoría",
    title: "Asesoría en desarrollo frontend",
  },
  {
    id: "advseo",
    category: "advisory",
    categoryLabel: "Asesoría",
    title: "Asesoría en SEO de páginas web",
  },
];

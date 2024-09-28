import { SOCIAL_MEDIA } from "@/constants/socialMedia";
import Button from "../button";
import Link from "next/link";
import Icon from "../icon";
import clsx from "clsx";
import { baseStyles, buttonStyles } from "../button/styles";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="flex flex-col pt-10 pb-32 px-5 gap-10 md:gap-20 lg:gap-40 w-full max-w-7xl">
      <div className="flex flex-col lg:flex-row md:justify-between gap-10">
      <div className="flex flex-col w-full lg:w-auto lg:max-w-2xl gap-10 lg:gap-16">
        <div className="flex flex-col gap-2">
          <strong className="text-h4">Estoy para ayudarte</strong>
          <p>
            Si tenes un emprendimiento, un negocio, o necesitas ayuda en alguno
            de mis servicios digitales, me podes contactar sin compromiso
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-4 lg:flex-row">
          <Button
            variation="gradient"
            title="Agendar reunión"
            icon="Calendar"
            className="w-full"
            external
            href="https://calendly.com/d/cqbz-545-9sn/reunion-por-servicios-digitales"
          />
          <a
            href="/assets/files/CV_Leonardo_Esteban_Gerbacio_Romero.pdf"
            download="CV Leonardo Gerbacio Romero"
            className={clsx(baseStyles, buttonStyles["secondary"], "w-full")}
          >
            <Icon icon="Download" />
            Descargar CV
          </a>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-auto gap-10 lg:gap-16">
        <ul className="flex gap-4 w-full">
          {SOCIAL_MEDIA.map(({ href, icon, id, label }) => (
            <li key={id} title={label}>
              <Link
                href={href}
                className="p-2 flex items-center justify-center bg-silver-800 hover:bg-silver-700 rounded"
              >
                <Icon icon={icon} className="h-8 w-8" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="gap-4 flex flex-col">
          <li className="gap-2 flex items-center">
            <Icon icon="IconLocation" />
            <span className="text-silver-300 text-sm lg:text-base">Buenos Aires, Argentina</span>
          </li>
          <li>
            <Link
              href="mailto:leonardogerbacio@gmail.com"
              className="text-sm lg:text-base gap-2 flex items-center text-silver-300 hover:text-silver-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="Email" />
              leonardogerbacio@gmail.com
            </Link>
          </li>
        </ul>
      </div>
      </div>
      <Link
        href="https://www.linkedin.com/in/leonardogerbacioromero/"
        className="text-sm lg:text-base font-semibold text-silver-300 text-center hover:text-silver-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Diseñado y desarrollado por Leonardo Gerbacio Romero - Todos los derechos reservados ${currentYear}`}
      </Link>
    </footer>
  );
}

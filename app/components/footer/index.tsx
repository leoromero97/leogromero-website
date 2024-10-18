import { SOCIAL_MEDIA } from "@/constants/socialMedia";
import Button from "../button";
import Link from "next/link";
import Icon from "../icon";
import clsx from "clsx";
import {
  baseStyles,
  buttonStylesDark,
  buttonStylesLight,
} from "../button/styles";
import useTheme from "@/hooks/useTheme";

export default function Footer() {
  const { isDark, isLight } = useTheme();
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="flex flex-col pt-10 pb-32 px-5 gap-10 md:gap-20 lg:gap-40 w-full max-w-7xl">
      <div className="flex flex-col lg:flex-row md:justify-between gap-10">
        <div className="flex flex-col w-full lg:w-auto lg:max-w-2xl gap-10 lg:gap-16">
          <div className="flex flex-col gap-2">
            <strong
              className={clsx(
                "text-h4",
                isDark && "text-silver-0",
                isLight && "text-silver-900"
              )}
            >
              Estoy para ayudarte
            </strong>
            <p
              className={clsx(
                isDark && "text-silver-200",
                isLight && "text-silver-700"
              )}
            >
              Si tenes un emprendimiento, un negocio, o necesitas ayuda en
              alguno de mis servicios digitales, me podes contactar sin
              compromiso
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
              className={clsx(
                baseStyles,
                isDark && buttonStylesDark["secondary"],
                isLight && buttonStylesLight["secondary"],
                "w-full"
              )}
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
                  className={clsx(
                    "p-2 flex items-center justify-center  rounded",
                    isDark && "text-silver-0 bg-silver-800 hover:bg-silver-700",
                    isLight &&
                      "text-silver-900 bg-silver-100 hover:bg-silver-200"
                  )}
                >
                  <Icon icon={icon} className="h-8 w-8" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="gap-4 flex flex-col">
            <li
              className={clsx(
                "gap-2 flex items-center",
                isDark && "text-silver-200",
                isLight && "text-silver-700"
              )}
            >
              <Icon icon="IconLocation" />
              <span className="text-sm lg:text-base">
                Buenos Aires, Argentina
              </span>
            </li>
            <li>
              <Link
                href="mailto:leonardogerbacio@gmail.com"
                className={clsx(
                  "text-sm lg:text-base gap-2 flex items-center",
                  isDark && "text-silver-200 hover:text-silver-100",
                  isLight && "text-silver-700 hover:text-silver-800"
                )}
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
        className={clsx(
          "text-sm lg:text-base font-semibold text-center",
          isDark && "text-silver-200 hover:text-silver-100",
          isLight && "text-silver-700 hover:text-silver-800"
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Diseñado y desarrollado por Leonardo Gerbacio Romero - Todos los derechos reservados ${currentYear}`}
      </Link>
    </footer>
  );
}

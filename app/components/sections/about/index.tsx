import Image from "next/image";
import leoPictureAbout from "@/assets/leo-gerbacio-romero-about.png";
import SliderTools from "@/components/sliderTools";
import GridTools from "@/components/gridTools";
import Button from "@/components/button";
import { texts } from "@/constants/texts";
import { externalLink } from "@/constants/externalMessage";
import useTheme from "@/hooks/useTheme";
import clsx from "clsx";

function AboutSection() {
  const { isDark, isLight } = useTheme();

  return (
    <section className="flex flex-col pt-10 pb-20 px-5 gap-10 w-full max-w-7xl overflow-hidden lg:overflow-visible relative">
      <div className="flex flex-col gap-5">
        <Image
          alt="Foto de Leo"
          src={leoPictureAbout}
          className="lg:hidden h-60 w-60 self-center ease-in-out"
        />
        <h2
          className={clsx(
            "text-h4 lg:text-h3 font-semibold  text-center",
            isDark && "text-silver-0",
            isLight && "text-silver-900"
          )}
        >
          Leonardo Gerbacio Romero
        </h2>
        <span
          className={clsx(
            "text-subtitle font-bold text-center lg:text-4xl",
            isDark && "text-silve-300",
            isLight && "text-silver-700"
          )}
        >
          Frontend UI Developer
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
        <div
          className={clsx(
            "flex flex-col gap-5 lg:gap-10 lg:max-w-md lg:text-xl",
            isDark && "text-silver-200",
            isLight && "text-silver-700"
          )}
        >
          <p>
            Quiero ayudarte a crecer digitalmente a vos y a tu negocio de forma
            personalizada
          </p>
          <p>
            Cuento con más de 5 años de experiencia desarrollando productos
            digitales de forma freelance o trabajando para empresas
          </p>
          <p className="hidden lg:flex">
            Me especializo en el desarrollo web de interfaces digitales, con
            amplios conocimientos en el diseño UX y UI, gestión de proyectos, y
            desarrollo frontend
          </p>
          <p className="hidden lg:flex">
            Es necesario entender tus necesidades y las de tus personas usuarias
            o clientes, podemos co-crear en conjunto desde cero
          </p>
          <p className="hidden lg:flex">
            Te voy a acompañar en el uso de las herramientas de vanguardia que
            utilizo para trabajar día a día, acercándote a este mundo digital
          </p>
          <p className="font-semibold">¿Empezamos?</p>
          <Button
            text={texts.actions.contactForWpp}
            icon="WhatsApp"
            className="w-full max-w-sm lg:flex hidden"
            external
            to={externalLink}
          />
        </div>
        <div className="flex absolute min-w-[400px] min-h-[400px] lg:min-h-[1000px] lg:min-w-[1000px] bg-gradient-to-bl from-transparent to-blue-600 rounded-full -right-40 top-8 lg:top-0 -z-20 blur-3xl opacity-60"></div>
        <SliderTools />
        <GridTools />
      </div>
    </section>
  );
}

export default AboutSection;

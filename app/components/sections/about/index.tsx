import Image from "next/image";
import leoPictureAbout from "@/assets/leo-gerbacio-romero-about.png";
import SliderTools from "@/components/sliderTools";

function AboutSection() {
  return (
    <div className="flex flex-col py-10 px-5 gap-5">
      <Image
        alt="Foto de Leo"
        src={leoPictureAbout}
        className="lg:hidden h-60 w-60 self-center"
      />
      <h2 className="text-h4 font-semibold text-silver-0 text-center">
        Leonardo Gerbacio Romero
      </h2>
      <span className="text-subtitle font-bold">Frontend UI Developer</span>
      <p>Quiero ayudarte a crecer digitalmente de forma personalizada</p>
      <p>
        Cuento con más de 5 años de experiencia desarrollando productos
        digitales de forma freelance o trabajando para empresas
      </p>
      <SliderTools />
    </div>
  );
}

export default AboutSection;

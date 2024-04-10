import Image from "next/image";
import leoPictureAbout from "@/assets/leo-gerbacio-romero-about.png";
import SliderTools from "@/components/sliderTools";

function AboutSection() {
  return (
    <div className="flex flex-col pt-10 pb-20 px-5 gap-10 border-white w-full max-w-7xl overflow-hidden">
      <div className="flex flex-col gap-5">
        <Image
          alt="Foto de Leo"
          src={leoPictureAbout}
          className="lg:hidden h-60 w-60 self-center"
        />
        <h2 className="text-h4 font-semibold text-silver-0 text-center">
          Leonardo Gerbacio Romero
        </h2>
        <span className="text-subtitle font-bold text-center">
          Frontend UI Developer
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <p>Quiero ayudarte a crecer digitalmente de forma personalizada</p>
        <p>
          Cuento con más de 5 años de experiencia desarrollando productos
          digitales de forma freelance o trabajando para empresas
        </p>
        <SliderTools />
      </div>
    </div>
  );
}

export default AboutSection;

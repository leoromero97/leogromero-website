import CardService from "@/components/cardService";
import { ServicePropTypes, SERVICES } from "@/constants/services";
import useTheme from "@/hooks/useTheme";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

export default function ServicesSection() {
  const [services, setServices] = useState<ServicePropTypes[]>([]);
  const { isDark, isLight } = useTheme();
  useEffect(() => {
    const sortServices = SERVICES.toSorted(() => Math.random() - 0.5);
    setServices(sortServices);
  }, []);

  return (
    <section className="flex flex-col pt-10 pb-20 px-5 gap-10 w-full max-w-7xl overflow-hidden lg:overflow-visible">
      <h2
        className={clsx(
          "text-h4 lg:text-h3 font-semibold text-center",
          isDark && "text-silver-0",
          isLight && "text-silver-900"
        )}
      >
        Servicios
      </h2>
      <p
        className={clsx(
          "lg:text-xl",
          isDark && "text-silver-200",
          isLight && "text-silver-700"
        )}
      >
        Si buscas soluciones digitales que abarquen diseño, desarrollo, UX,
        producto, asesoría, mentoría o seguimiento estás a un mensaje de empezar
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 place-items-center">
        {services.map(({ category, categoryLabel, id, title }) => (
          <li key={id}>
            <CardService
              category={category}
              categoryLabel={categoryLabel}
              id={id}
              title={title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

import clsx from "clsx";
import { MenuBurgerProps } from "./types";

function MenuBurger({ onPressBurger, isBurger }: MenuBurgerProps) {
  const stateLabel = isBurger ? "ver" : "ocultar";

  return (
    <button
      className={clsx(
        "flex flex-col h-8 w-8 transition-all delay-75 ease-in-out",
        isBurger ? "gap-2" : "gap-1 pt-1"
      )}
      onClick={onPressBurger}
      title={`Hacer click para ${stateLabel} menú`}
    >
      <span
        className={clsx(
          `w-full h-1 bg-silver-0 rounded-sm transition-all delay-75 ease-in-out`,
          isBurger ? "rotate-0" : "rotate-45 translate-y-2"
        )}
      ></span>
      <span
        className={clsx(
          ` h-1 bg-silver-0 rounded-sm transition-all delay-150 ease-in-out`,
          isBurger ? "w-3/4 opacity-100" : "w-0 opacity-0 "
        )}
      ></span>
      <span
        className={clsx(
          `w-full h-1 bg-silver-0 rounded-sm transition-all delay-75 ease-in-out`,
          isBurger ? "rotate-0" : "-rotate-45 -translate-y-2"
        )}
      ></span>
    </button>
  );
}

export default MenuBurger;

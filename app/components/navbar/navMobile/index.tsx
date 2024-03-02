import Link from "next/link";
import clsx from "clsx";
import { navbarLinks } from "@/constants/navbarLinks";
import { NavMobileProps } from "@/components/navbar/navMobile/types";
import Icon from "@/components/icon";
// import ToggleTheme from "@/components/ToggleTheme";
import { externalLink } from "@/constants/externalMessage";
import { texts } from "@/constants/texts";
import Button from "@/components/button";
import MenuBurger from "../menuBurger";
import { useState } from "react";

function NavMobile({ menuOpened, onClick }: NavMobileProps) {
  // const { isDark, isLight, labelTheme, toggleTheme } = useTheme();
  const [isBurger, setIsBurger] = useState(true);

  const handleOnPressBurger = () => {
    onClick?.();
    setIsBurger(!isBurger);
  };

  return (
    <header
      className={clsx(
        "flex items-center justify-center w-full fixed z-10 bg-blue-900 text-silver-0",
        menuOpened && "flex-col z-50 min-h-screen justify-between"
        /*       isDark && 'bg-skyblue-80 text-skyblue-20',
      isLight && 'bg-white text-skyblue-90 shadow-drop-3', */
      )}
    >
      <div className="max-w-8xl flex items-center justify-between w-full px-8 py-7">
        <Link href="/" title="Ir al Home">
          <Icon icon="LeoGerbacioRomeroLogo" className="h-16 w-1h-16" />
        </Link>
        <div className="flex items-center justify-center outline-none hover:cursor-pointer">
          <MenuBurger onPressBurger={handleOnPressBurger} isBurger={isBurger} />
        </div>
      </div>
      {menuOpened && (
        <nav
          className={clsx(
            "flex items-center gap-2 flex-col w-full font-normal flex-1 justify-between transition-all delay-300 ease-in-out"
          )}
        >
          <ul className={clsx("flex w-full", "flex-col flex-shrink-0 pt-20")}>
            {navbarLinks.map((navItem) => (
              <li
                key={navItem.id}
                title={navItem.title}
                className="w-full flex items-center"
                onClick={onClick}
              >
                <Link
                  href={navItem?.href}
                  scroll={false}
                  className={
                    clsx(`
                    w-full 
                    hover:text-skyblue 
                    active:font-semibold 
                    font-medium 
                    rounded  
                    text-lg 
                    ease-in-out 
                    duration-100 
                    py-4 
                    px-8`)
                    /*               isDark && 'hover:bg-skyblue-90',
                    isLight && 'hover:bg-skyblue-10', */
                  }
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
            {/*             <ToggleTheme
              handleToggleTheme={toggleTheme}
              isDark={isDark}
              isLight={isLight}
              theme={labelTheme}
              className="mx-8 my-14"
            /> */}
          </ul>
          <div className="flex justify-center w-full pb-14 px-8 gap-8">
            <Button
              text={texts.actions.contactForWpp}
              icon="WhatsApp"
              className={"w-full max-w-sm"}
              external
              to={externalLink}
            />
          </div>
        </nav>
      )}
    </header>
  );
}

export default NavMobile;

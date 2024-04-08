"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useThemeContext } from "@/context/ThemeProvider";
import Image from "next/image";

const Theme = () => {
  const { mode, setMode } = useThemeContext();
  const isDark = mode === "dark";

  const imageConfig = {
    height: 20,
    width: 20,
    src: `/assets/icons/${isDark ? "moon.svg" : "sun.svg"}`,
    alt: isDark ? "moon" : "sun",
  };

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="data[state=open]:bg-light-900 dark:data[state=open]:bg-dark-200 focus:bg-light-900 dark:focus:bg-dark-200">
          <Image
            src={imageConfig.src}
            height={imageConfig.height}
            width={imageConfig.width}
            alt={imageConfig.alt}
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map(({ value, icon, label }) => (
            <MenubarItem
              key={icon}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setMode(value);

                if (value !== "system") {
                  localStorage.theme = value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={icon}
                alt={value}
                width={16}
                height={16}
                className={`${mode === value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${mode === value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;

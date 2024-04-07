"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useThemeContext } from "@/context/ThemeProvider";
import Image from "next/image";

const Theme = () => {
  const { mode } = useThemeContext();
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
        <MenubarTrigger className="data[state=open]:bg-light-900 focus:bg-light-900 dark:data[state=open]:bg-dark-200 dark:focus:bg-dark-200">
          <Image
            src={imageConfig.src}
            height={imageConfig.height}
            width={imageConfig.width}
            alt={imageConfig.alt}
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="dark:border-dark-400 dark:bg-dark-300 absolute -right-12 mt-3 min-w-[120px] rounded border py-2">
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;

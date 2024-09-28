"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
    const { theme } = useTheme();

    const isDarkMode =
        theme === "dark" ||
        (theme === "system" && window.matchMedia?.("(prefers-color-scheme: dark)")?.matches);

    return (
        <Image
            src={isDarkMode ? "/favicon-dark.png" : "/favicon-light.png"}
            alt="Icon"
            width={32}
            height={32}
        />
    );
};

export default Logo;
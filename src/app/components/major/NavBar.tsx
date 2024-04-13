"use client";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "@/app/utils/ThemeContext";

const tabs = [
    {
        title: "Work Experience",
        link: "/work",
    },
    {
        title: "Articles",
        link: "/articles",
    },
    {
        title: "Education",
        link: "/education",
    },
    {
        title: "Early Years",
        link: "/early",
    },
];

export default function NavBar() {
    const themeContext = useContext(ThemeContext);
    const [mainClassName, setMainClassName] = useState<string>("text-transparent bg-transparent");
    const [themeToggleClassName, setThemeToggleClassName] = useState<string>("text-transparent bg-transparent");
    const [themeToggleLightClassName, setThemeToggleLightClassName] = useState<string>("opacity-0 w-0 h-0 top-1/2 left-1/2");
    const [themeToggleDarkClassName, setThemeToggleDarkClassName] = useState<string>("opacity-0 w-0 h-0 top-1/2 left-1/2");
    // const [mainClassName, setMainClassName] = useState<string>(() => {
    //     console.log("in main class name");
    //     console.log(themeContext.theme);
    //     if (themeContext.theme === "light") {
    //         return "bg-foreground text-black";
    //     }
    //     return "bg-black text-foreground";
    // });
    // const [themeToggleClassName, setThemeToggleClassName] = useState<string>(() => {
    //     if (themeContext.theme === "light") {
    //         return "text-black-100 hover:text-black";
    //     }
    //     return "text-foreground-200 hover:text-foreground";

    // });
    // const [themeToggleLightClassName, setThemeToggleLightClassName] = useState<string>(() => {
    //     if (themeContext.theme === "light") {
    //         return "opacity-100 w-[24px] h-[24px] top-0 left-0";
    //     }
    //     return "opacity-0 w-0 h-0 top-1/2 left-1/2";

    // });
    // const [themeToggleDarkClassName, setThemeToggleDarkClassName] = useState<string>(() => {
    //     if (themeContext.theme === "light") {
    //         return "opacity-0 w-0 h-0 top-1/2 left-1/2";
    //     }
    //     return "opacity-100 w-[24px] h-[24px] top-0 left-0";
    // });

    useEffect(() => {
        if (themeContext.theme === "light") {
            setMainClassName("bg-foreground text-black");
            setThemeToggleClassName("text-black-100 hover:text-black");
            setThemeToggleDarkClassName("opacity-0 w-0 h-0 top-1/2 left-1/2");
            setThemeToggleLightClassName("opacity-100 w-[24px] h-[24px] top-0 left-0");
        }
        else if (themeContext.theme === "dark") {
            setMainClassName("bg-black text-foreground");
            setThemeToggleClassName("text-foreground-200 hover:text-foreground");
            setThemeToggleDarkClassName("opacity-100 w-[24px] h-[24px] top-0 left-0");
            setThemeToggleLightClassName("opacity-0 w-0 h-0 top-1/2 left-1/2");
        }
    }, [themeContext.theme]);

    const toggleTheme = () => {
        themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");
    };


    return (
        <div className={twMerge(`flex-shrink w-full transition-colors`, mainClassName)}>
            <header className="mx-auto px-8 max-w-[900px] flex justify-center z-1">
                <div className="flex-1 flex items-baseline">
                    <Link href="/" className="font-lilita text-2xl text-background">Ethan Pollack</Link>
                    <nav className="flex">
                        <ul className="flex">
                            {
                                tabs.map((tab, i) => {
                                    return (
                                        <li className="m-[10px]" key={i}>
                                            <div className="flex">
                                                <Link className="p-[10px]" href={tab.link}>{tab.title}</Link>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div className="flex items-baseline m-auto">
                    <button onClick={toggleTheme} className="relative h-[24px] w-[24px]">
                        <IconMoonFilled className={twMerge(`absolute transition-all transition-[cubic-bezier(0.465, 0.245, 0.570, 1.240)]`, themeToggleClassName, themeToggleDarkClassName)} />
                        <IconSunFilled className={twMerge(`absolute transition-all transition-[cubic-bezier(0.465, 0.245, 0.570, 1.240)]`, themeToggleClassName, themeToggleLightClassName)} />
                    </button>
                </div>

            </header>

        </div>
    );
}
"use client"

import { useState, createContext } from "react";

export type Theme = "light" | "dark" | "red";

export interface ThemeContextData {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextData>({
    theme: "light",
    setTheme: () => { },
});

function getClientTheme(forceTheme?: Theme): "light" | "dark" | "red" {

    if (forceTheme) {
        return forceTheme;
    }

    if (typeof window === 'undefined') {
        return "dark";
    }

    const local = localStorage.getItem("prefTheme");
    if (local) {
        return local as Theme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeContextProvider({ children, forceTheme }: {
    children: React.ReactNode;
    forceTheme?: Theme;
}) {
    const [theme, setTheme] = useState<Theme>(getClientTheme(forceTheme));

    function setThemeAndStore(theme: Theme) {
        localStorage.setItem("prefTheme", theme);
        setTheme(theme);
    }

    // useEffect(() => {
    //     console.log("Theme is", theme);
    // }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setThemeAndStore }}>
            {children}
        </ThemeContext.Provider>
    );
}

import Link from "next/link";
import { HeaderNode } from "./utils/headerHelpers";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { ArticleContext } from "./Article";
import { ThemeContext } from "@/app/utils/ThemeContext";

export default function Contents({ headers }: { headers: HeaderNode[]; }) {

    const themeContext = useContext(ThemeContext);
    const articleContext = useContext(ArticleContext);

    return (
        <div className="mt-4 font-sans w-min">
            <h2 className="font-[500] text-xl tracking-wider mb-4 text-nowrap">TABLE OF CONTENTS</h2>
            <ul>
                {headers.map((header, i) => {
                    const [style, setStyle] = useState<CSSProperties>({
                        fontSize: `${1 - (header.level - 1) * 0.1}rem`,
                        paddingLeft: `${header.level * 1.2}rem`,
                        color: "transparent"
                    });

                    useEffect(() => {
                        let newStyle: CSSProperties;

                        if (themeContext.theme === "light") {
                            newStyle = {
                                fontSize: `${1 - (header.level - 1) * 0.1}rem`,
                                paddingLeft: `${header.level * 1.2}rem`,
                                color: header.level === 1 ? "var(--black)" : "var(--black-100)"
                            };
                        }
                        else {// if (themeContext.theme === "dark") {
                            newStyle = {
                                fontSize: `${1 - (header.level - 1) * 0.1}rem`,
                                paddingLeft: `${header.level * 1.2}rem`,
                                color: header.level === 1 ? "var(--foreground)" : "var(--foreground-200)"
                            };
                        }

                        if (articleContext.activeHeader && articleContext.activeHeader.uid === header.uid) {
                            newStyle = {
                                ...newStyle,
                                color: "var(--background)"
                            };
                        }
                        setStyle(newStyle);
                    }, [themeContext.theme, header.level, articleContext.activeHeader]);

                    return (
                        <Link
                            key={i}
                            href={`#${header.id}`}
                            className={`block leading-4 pb-3 text-base font-sans font-normal hover:font-semibold transition-all`}
                            style={style}
                        >
                            {header.text}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}

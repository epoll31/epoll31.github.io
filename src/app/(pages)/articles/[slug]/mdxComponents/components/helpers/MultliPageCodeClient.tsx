"use client";

import React, { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useCallback, useMemo, useState } from "react";
import { useContext } from "react";
import { ArticleContext } from "../../../Article";

function brightenColor(hslColor: string = "", delta: number): string {
    const hslPattern = /hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/;
    const match = hslColor.match(hslPattern);
    if (!match) return '';

    const [h, s, l] = match.slice(1).map(num => parseInt(num, 10));
    const newL = Math.max(0, Math.min(100, l + delta));
    return `hsl(${h}, ${s}%, ${newL}%)`;
}

export default function MultiPageCodeClient({
    children,
    pageNames
}: {
    children: React.ReactNode;
    pageNames: string[];
}) {
    const { codeTheme: theme } = useContext(ArticleContext);
    const [activeTab, setActiveTab] = useState(0);
    const activeChild = useMemo(() => React.Children.toArray(children)[activeTab], [children, activeTab]);


    const handleTabClicked = useCallback((index: number) => {
        if (index !== activeTab) {
            setActiveTab(index);
        }
    }, [activeTab]);
    const buttonStyles = useCallback((index: number) => ({
        backgroundColor: activeTab === index ? theme.plain.backgroundColor : brightenColor(theme.plain.backgroundColor, -2),
        color: theme.plain.color,
        borderTopRightRadius: '0.5rem',
        borderTopLeftRadius: '0.5rem'
    }), [activeTab, theme]);

    return (
        <div className="mb-4">
            <div
                className="mx-5 flex justify-start gap-1 overflow-x-scroll scrollbar-none"
            // style={{
            //     scrollbarColor: ` ${theme.plain.backgroundColor} ${brightenColor(theme.plain.backgroundColor, -2)}`,
            // }}
            >
                {pageNames.map((name, i) => (
                    <button
                        key={i}
                        className={`w-fit self-end px-3 py-1 text-sm`}
                        style={buttonStyles(i)}
                        onClick={() => handleTabClicked(i)}
                    >
                        {name}
                    </button>
                ))}
            </div>
            <div>
                {activeChild}
            </div>
        </div>
    );
}


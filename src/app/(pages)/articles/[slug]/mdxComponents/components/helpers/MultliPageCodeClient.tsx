"use client";

import React, { useCallback, useMemo, useState } from "react";
import gruvboxDarkTheme from "./gruvboxDarkTheme";

export default function MultiPageCodeClient({
    children,
    pageNames
}: {
    children: React.ReactNode;
    pageNames: string[];
}) {
    const theme = gruvboxDarkTheme;

    const [activeTab, setActiveTab] = useState(0);
    const activeChild = useMemo(() => React.Children.toArray(children)[activeTab], [children, activeTab]);

    const handleTabClicked = useCallback((index: number) => {
        if (index !== activeTab) {
            setActiveTab(index);
        }
    }, [activeTab]);
    const buttonStyles = useCallback((index: number) => ({
        backgroundColor: theme.plain.backgroundColor,
        opacity: activeTab === index ? 1 : 0.8,
        color: theme.plain.color,
        borderTopRightRadius: '0.5rem',
        borderTopLeftRadius: '0.5rem'
    }), [activeTab]);

    return (
        <div className="mb-4">
            <div className="mx-5 flex justify-start gap-1 overflow-x-scroll scrollbar-none">
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


"use client";

import { useContext } from "react";
import { ArticleContext } from "../../../Article";

export default function InlineCode({
    code,
}: {
    code: string;
}) {
    const { codeTheme: theme } = useContext(ArticleContext);

    return (
        <code
            className={`text-base font-normal font-mono px-1 py-[0.125rem] rounded-lg`}
            style={{
                backgroundColor: theme.plain.backgroundColor,
                color: theme.plain.color,
            }}
        >
            {code}
        </code >
    );
}
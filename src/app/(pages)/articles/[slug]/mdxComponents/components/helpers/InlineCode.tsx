// "use client";


import { PrismTheme } from "prism-react-renderer";

export default function InlineCode({
    code,
    theme,
}: {
    code: string;
    theme: PrismTheme;
}) {

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
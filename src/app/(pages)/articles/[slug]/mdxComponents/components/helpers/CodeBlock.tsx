"use client";

import { IconClipboard } from "@tabler/icons-react";
import { Highlight, PrismTheme } from "prism-react-renderer"
import { twMerge } from "tailwind-merge";

export default function CodeBlock({
    code,
    language,
    theme
}: {
    code: string;
    language: string;
    theme: PrismTheme;
}) {
    return (
        <div className="relative group">
            <Highlight
                code={code}
                language={language}
                theme={theme}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={twMerge(className, 'scrollbar')}
                        style={{
                            ...style,
                            padding: '1rem',
                            overflowX: 'auto',
                            borderRadius: '0.5rem',
                            scrollbarColor: `${theme.plain.color} transparent`,
                        }}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })} key={i}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} key={key} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>

            <button
                className="absolute top-1 right-1 text-transparent group-hover:text-blue hover:scale-110 active:scale-90 transition-all"
                onClick={() => navigator.clipboard.writeText(code)}
            >
                <IconClipboard />
            </button>
        </div>
    );
}
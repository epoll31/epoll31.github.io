"use client";
import { Highlight, PrismTheme } from "prism-react-renderer"

export default function MultilineCode({
    code,
    language,
    theme
}: {
    code: string;
    language: string;
    theme: PrismTheme;
}) {
    return (
        <Highlight
            code={code}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{
                        ...style,
                        padding: '1rem',
                        marginBlock: '0.5rem',
                        overflowX: 'auto',
                        borderRadius: '0.5rem'
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
    );
}
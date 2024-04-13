// "use client";
import CodeBlock from "./CodeBlock";
import { PrismTheme } from "prism-react-renderer";

export default function MultilineCode({
    code,
    language,
    showLanguage = language !== "plaintext",
    theme,
}: {
    code: string;
    language: string;
    showLanguage?: boolean;
    theme: PrismTheme;
}) {

    return (
        <span className="flex flex-col">
            {
                showLanguage &&
                <span
                    className={`w-fit self-end mr-5 px-3 py-1 text-sm`}
                    style={{
                        backgroundColor: `${theme.plain.backgroundColor}`,
                        color: theme.plain.color,
                        borderTopRightRadius: '0.5rem',
                        borderTopLeftRadius: '0.5rem',
                    }}
                >
                    {language}
                </span>
            }
            <CodeBlock code={code} language={language} theme={theme} />
        </span>
    );
}
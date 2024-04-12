"use client";
import { useContext } from "react";
import { ArticleContext } from "../../../Article";
import CodeBlock from "./CodeBlock";
import { IconClipboard } from "@tabler/icons-react";



export default function MultilineCode({
    code,
    language,
    showLanguage = language !== "plaintext"
}: {
    code: string;
    language: string;
    showLanguage?: boolean;
}) {

    const { codeTheme: theme } = useContext(ArticleContext);

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

import InlineCode from "./helpers/InlineCode";
import MultilineCode from "./helpers/MultilineCode";
import gruvboxDarkTheme from "./helpers/gruvboxDarkTheme";


export default function Code({
    className: language,
    children: rawCode,
    forceMode,
    showLanguage,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    forceMode?: "inline" | "multiline";
    showLanguage?: boolean;
}) {
    const theme = gruvboxDarkTheme;

    const code = rawCode?.toString().replace(/\n$/, "") ?? ""; // remove trailing newline
    const inline = forceMode ? forceMode === "inline" : code.search(/\n/) === -1;

    const lang = language?.replace("language-", "") ?? "plaintext";

    // return (
    //     <>
    //         {
    //             Object.entries(themes).map(([key, value]) => {
    //                 return (
    //                     <>
    //                         <p key={key} className="w-full text-center">{key}</p>
    //                         {
    //                             inline ? (
    //                                 <InlineCode code={code} theme={value} />
    //                             ) : (
    //                                 <MultilineCode code={code} language={lang} theme={value} />
    //                             )
    //                         }
    //                     </>
    //                 )
    //             })
    //         }
    //     </>
    // );

    return inline ? (
        <InlineCode code={code} theme={theme} />
    ) : (
        <MultilineCode code={code} language={lang} showLanguage={showLanguage} theme={theme} />
    );
}
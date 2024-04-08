// "use client";

// import { useEffect, useState } from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { themes } from "prism-react-renderer";
import InlineCode from "./helpers/InlineCode";
import MultilineCode from "./helpers/MultilineCode";


export default function Code({
    className: language,
    children: rawCode,
    ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
    // const [code, setCode] = useState<string>("");
    // const [inline, setInline] = useState<boolean>(false);
    // const [lang, setLang] = useState<string>("plaintext");

    // useEffect(() => {
    //     setCode(rawCode?.toString().replace(/\n$/, "") ?? "");
    //     setInline(rawCode?.toString().search(/\n/) === -1);
    // }, [rawCode]);
    // useEffect(() => {
    //     setLang(language?.replace("language-", "") ?? "plaintext");
    // }, [language]);

    // useEffect(() => {
    //     console.log("code", JSON.stringify(code));
    //     console.log("inline", inline);
    //     // console.log("lang", lang);
    // }, [code, inline]);

    const code = rawCode?.toString().replace(/\n$/, "") ?? ""; // remove trailing newline
    const inline = code.search(/\n/) === -1;
    const lang = language?.replace("language-", "") ?? "plaintext";

    // console.log("inline", inline);
    // console.log("code", code);


    return inline ? (
        <InlineCode code={code} theme={themes.vsDark} />
    ) : (
        <MultilineCode code={code} language={lang} theme={themes.vsDark} />
    );

    // return inline ? (
    //     <code className='text-base font-normal font-serif mb-4' {...props}>
    //         {code}
    //     </code >
    // ) : (
    //     <Highlight
    //         code={code}
    //         language={lang}
    //         theme={themes.vsDark}
    //     >
    //         {({ className, style, tokens, getLineProps, getTokenProps }) => (
    //             <pre
    //                 className={className}
    //                 style={{
    //                     ...style,
    //                     padding: '1rem',
    //                     margin: '0.5rem',
    //                     overflowX: 'auto',
    //                     borderRadius: '0.5rem'
    //                 }}>
    //                 {tokens.map((line, i) => (
    //                     <div {...getLineProps({ line, key: i })} key={i}>
    //                         {line.map((token, key) => (
    //                             <span {...getTokenProps({ token, key })} key={key} />
    //                         ))}
    //                     </div>
    //                 ))}
    //             </pre>
    //         )}
    //     </Highlight>
    // );

    // return (
    //     <SyntaxHighlighter
    //         customStyle={{
    //             borderRadius: '0.5rem',
    //             scrollbarColor: 'var(--foreground-200) transparent',
    //             overflowY: 'hidden',
    //             marginBlock: '0.5rem',
    //         }}
    //         style={
    //             gruvboxDark
    //         }
    //         language={lang}
    //         wrapLines
    //         wrapLongLines
    //     >
    //         {code}
    //     </SyntaxHighlighter>
    // );

    // return (
    //     <code className='text-base font-normal font-serif mb-4' {...props}>
    //         {props.children}
    //     </code >
    // );
}

// import SyntaxHighlighter from "react-syntax-highlighter";
// import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// export default function Code(props: any) {
//     const { node, className: fullLang, children, theme, ...rest } = props;
//     const lang = /language-(\w+)/.exec(fullLang || "")?.at(1);
//     const inline = lang || (node.position.start.line !== node.position.end.line);

//     // using prism (don't use):
//     // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/gruvbox-dark.js
//     // const foreground = gruvboxDark["code[class*=\"language-\"]"].color;
//     // const background = gruvboxDark["pre[class*=\"language-\"]"].background;

//     // using hljs:
//     // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/hljs/gruvbox-dark.js
//     const foreground = gruvboxDark.hljs.color;
//     const background = gruvboxDark.hljs.background;

//     return inline ? (
//         <SyntaxHighlighter
//             customStyle={{
//                 borderRadius: '0.5rem',
//                 scrollbarColor: 'var(--foreground-200) transparent',
//                 overflowY: 'hidden',
//                 marginBlock: '0.5rem',
//             }}
//             style={
//                 gruvboxDark
//             }
//             language={lang}
//             wrapLines
//             wrapLongLines
//             {...rest}
//         >
//             {String(children ?? "").replace(/\n$/, "")}
//         </SyntaxHighlighter>
//     ) : (
//         //bg-black text-[#ebdbb2]


//         <code className={"text-base font-mono px-[0.4rem] rounded-lg text-nowrap"}
//             style={{
//                 backgroundColor: background,
//                 color: foreground,
//             }}
//             {...rest}>
//             {children}
//         </code>
//     );
// }

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Code(props: any) {
    const { node, className: fullLang, children, theme, ...rest } = props;
    const lang = /language-(\w+)/.exec(fullLang || "")?.at(1);
    const inline = lang || (node.position.start.line !== node.position.end.line);

    // using prism (don't use):
    // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/gruvbox-dark.js
    // const foreground = gruvboxDark["code[class*=\"language-\"]"].color;
    // const background = gruvboxDark["pre[class*=\"language-\"]"].background;

    // using hljs:
    // https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/hljs/gruvbox-dark.js
    const foreground = gruvboxDark.hljs.color;
    const background = gruvboxDark.hljs.background;

    return inline ? (
        <SyntaxHighlighter
            customStyle={{
                borderRadius: '0.5rem',
                scrollbarColor: 'var(--foreground-200) transparent',
                overflowY: 'hidden',
                marginBlock: '0.5rem',
            }}
            style={
                gruvboxDark
            }
            language={lang}
            {...rest}
        >
            {String(children ?? "").replace(/\n$/, "")}
        </SyntaxHighlighter>
    ) : (
        //bg-black text-[#ebdbb2]


        <code className={"text-base font-mono px-[0.4rem] rounded-lg text-nowrap"}
            style={{
                backgroundColor: background,
                color: foreground,
            }}
            {...rest}>
            {children}
        </code>
    );
}

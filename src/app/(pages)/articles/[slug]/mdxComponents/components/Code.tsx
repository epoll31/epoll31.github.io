import { themes } from "prism-react-renderer";
import InlineCode from "./helpers/InlineCode";
import MultilineCode from "./helpers/MultilineCode";

export default function Code({
    className: language,
    children: rawCode,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
    const code = rawCode?.toString().replace(/\n$/, "") ?? ""; // remove trailing newline
    const inline = code.search(/\n/) === -1;
    const lang = language?.replace("language-", "") ?? "plaintext";

    return inline ? (
        <InlineCode code={code} theme={themes.vsDark} />
    ) : (
        <MultilineCode code={code} language={lang} theme={themes.vsDark} />
    );
}
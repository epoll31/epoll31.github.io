
import { headerTextToID } from "../../utils/headerHelpers";

export default function H1(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return (
        <h1
            id={headerTextToID(props.children?.toString() ?? "")}
            className={`text-2xl font-bold font-sans mb-3 text-background`
            }
        >
            {props.children}
        </ h1 >
    );
}

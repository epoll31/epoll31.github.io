
import { headerTextToID } from "../../../utils/headerHelpers";

export default function H2(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return (
        <h2
            className='text-xl font-bold font-sans mb-2'
            id={headerTextToID(props.children?.toString() ?? "")}
        >
            {props.children}
        </h2>
    );
}
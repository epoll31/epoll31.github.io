
import { headerTextToID } from "../../../utils/headerHelpers";

export default function H3(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return (
        <h3
            className='text-lg font-bold font-sans mb-2'
            id={headerTextToID(props.children?.toString() ?? "")}
        >
            {props.children}
        </h3>
    );
}
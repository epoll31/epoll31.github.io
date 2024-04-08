
import { headerTextToID } from "../../utils/headerHelpers";

export default function H6(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return (
        <h6
            className='text-xs font-bold font-sans mb-2'
            id={headerTextToID(props.children?.toString() ?? "")}
        >
            {props.children}
        </h6>
    );
}
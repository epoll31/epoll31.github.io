
import { headerTextToID } from "../../utils/headerHelpers";

export default function H4(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return (
        <h4
            className='text-md font-bold font-sans mb-2'
            id={headerTextToID(props.children?.toString() ?? "")}
        >
            {props.children}
        </h4>
    );
}
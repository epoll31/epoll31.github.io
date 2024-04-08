
import { headerTextToID } from "../../../utils/headerHelpers";

export default function H5(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
    return (
        <h5
            className='text-sm font-bold font-sans mb-2'
            id={headerTextToID(props.children?.toString() ?? "")}
        >
            {props.children}
        </h5>
    );
}

import { headerTextToID } from "../../../utils/headerHelpers";
import InnerH1 from "./helpers/InnerH1";

export default function H1(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {

    return (
        // <InnerH1>
        //     {props.children}
        // </InnerH1>
        <h1
            id={headerTextToID(props.children?.toString() ?? "")}
            className={`text-2xl font-bold font-sans mb-3 text-background`
            }
        >
            {props.children}
        </ h1 >
    );
}

// import { CSSProperties, useContext, useEffect, useState } from "react";
// import { headerTextToID } from "../../../utils/headerHelpers";
// import { PageContext } from "@/app/components/major/Page";

// export default function H1(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
//     // const pageContext = useContext(PageContext);
//     // const [style, setStyle] = useState<CSSProperties>({
//     //     color: "var(--background)"
//     // });
//     // useEffect(() => {
//     //     setStyle({
//     //         color: pageContext.pageInfo.theme === "red" ? "var(--foreground)" : "var(--background)",
//     //     });
//     // }, [pageContext.pageInfo.theme]);

//     return (
//         <h1
//             className={`text-2xl font-bold font-sans mb-3 text-background`}
//             id={headerTextToID(props.children?.toString() ?? "")}
//         // style={style}>
//         >
//             {props.children}
//         </ h1>
//     );
// }
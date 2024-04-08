
"use client";

export default function InnerH1(props: {
    children: React.ReactNode;
}) {
    return (
        <h1
            id={`header-${props.children?.toString()}`}
            className={`text-2xl font-bold font-sans mb-3`}
        >
            {props.children}
        </ h1>
    );
}

// "use client";

// import { CSSProperties, useContext, useEffect, useState } from "react";
// import { PageContext } from "@/app/components/major/Page";

// export default function InnerH1(props: {
//     children: React.ReactNode;
// }) {
//     const pageContext = useContext(PageContext);
//     const [style, setStyle] = useState<CSSProperties>({
//         color: "var(--background)"
//     });
//     useEffect(() => {
//         setStyle({
//             color: pageContext.pageInfo.theme === "red" ? "var(--foreground)" : "var(--background)",
//         });
//     }, [pageContext.pageInfo.theme]);

//     return (
//         <span
//             className={`text-2xl font-bold font-sans mb-3`}
//             style={style}
//         >
//             {props.children}
//         </ span >
//     );
// }

// // import { CSSProperties, useContext, useEffect, useState } from "react";
// // import { headerTextToID } from "../../../utils/headerHelpers";
// // import { PageContext } from "@/app/components/major/Page";

// // export default function H1(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
// //     // const pageContext = useContext(PageContext);
// //     // const [style, setStyle] = useState<CSSProperties>({
// //     //     color: "var(--background)"
// //     // });
// //     // useEffect(() => {
// //     //     setStyle({
// //     //         color: pageContext.pageInfo.theme === "red" ? "var(--foreground)" : "var(--background)",
// //     //     });
// //     // }, [pageContext.pageInfo.theme]);

// //     return (
// //         <h1
// //             className={`text-2xl font-bold font-sans mb-3 text-background`}
// //             id={headerTextToID(props.children?.toString() ?? "")}
// //         // style={style}>
// //         >
// //             {props.children}
// //         </ h1>
// //     );
// // }

// import RawMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
// import remarkGfm from "remark-gfm";
// import Code from "./components/Code";
// import Link from "next/link";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
// import getImageMetaData from "./utils/getImageMetaData";
// import { PageContext, Theme } from "@/app/components/major/Page";
// import { useContext, useEffect, useState } from "react";
// import { headerTextToID } from "../../utils/headerHelpers";

// export default function Markdown({
//     children,
//     articlePath,
//     theme = "light",
// }: {
//     children: string;
//     articlePath?: string;
//     theme?: Theme;
// }) {
//     return (
//         <RawMarkdown
//             className={""}
//             remarkPlugins={[
//                 remarkGfm,
//             ]}
//             rehypePlugins={[
//                 rehypeRaw,
//             ]}
//             components={
//                 {
//                     h1: ({ children }) => <h1 className={`text-2xl font-bold font-sans mb-3`} id={headerTextToID(children?.toString() ?? "")} style={{ color: theme === "red" ? "var(--foreground)" : "var(--background)" }}>{children}</h1>,
//                     h2: ({ children }) => <h2 className='text-xl font-bold font-sans mb-2' id={headerTextToID(children?.toString() ?? "")}>{children}</h2>,
//                     h3: ({ children }) => <h3 className='text-lg font-bold font-sans mb-1' id={headerTextToID(children?.toString() ?? "")}>{children}</h3>,
//                     h4: ({ children }) => <h4 className='text-md font-bold font-sans mb-1' id={headerTextToID(children?.toString() ?? "")}>{children}</h4>,
//                     h5: ({ children }) => <h5 className='text-sm font-bold font-sans mb-1' id={headerTextToID(children?.toString() ?? "")}>{children}</h5>,
//                     h6: ({ children }) => <h6 className='text-xs font-bold font-sans mb-1' id={headerTextToID(children?.toString() ?? "")}>{children}</h6>,
//                     p: ({ children }) => <p className='text-base font-normal font-serif mb-4'>{children}</p>,
//                     ul: (props) => {
//                         const tasks = props.className === 'contains-task-list';
//                         const [markerClassName, setMarkerClassName] = useState('marker:text-background');
//                         useEffect(() => {
//                             if (theme === "light") {
//                                 setMarkerClassName('marker:text-background');
//                             }
//                             else if (theme === "dark") {
//                                 setMarkerClassName('marker:text-background');
//                             }
//                             else if (theme === "red") {
//                                 setMarkerClassName('marker:text-black');
//                             }
//                         }, [theme]);
//                         // console.log("theme", theme);

//                         //${theme === "dark" ? "text-background" : "text-black"}
//                         //marker:text-black
//                         return tasks ? (
//                             <ul className='text-base font-normal font-serif list-outside'>{props.children}</ul>
//                         ) : (
//                             <ul className={twMerge(`text-base font-normal font-serif list-disc list-outside`, markerClassName)}
//                             >{props.children}</ul>
//                         );
//                     },
//                     ol: (props) => {
//                         const tasks = props.className === 'contains-task-list';
//                         return tasks ? (
//                             <ol className='text-base font-normal font-serif list-none'>{props.children}</ol>
//                         ) : (
//                             <ol className='text-base font-normal font-serif list-decimal list-outside'>{props.children}</ol>
//                         );
//                     },
//                     li: (props) => {
//                         // const task = props.className === 'task-list-item';
//                         // const childrenArray = React.Children.toArray(props.children);
//                         // const first = childrenArray[0];
//                         // const rest = childrenArray.slice(1);
//                         // return task ? (
//                         //     <li className='text-base font-normal font-serif ml-4'>
//                         //         <input type='checkbox' className='mr-2' checked={((first as any).props as HTMLInputElement).checked} readOnly aria-disabled />
//                         //         {...rest}
//                         //     </li>
//                         // ) : (
//                         //     <li className='text-base font-normal font-serif ml-4'>{props.children}</li>
//                         // );
//                         return (<li className='text-base font-normal font-serif ml-4'>{props.children}</li>)
//                     },
//                     blockquote: ({ children }) => <blockquote className='text-base font-mono'>{children}</blockquote>,
//                     code: (props) => <Code theme={theme} {...props} />,
//                     a: ({ children, href }) => <Link className='text-base font-light underline underline-offset-2 hover:underline-offset-4 transition-[text-underline-offset]' href={href ?? ""}>{children}</Link>,
//                     // img: ({ alt, src }) => <img className='w-full' alt={alt} src={src} />,
//                     img: (props) => {
//                         // console.log("props", props)
//                         const { src: rawSrc, alt: rawMetaData, ...rest
//                         } = props;

//                         let metaData = getImageMetaData(rawMetaData || "", rawSrc || "", articlePath || "");
//                         // console.log(`${ rawMetaData } -> ${ metaData } `)

//                         return metaData.src && (
//                             <span className='w-fit'>
//                                 {
//                                     metaData.type === 'video' ?
//                                         <video controls={metaData.controls} loop={metaData.loop} autoPlay={metaData.autoPlay} muted={metaData.muted} width={metaData.width} height={metaData.height} className={metaData.className}>
//                                             <source src={metaData.src} type={metaData.videoType}></source>
//                                         </video> :
//                                         <Image src={metaData.src} alt={metaData.alt} width={metaData.width} height={metaData.height} className={metaData.className} priority={metaData.isPriority} />
//                                 }
//                                 {metaData.hasCaption && <span className='text-sm font-light text-center' aria-label={metaData.caption}>{metaData.caption}</span>}
//                             </span>
//                         );
//                     },
//                     table: ({ children }) => {
//                         const pageContext = useContext(PageContext);
//                         const [tHeadThemeClassName, setTHeadThemeClassName] = useState<string>("");
//                         useEffect(() => {
//                             if (pageContext.pageInfo.theme === "dark") {
//                                 setTHeadThemeClassName("[&>thead]:bg-foreground [&>thead]:text-black");
//                             }
//                             else if (pageContext.pageInfo.theme === "light") {
//                                 setTHeadThemeClassName("[&>thead]:bg-foreground-300 [&>thead]:text-black");
//                             }
//                             else if (pageContext.pageInfo.theme === "red") {
//                                 setTHeadThemeClassName("[&>thead]:bg-background [&>thead]:text-black");
//                             }
//                         }, [pageContext.pageInfo.theme]);

//                         return (<table className={
//                             twMerge(
//                                 'table-auto font-sans m-2 rounded-md overflow-hidden text-black', // table
//                                 `[&>thead>tr>th]:p-2`, '[&>thead]:bg-foreground-300 [&>thead]:text-black', // table header
//                                 '[&>tbody>tr:nth-child(2n)]:bg-foreground-200 [&>tbody>tr:nth-child(2n+1)]:bg-foreground-100 [&>tbody>tr>td]:p-2',// alternating row colors 
//                                 '[&>*>*>*:first-child]:pl-4 [&>*>*>*:last-child]:pr-4',// side padding
//                             )
//                         }>{children}</table>);
//                     },
//                 }
//             }
//         >
//             {children}
//         </RawMarkdown>
//     );
// }
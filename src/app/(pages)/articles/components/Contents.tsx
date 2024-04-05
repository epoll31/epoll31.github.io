import { twMerge } from "tailwind-merge";
import generateTableOfContents, { HeaderNode } from "../utils/generateTableOfContents";
import Link from "next/link";


function Node({
    node,
    className
}: {
    node: HeaderNode;
    className?: string;
}) {
    return (
        <li className={twMerge(`mb-1`, className, 'w-full')}>
            <Link href={`#${node.text.toLowerCase()}`}
                className={`block leading-normal text-base font-light hover:font-semibold decoration-transparent hover:decoration-black transition-all`}
                style={{
                    fontSize: `${1 - (node.level - 1) * 0.05}rem`,
                    paddingLeft: `${node.level - 1}rem`,
                }}
            >
                <p className={``}>
                    {node.text}
                </p>
            </Link>
            {
                node.children && (
                    // <ul className=" border-black border-l-[1px]">
                    <ul>
                        {node.children.map(child => (
                            <Node key={child.text} node={child} className="" />
                        ))}
                    </ul>
                )
            }
        </li >
    );
};


export default function Contents({
    markdown,
    theme = "light",
    maxLevel = 2
}: {
    markdown: string;
    theme?: "light" | "dark" | "red";
    maxLevel?: number;
}) {
    const headers = generateTableOfContents(markdown, maxLevel);

    return (
        <div className="mt-4 font-sans">
            <h2 className="text-xl tracking-wider">TABLE OF CONTENTS</h2>
            <ul>
                {headers.map(header => (
                    <Node key={header.text} node={header} />
                ))}
            </ul>
        </div>
    );
}
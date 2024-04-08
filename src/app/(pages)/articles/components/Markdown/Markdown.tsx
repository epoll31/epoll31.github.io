
import { Theme } from "@/app/components/major/Page";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Markdown({
    children,
    articleFolder,
    theme = "light",
}: {
    children: string;
    articleFolder?: string;
    theme?: Theme;
}) {
    return (
        <MDXRemote source={children} />
    )
}

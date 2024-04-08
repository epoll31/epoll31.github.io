import Link from "next/link";

export default function A(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
    return (
        <Link
            className='text-base font-light underline underline-offset-2 hover:underline-offset-4 transition-[text-underline-offset]'
            href={props.href ?? ""}
        >
            {props.children}
        </Link>
    );
}
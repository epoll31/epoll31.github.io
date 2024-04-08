
import { twMerge } from "tailwind-merge";

export default function Table(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement>) {

    return (
        <table
            className={twMerge(
                'table-auto font-sans m-2 rounded-md overflow-hidden text-black', // table
                `[&>thead>tr>th]:p-2`, '[&>thead]:bg-foreground-300 [&>thead]:text-black', // table header
                '[&>tbody>tr:nth-child(2n)]:bg-foreground-200 [&>tbody>tr:nth-child(2n+1)]:bg-foreground-100 [&>tbody>tr>td]:p-2',// alternating row colors 
                '[&>*>*>*:first-child]:pl-4 [&>*>*>*:last-child]:pr-4',// side padding
            )}
        >
            {props.children}
        </table>
    );
}
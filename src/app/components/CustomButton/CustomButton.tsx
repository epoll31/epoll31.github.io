import Link from "next/link";
import "./CustomButton.css"

export type CustomButtonType = "menu" | "arrow" | "close" | "home";

export default function CustomButton({
    type = "home",
}: {
    type?: CustomButtonType;
}) {
    return (
        <Link className={`fixed top-0 right-0 menu ${type} bg-foreground m-2 w-10 h-10 sm:m-10 sm:w-14 sm:h-14 rounded-full transition-all drop-shadow-md z-50`} href="./">
            <span className="absolute line1 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            <span className="absolute line2 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            <span className="absolute line3 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            <span className="absolute line4 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            <span className="absolute line5 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
        </Link>
    );
}
import Link from "next/link";

export default function Home() {
    return (
        <Link className="fixed top-0 right-0 menu arrow bg-foreground m-5 w-10 h-10 sm:m-10 sm:w-14 sm:h-14 rounded-full transition-all drop-shadow-md" href="./">
            <span className="absolute line1 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            <span className="absolute line2 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
            <span className="absolute line3 arrow w-full h-1 rounded-full bg-black " aria-hidden></span>
        </Link>
    );
}
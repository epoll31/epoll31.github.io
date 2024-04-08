
import NavBar from "@/app/components/major/NavBar";
import ThemeContextProvider from "@/app/utils/ThemeContext";
import { twMerge } from "tailwind-merge";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ThemeContextProvider >
            <div className={twMerge("fixed  w-full h-full flex flex-col overflow-hidden transition-colors")}>
                <NavBar />
                <main className="flex-grow h-full w-full overflow-hidden">
                    {children}
                </main>
            </div>
        </ThemeContextProvider>
    );
}
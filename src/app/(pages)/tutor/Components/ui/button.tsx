// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...props }, ref) => {
        const radius = 100; // change this to increase the radius of the hover effect
        const [visible, setVisible] = React.useState(false);

        let mouseX = useMotionValue(0);
        let mouseY = useMotionValue(0);

        function handleMouseMove({ currentTarget, clientX, clientY }: any) {
            let { left, top } = currentTarget.getBoundingClientRect();

            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
            props.onClick?.(e);
        }



        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
        radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--foreground) 00%,
            transparent 80%
            )`,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-full transition duration-300 group/input flex flex-row justify-center w-fit self-center"
            >
                <button
                    className={cn(
                        `flex flex-row flex-nowrap justify-center h-10 w-fit border-none  text-nowrap shadow-input rounded-full px-5 py-2 text-sm text-black dark:text-white file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                        disabled:cursor-not-allowed disabled:opacity-50
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                        group-hover/input:shadow-none transition duration-400
                        active:bg-gradient-to-r active:from-neutral-300 active:to-neutral-400 active:dark:from-neutral-700 active:dark:to-neutral-600 active:underline active:underline-offset-2 bg-gray-50 dark:bg-zinc-800
                        `, className
                    )}
                    ref={ref as React.Ref<HTMLButtonElement>}
                    onClick={handleClick}
                    {...props} >
                    {props.children}
                </button>
            </motion.div >
        );
    }
);

Button.displayName = "Button";

export { Button };

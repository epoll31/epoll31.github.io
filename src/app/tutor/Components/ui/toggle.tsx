// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    options: string[];
    defaultValue?: string;
    state?: {
        value: string;
        setValue: (value: string) => void;
    };
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
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

        if (props.state === undefined) {
            const [currentValue, setCurrentValue] = React.useState(props.defaultValue || props.options[0]);
            props.state = {
                value: currentValue,
                setValue: setCurrentValue,
            };
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
                {props.options.map((option, index) => {
                    const rounded = index === 0 ? "rounded-l-full" : index === props.options.length - 1 ? "rounded-r-full" : "";
                    const padding = index === 0 ? "pr-3 pl-5" : index === props.options.length - 1 ? "pr-5 pl-3" : "px-3";
                        const selected = option === props.state?.value ?
                            "bg-gradient-to-r from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-600 text-black dark:text-white underline underline-offset-2" :
                            "bg-gray-50 dark:bg-zinc-800 text-black dark:text-white";
                    const onSelected = () => props.state?.setValue(option);
                    return <button
                        className={cn(
                            `flex flex-row flex-nowrap justify-center h-10 w-fit border-none  text-nowrap ${selected} shadow-input ${rounded} ${padding} py-2 text-sm  file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                        disabled:cursor-not-allowed disabled:opacity-50
                        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                        group-hover/input:shadow-none transition duration-400`, className
                        )}
                        ref={ref as React.Ref<HTMLButtonElement>}
                        onClick={onSelected}
                        key={index}
                        {...props} >
                        {option}
                    </button>;
                })}

            </motion.div >
        );
    }
);

Toggle.displayName = "Toggle";

export { Toggle };

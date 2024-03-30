import { useEffect, useState } from "react";

export type MediaSizes = undefined | "sm" | "md" | "lg" | "xl" | "xxl";

export function smOrLarger(size: MediaSizes) {
    return size == "sm" || size == "md" || size == "lg" || size == "xl" || size == "xxl";
}
export function mdOrLarger(size: MediaSizes) {
    return size == "md" || size == "lg" || size == "xl" || size == "xxl";
}
export function lgOrLarger(size: MediaSizes) {
    return size == "lg" || size == "xl" || size == "xxl";
}
export function xlOrLarger(size: MediaSizes) {
    return size == "xl" || size == "xxl";
}

export function smOrSmaller(size: MediaSizes) {
    return size == "sm" || size == undefined;
}
export function mdOrSmaller(size: MediaSizes) {
    return size == "sm" || size == undefined || size == "md";
}
export function lgOrSmaller(size: MediaSizes) {
    return size == "sm" || size == undefined || size == "md" || size == "lg";
}
export function xlOrSmaller(size: MediaSizes) {
    return size == "sm" || size == undefined || size == "md" || size == "lg" || size == "xl";
}

export default function useMediaSizes() {
    const [size, setSize] = useState<MediaSizes>(undefined);

    useEffect(() => {
        function update() {
            if (window.innerWidth > 1536) {
                setSize("xxl");
            }
            else if (window.innerWidth > 1280) {
                setSize("xl");
            }
            else if (window.innerWidth > 1024) {
                setSize("lg");
            }
            else if (window.innerWidth > 768) {
                setSize("md");
            }
            else if (window.innerWidth > 640) {
                setSize("sm");
            }
            else {
                setSize(undefined);
            }

        }
        window.addEventListener("resize", update);
        update();
        return () => window.removeEventListener("resize", update);
    }, []);

    return size;
}
import { useState } from "react";

export default function useHover() {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return { isHovered, onMouseEnter, onMouseLeave };
}
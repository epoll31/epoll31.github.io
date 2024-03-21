
import { useEffect, useState } from "react";

export default function useMouse() {
    const [state, setState] = useState({ x: 0, y: 0, dx: 0, dy: 0 });

    useEffect(() => {
        const setFromEvent = (e: MouseEvent) => {
            setState({
                x: e.pageX, y: e.pageY, dx: e.movementX, dy: e.movementY
            });
        };
        window.addEventListener('mousemove', setFromEvent);
        return () => window.removeEventListener('mousemove', setFromEvent);
    }, []);

    return state;

}

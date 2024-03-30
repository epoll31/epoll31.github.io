import { MutableRefObject, RefCallback } from "react";

type MutableRefList<T> = Array<RefCallback<T> | MutableRefObject<T> | undefined | null>;

export default function mergeRefs<T>(...refs: MutableRefList<T>): RefCallback<T> {
    return (value: T) => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref) {
                ref.current = value;
            }
        });
    }
}

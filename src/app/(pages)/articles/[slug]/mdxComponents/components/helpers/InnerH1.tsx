
"use client";

export default function InnerH1(props: {
    children: React.ReactNode;
}) {
    return (
        <h1
            id={`header-${props.children?.toString()}`}
            className={`text-2xl font-bold font-sans mb-3`}
        >
            {props.children}
        </ h1>
    );
}

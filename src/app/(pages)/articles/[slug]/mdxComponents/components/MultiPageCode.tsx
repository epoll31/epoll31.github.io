import React from "react";
import Code from "./Code";
import MultiPageCodeClient from "./helpers/MultliPageCodeClient";


export default function MultiPageCode(props: {
    children: React.ReactNode;
}) {
    const pages = React.Children.toArray(props.children);
    const pageNames = pages.map((page: any) => page.props.name);

    return <MultiPageCodeClient pageNames={pageNames} {...props} />;
}

MultiPageCode.Page = function CodePage({
    children,
    name
}: {
    name: string;
    children: {
        props: {
            children: {
                props: {
                    children: string;
                    className: string;
                };
            };
        };
    };
}) {
    const code = children.props.children.props;

    return (
        <Code {...code} forceMode="multiline" showLanguage={false} />
    );
}

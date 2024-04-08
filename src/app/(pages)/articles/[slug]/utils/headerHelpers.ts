import React from "react";
import { ArticleData } from "@/app/(pages)/articles/[slug]/Article";

export interface HeaderNode {
    level: number;
    uid: number;
    id: string;
    text?: string;
}

export function headerTextToID(header: string) {
    return header.toLowerCase();
    //return header.toLowerCase().replaceAll(' ', '-');
}

export function getHeader(headers: HeaderNode[], id: string): HeaderNode | undefined {
    for (const header of headers) {
        if (header.id === id) {
            return header;
        }
    }
    return undefined;
}

export function generateHeaders(article: ArticleData, maxLevel: number = 6): HeaderNode[] {

    const allHeaders = [];
    let uid = 0;

    const children = React.Children.toArray(article.mdx);
    for (const child of children) {
        if (React.isValidElement(child)) {
            switch (child.type) {
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                    const level = parseInt(child.type[1]);
                    if (level > maxLevel) {
                        break;
                    }
                    const data = {
                        level,
                        uid: uid++,
                        id: child.props.id,
                        text: child.props.children.toString(),
                    };
                    // console.log(data);
                    allHeaders.push(data);
                    break;
            }
        }
    }

    return allHeaders;
}
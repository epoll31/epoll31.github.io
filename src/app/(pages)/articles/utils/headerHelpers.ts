import React from "react";
import { ArticleData } from "../components/Article";


// export interface HeaderNode {
//     text: string;
//     level: number;
//     children: HeaderNode[];
//     parent?: HeaderNode;
//     uid: number;
//     id: string;
// }
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

// export function getHeader(headers: HeaderNode[], id: string): HeaderNode | undefined {
//     for (const header of headers) {
//         if (header.id === id) {
//             return header;
//         }
//         const child = getHeader(header.children, id);
//         if (child) {
//             return child;
//         }
//     }
//     return undefined;
// }

// export function containsHeader(headers: HeaderNode[], id: string): boolean {
//     for (const header of headers) {
//         if (header.id === id) {
//             return true;
//         }
//         if (containsHeader(header.children, id)) {
//             return true;
//         }
//     }
//     return false;
// }

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

    // console.log(allHeaders);

    return allHeaders;
}

// export function generateHeaders(markdown: string, maxLevel: number = 6): HeaderNode[] {
//     const lines = markdown.split('\n');

//     const allHeaders: {
//         text: string;
//         level: number;
//     }[] = [];

//     for (let i = 0; i < lines.length; i++) {
//         const line = lines[i];
//         const match = line.match(/^#+\s+(.+)/);
//         if (match) {
//             const level = match[0].split(' ')[0].length;
//             if (level <= maxLevel) {
//                 allHeaders.push({
//                     text: match[1],
//                     level,
//                 });
//             }
//         }
//     }

//     const headers: HeaderNode[] = [];
//     let uid = 0;
//     let currentParent: HeaderNode | undefined = undefined;
//     for (let i = 0; i < allHeaders.length; i++) {
//         const header = allHeaders[i];
//         let parentNode: HeaderNode | undefined = undefined;

//         if (headers.length !== 0) {
//             parentNode = headers[headers.length - 1];
//         }

//         const newNode: HeaderNode = {
//             text: header.text,
//             level: header.level,
//             children: [],
//             parent: parentNode,
//             uid: uid++,
//             id: headerTextToID(header.text),
//         };

//         if (parentNode !== undefined) {
//             parentNode.children.push(newNode);
//         } else {
//             headers.push(newNode);
//         }

//         if (header.level === 1) {
//             currentParent = newNode;
//         }
//     }

//     return headers;
// }



// export interface HeaderNode {
//     text: string;
//     level: number;
//     children: HeaderNode[];
//     parent?: HeaderNode;
// }

// export default function generateTableOfContents(markdown: string, maxLevel: number = 6): HeaderNode[] {
//     const lines = markdown.split('\n');

//     const allHeaders: {
//         text: string;
//         level: number;
//     }[] = [];

//     for (let i = 0; i < lines.length; i++) {
//         const line = lines[i];
//         const match = line.match(/^#+\s+(.+)/);
//         if (match) {
//             const level = match[0].split(' ')[0].length;
//             if (level <= maxLevel) {
//                 allHeaders.push({
//                     text: match[1],
//                     level,
//                 });
//             }
//         }
//     }

//     const headers: HeaderNode[] = [];
//     let parent: HeaderNode | null = null;
//     for (let i = 0; i < allHeaders.length; i++) {
//         const header = allHeaders[i];
//         if (parent) {
//             let p = parent as HeaderNode;
//             const c = {
//                 text: header.text,
//                 level: header.level,
//                 children: [],
//                 parent: p,
//             };
//             while (p.parent && header.level <= p.parent.level) {
//                 p = p.parent;
//             }
//             if (p.parent) {
//                 p.parent.children.push(c);
//             }
//             else {
//                 headers.push(c);
//             }
//             parent = c;
//         }
//         else {
//             parent = {
//                 text: header.text,
//                 level: header.level,
//                 children: [],
//                 parent: undefined,
//             };
//             headers.push(parent);
//         }
//     }

//     return headers;
// }

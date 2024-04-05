export interface HeaderNode {
    text: string;
    level: number;
    children: HeaderNode[];
    parent?: HeaderNode;
}

export default function generateTableOfContents(markdown: string, maxLevel: number = 6): HeaderNode[] {
    const lines = markdown.split('\n');

    const allHeaders: {
        text: string;
        level: number;
    }[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const match = line.match(/^#+\s+(.+)/);
        if (match) {
            const level = match[0].split(' ')[0].length;
            if (level <= maxLevel) {
                allHeaders.push({
                    text: match[1],
                    level,
                });
            }
        }
    }

    const headers: HeaderNode[] = [];
    let currentParent: HeaderNode | undefined = undefined;
    for (let i = 0; i < allHeaders.length; i++) {
        const header = allHeaders[i];
        let parentNode: HeaderNode | undefined = undefined;

        if (headers.length !== 0) {
            parentNode = headers[headers.length - 1];
        }

        const newNode: HeaderNode = {
            text: header.text,
            level: header.level,
            children: [],
            parent: parentNode,
        };

        if (parentNode !== undefined) {
            parentNode.children.push(newNode);
        } else {
            headers.push(newNode);
        }

        if (header.level === 1) {
            currentParent = newNode;
        }
    }

    return headers;
}


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

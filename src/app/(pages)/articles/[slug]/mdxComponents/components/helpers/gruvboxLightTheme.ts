// Converted automatically using ./tools/themeFromVsCode

import { PrismTheme } from "prism-react-renderer"

const theme: PrismTheme = {
    plain: {
        color: "#3c3836",
        backgroundColor: "#f2e5bc" // Using a lighter background similar to the editor background in VSCode
    },
    styles: [
        {
            types: ["comment", "prolog", "doctype", "cdata"],
            style: {
                color: "#928374",
                fontStyle: "italic"
            }
        },
        {
            types: ["string", "url"],
            style: {
                color: "#79740e"
            }
        },
        {
            types: ["variable"],
            style: {
                color: "#076678"
            }
        },
        {
            types: ["keyword", "selector-tag", "operator"],
            style: {
                color: "#9d0006"
            }
        },
        {
            types: ["function", "function-name"],
            style: {
                color: "#427b58"
            }
        },
        {
            types: ["punctuation"],
            style: {
                color: "#7c6f64"
            }
        },
        {
            types: ["tag", "tag-name", "class-name"],
            style: {
                color: "#b57614"
            }
        },
        {
            types: ["boolean", "number", "constant"],
            style: {
                color: "#8f3f71"
            }
        },
        {
            types: ["property"],
            style: {
                color: "#076678"
            }
        },
        {
            types: ["namespace"],
            style: {
                color: "#af3a03",
                opacity: 0.7
            }
        },
        {
            types: ["deleted"],
            style: {
                color: "#9d0006",
                textDecorationLine: "line-through"
            }
        },
        {
            types: ["inserted"],
            style: {
                color: "#79740e",
                fontStyle: "italic"
            }
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic"
            }
        },
        {
            types: ["important", "bold"],
            style: {
                fontWeight: "bold"
            }
        },
        {
            types: ["regex", "important"],
            style: {
                color: "#af3a03"
            }
        },
        {
            types: ["atrule", "attr-value", "keyword"],
            style: {
                color: "#b57614"
            }
        }
    ]
};

export default theme
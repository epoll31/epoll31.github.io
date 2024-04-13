// Converted automatically using ./tools/themeFromVsCode

import { PrismTheme } from "prism-react-renderer"

const theme: PrismTheme = {
    plain: {
        color: "#ebdbb2",
        backgroundColor: "#1d2021"
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
                color: "#b8bb26"
            }
        },
        {
            types: ["variable"],
            style: {
                color: "#83a598"
            }
        },
        {
            types: ["keyword", "selector-tag", "operator"],
            style: {
                color: "#fb4934"
            }
        },
        {
            types: ["function", "function-name"],
            style: {
                color: "#8ec07c"
            }
        },
        {
            types: ["punctuation"],
            style: {
                color: "#a89984"
            }
        },
        {
            types: ["tag", "tag-name", "class-name"],
            style: {
                color: "#fabd2f"
            }
        },
        {
            types: ["boolean", "number", "constant"],
            style: {
                color: "#d3869b"
            }
        },
        {
            types: ["property"],
            style: {
                color: "#83a598"
            }
        },
        {
            types: ["namespace"],
            style: {
                color: "#fe8019",
                opacity: 0.7
            }
        },
        {
            types: ["deleted"],
            style: {
                color: "#fb4934",
                textDecorationLine: "line-through"
            }
        },
        {
            types: ["inserted"],
            style: {
                color: "#b8bb26",
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
                color: "#fe8019"
            }
        },
        {
            types: ["atrule", "attr-value", "keyword"],
            style: {
                color: "#fabd2f"
            }
        }
    ]
};

export default theme

export default function getImageSrc(src: string, articleFolder: string): string {
    // If it is a URL, return src
    if (/^https?:\/\//.test(src)) {
        return src;
    }

    // If it starts with 'public', './public', or '/public', keep everything after 'public' including '/'
    if (/^(?:\.?\/?public\/)(.*)/.test(src)) {
        return src.replace(/^(?:\.?\/?public\/)(.*)/, '/$1');
    }

    // If it starts with './', replace the '.' with articlePath
    if (/^\.\//.test(src)) {
        return src.replace(/^\.\//, articleFolder + '/');
    }

    // If it starts with '/', add articlePath to the front
    if (/^\//.test(src)) {
        return articleFolder + src;
    }

    // Else, add articlePath and '/' to the front
    return articleFolder + '/' + src;
}

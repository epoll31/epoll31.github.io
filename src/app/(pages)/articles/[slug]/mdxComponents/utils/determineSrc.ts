
/**
 * Performs the following operations to determine the appropriate src of the Image or Video:
 * 1. If it is a URL, return src as is
 * 2. If it starts with 'public', './public', or '/public', keep everything after 'public' including '/'
 * 3. If it starts with './', replace the '.' with articlePath
 * 4. If it starts with '/', add articlePath to the front
 * 5. Else, add articlePath and '/' to the front
 * @param src The src of the Image or Video
 * @param articleFolder The folder of the article
 * @returns Determines the appropriate src of the Image or Video
*/
export default function determineSrc(src: string, articleFolder: string): string {
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


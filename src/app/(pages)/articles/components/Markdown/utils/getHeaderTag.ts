
export default function getHeaderTag(header?: string) {
    return header?.toLowerCase();
    //return header.toLowerCase().replaceAll(' ', '-');
}

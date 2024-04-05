import getImageSrc from "./getImageSrc";

export default function getImageMetaData(rawMetaData: string, rawSrc: string, articlePath: string) {
    const src = getImageSrc(rawSrc, articlePath);
    //type: 'video'(src is .mov/.mp4) | 'image'(otherwise)
    const type = /\.(webm|mp4)$/.test(src.toLowerCase()) ? 'video' : 'image';
    const videoType = /\.(webm|mp4)$/.test(src.toLowerCase()) ? (`video/${src.toLowerCase().match(/\.(\w+)$/)?.pop()}`) : undefined;
    // console.log(`src: ${src}, type: ${type}, videoType: ${videoType}`)
    return {
        src,
        alt: rawMetaData.replace(/ *\{[^)]*\} */g, ""),
        width: parseInt(rawMetaData.match(/{w: (.*?)}/)?.pop() ?? "500") ?? 500,
        height: parseInt(rawMetaData.match(/{h: (.*?)}/)?.pop() ?? "500") ?? 500,
        isPriority: rawMetaData.toLowerCase().match('{priority}') ? true : undefined,
        hasCaption: rawMetaData.toLowerCase().includes('{caption:'),
        caption: rawMetaData.match(/{caption: (.*?)}/)?.pop(),
        className: rawMetaData.match(/{className: (.*?)}/)?.pop(),
        controls: !rawMetaData.toLowerCase().includes('{nocontrols}'),
        type,
        videoType,
        autoPlay: rawMetaData.toLowerCase().includes('{autoplay}'),
        muted: rawMetaData.toLowerCase().includes('{muted}'),
        loop: rawMetaData.toLowerCase().includes('{loop}'),
    };
}
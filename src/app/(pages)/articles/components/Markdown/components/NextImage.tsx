import Image from "next/image";
import getImgProps, { OnLoadingComplete, PlaceholderValue } from "next/dist/shared/lib/get-img-props";

interface ImgProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> { }
interface NextImageNewProps {
    src: string | getImgProps.StaticImport;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    loader?: getImgProps.ImageLoader | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    placeholder?: PlaceholderValue | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    onLoadingComplete?: OnLoadingComplete | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
};

export interface NextImageProps extends ImgProps, NextImageNewProps, React.RefAttributes<HTMLImageElement | null> { }

export default function NextImage(
    props: NextImageProps
    // Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & {
    //     src: string | getImgProps.StaticImport;
    //     alt: string;
    //     width?: number | `${number}` | undefined;
    //     height?: number | `${number}` | undefined;
    //     fill?: boolean | undefined;
    //     loader?: getImgProps.ImageLoader | undefined;
    //     quality?: number | `${number}` | undefined;
    //     priority?: boolean | undefined;
    //     loading?: "eager" | "lazy" | undefined;
    //     placeholder?: PlaceholderValue | undefined;
    //     blurDataURL?: string | undefined;
    //     unoptimized?: boolean | undefined;
    //     onLoadingComplete?: OnLoadingComplete | undefined;
    //     layout?: string | undefined;
    //     objectFit?: string | undefined;
    //     objectPosition?: string | undefined;
    //     lazyBoundary?: string | undefined;
    //     lazyRoot?: string | undefined;
    // } & React.RefAttributes<HTMLImageElement | null>
) {
    return (
        <Image {...props} />
    );
}
import { CardBody, CardContainer, CardItem } from '@/app/components/3d-card';
import TimeLine, { TimeLineItem } from '@/app/components/TimeLine/TimeLine';
import useMediaSizes from '@/app/utils/useMediaSizes';
import { IconBriefcase, IconBriefcaseFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import headshot from "/public/tutor/headshot.png";

export interface SectionInfo {
    title: string;
    subtitle: string;
    startDate?: string;
    endDate?: string;
    bullets: string[];
    icon?: React.ReactNode;
    img: string;
}

export default function EarlyYearsTimeLine({
    sections,
}: {
    sections: SectionInfo[];
}) {
    const [side, setSide] = useState<"left" | "right">("left");
    const [itemsAlignment, setItemsAlignment] = useState<"close" | "center" | "far">("close");
    const { md } = useMediaSizes();
    const [alternate, setAlternate] = useState(true);
    useEffect(() => {
        setAlternate(md);
    }, [md]);

    const findAlignment = (index: number) => {
        if (alternate) {
            if (side == "left") {
                return index % 2 == 0 ? "left" : "right";
            }
            return index % 2 == 1 ? "right" : "left";
        }
        return side;
    };
    const findFlexAlignment = (index: number) => {
        return "justify-start"

        // if (itemsAlignment === "center") {
        //     return "justify-center";
        // }
        // const alignment = findAlignment(index);
        // if (alignment === "left") {
        //     if (itemsAlignment === "far") {
        //         return "justify-start";
        //     }
        //     return "justify-end";
        // }
        // else {
        //     if (itemsAlignment === "far") {
        //         return "justify-end";
        //     }
        //     return "justify-start";
        // }
    }

    return (
        <TimeLine
            className="pt-5"
            defaultDotInfo={{
                color: "var(--black)",
                size: "2.4rem",
                icon: <IconBriefcaseFilled />,
                iconColor: "var(--foreground-200)",
            }}
            defaultLineInfo={{
                color: "var(--black)",
                size: "0.5rem",
            }}
            gap="1rem"
            willAlternate={alternate}
        >
            {
                sections.map((info, index) => {
                    return (
                        <TimeLineItem
                            key={index}
                            alignment={findAlignment(index)}
                            className=''
                            dotInfo={{
                                icon: info.icon,
                            }}
                        >
                            <CardContainer className='bg-foreground text-black rounded-2xl font-k2d' containerClassName={`py-0 w-full ${findFlexAlignment(index)}`}>
                                <CardBody className=' h-fit w-fit flex flex-col items-center p-2 gap-3'>
                                    {/* <Image src={headshot} alt="Ethan Pollack" className={`rounded-xl bg-auto w-full md:absolute md:top-0 md:h-20 md:w-20 md:-translate-y-1/4 md:right-0 md:-translate-x-1/4`} /> */}


                                    <div className='w-full flex-1'>
                                        <h1 className='text-xl w-2/3 font-bold'>{info.title}</h1>
                                        <h2 className='text-nowrap text-rg'>{info.subtitle}</h2>
                                        <ul className='text-sm list-disc pl-4 pt-2 text-pretty'>
                                            {
                                                info.bullets.map((bullet, index) => {
                                                    return (
                                                        <li key={index}>{bullet}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                        {
                                            info.startDate && info.endDate && (
                                                <p className=' font-bold text-nowrap text-lg text-right absolute top-0 right-0'>{info.startDate} - {info.endDate}</p>
                                            )
                                        }
                                        {
                                            info.startDate && !info.endDate && (
                                                <p className='font-bold text-nowrap text-lg text-right absolute top-0 right-0'>{info.startDate}</p>
                                            )
                                        }
                                        {
                                            !info.startDate && info.endDate && (
                                                <p className='font-bold text-nowrap text-lg text-right absolute top-0 right-0'>{info.endDate}</p>
                                            )
                                        }
                                    </div>
                                    {/* <div className=' flex justify-center items-center'> */}
                                    {/* </div> */}
                                    <img src={info.img} alt="Ethan Pollack" className={`rounded-xl w-full`} />
                                </CardBody>
                            </CardContainer>
                        </TimeLineItem>
                    );
                })
            }
        </TimeLine >
    );
}

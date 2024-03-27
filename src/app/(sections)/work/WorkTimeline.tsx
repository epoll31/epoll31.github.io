import { CardBody, CardContainer, CardItem } from '@/app/components/3d-card';
import TimeLine, { TimeLineItem } from '@/app/components/TimeLine/TimeLine';
import useMediaSizes, { lgOrSmaller, mdOrLarger, mdOrSmaller, smOrSmaller } from '@/app/utils/useMediaSizes';
import { IconBriefcase, IconBriefcaseFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export interface WorkInfo {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    location: string;
    icon: React.ReactNode;
}

export default function WorkTimeline({
    workInfo,
}: {
    workInfo: WorkInfo[];
}) {
    const [side, setSide] = useState<"left" | "right">("left");
    const [itemsAlignment, setItemsAlignment] = useState<"close" | "center" | "far">("close");
    const mediaSize = useMediaSizes();
    const [alternate, setAlternate] = useState(true);
    useEffect(() => {
        const alternating = !mdOrSmaller(mediaSize)
        setAlternate(alternating);

    }, [mediaSize]);

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
        if (itemsAlignment === "center") {
            return "justify-center";
        }
        const alignment = findAlignment(index);
        if (alignment === "left") {
            if (itemsAlignment === "far") {
                return "justify-start";
            }
            return "justify-end";
        }
        else {
            if (itemsAlignment === "far") {
                return "justify-end";
            }
            return "justify-start";
        }

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
                workInfo.map((info, index) => {
                    return (
                        <TimeLineItem
                            key={index}
                            alignment={findAlignment(index)}
                            className=''
                            dotInfo={{
                                icon: info.icon,
                            }}
                        >
                            <CardContainer className='bg-foreground text-black rounded-2xl p-3 overflow-hidden font-k2d' containerClassName={`py-0 w-full ${findFlexAlignment(index)}`}>
                                <CardBody className='h-fit'>
                                    {/* <div className='flex flex-row flex-wrap justify-between gap-5'> */}
                                    <h1 className='text-nowrap text-xl'>{info.company}</h1>
                                    {/* </div> */}
                                    <h2 className='text-nowrap text-rg'>{info.role}</h2>
                                    <ul className='text-sm list-disc pl-4 pt-2 text-pretty'>
                                        {
                                            info.bullets.map((bullet, index) => {
                                                return (
                                                    <li key={index}>{bullet}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <p className='text-nowrap text-md text-right'>{info.startDate} - {info.endDate}</p>
                                </CardBody>
                            </CardContainer>
                        </TimeLineItem>
                    );
                })
            }
        </TimeLine >
    );
}

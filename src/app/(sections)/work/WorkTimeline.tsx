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
}

export default function WorkTimeline({
    workInfo,
    defaultSide = "left",
    itemsAlignment = "close"
}: {
    workInfo: WorkInfo[];
    defaultSide?: "left" | "right";
    itemsAlignment?: "close" | "center" | "far";
}) {

    const mediaSize = useMediaSizes();
    const [alternate, setAlternate] = useState(true);
    useEffect(() => {
        if (mediaSize != undefined) {
            setAlternate(!mdOrSmaller(mediaSize));

        }
    }, [mediaSize]);

    const findAlignment = (index: number) => {
        // return (alternate && index % 2 == (even ? 1 : 0)) ? (even ? "right" : "left") : (even ? "left" : "right")
        if (alternate) {
            if (defaultSide == "left") {
                return index % 2 == 0 ? "left" : "right";
            }
            return index % 2 == 1 ? "right" : "left";
        }
        return defaultSide;
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
            className=" border-black border"
            defaultDotInfo={{
                color: "var(--black)",
                size: "3rem",
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
                        <TimeLineItem key={index} alignment={findAlignment(index)} className=''>
                            <CardContainer className='bg-black text-foreground rounded-3xl p-4 overflow-hidden font-k2d' containerClassName={`py-0 w-full ${findFlexAlignment(index)}`}>
                                <CardBody className='h-fit'>
                                    <h1 className='text-nowrap text-xl'>{info.company}</h1>
                                    <h2 className='text-nowrap text-rg'>{info.role}</h2>
                                    <ul className='text-sm list-disc pl-4 text-pretty'>
                                        {
                                            info.bullets.map((bullet, index) => {
                                                return (
                                                    <li key={index}>{bullet}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </CardBody>
                            </CardContainer>
                        </TimeLineItem>
                    );
                })
            }
        </TimeLine >
    );
}

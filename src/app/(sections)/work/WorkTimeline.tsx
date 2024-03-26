import TimeLine, { TimeLineItem } from '@/app/components/TimeLine/TimeLine';
import { IconBriefcase, IconBriefcaseFilled } from '@tabler/icons-react';
export default function WorkTimeline() {
    return (
        <div className="w-full border-black border">
            <TimeLine defaultDotInfo={{
                color: "var(--black)",
                size: "3rem",
                icon: <IconBriefcaseFilled />,
                iconColor: "var(--foreground-200)",
            }}
                defaultLineInfo={{
                    color: "var(--black)",
                    size: "0.5rem",
                }}
            >
                <TimeLineItem className=''>
                    <div className='bg-black text-foreground rounded-3xl p-4'>
                        <h1 className='text-nowrap'>Epic Systems</h1>
                        <h2 className='text-nowrap'>Software Development Internship</h2>
                    </div>
                </TimeLineItem>
                <TimeLineItem>
                    <h1>item 2</h1>
                </TimeLineItem>
                <TimeLineItem >
                    <h1>item 3</h1>
                </TimeLineItem>
                <TimeLineItem >
                    <h1>item 4</h1>
                </TimeLineItem>
            </TimeLine>
        </div >
    );
}

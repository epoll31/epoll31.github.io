"use client";
import { allCourseTypes, clearCourseTypes, selectCourseTypes, toggleCourseType } from "@/lib/features/courseFilters/courseFiltersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";

export function Filters(props:
    {
        className?: string,
    }) {
    const dispatch = useAppDispatch();
    const toggled = useAppSelector(selectCourseTypes);

    return (
        <div className={twMerge(props.className, "w-full h-fit mt-10 font-k2d py-1")}>
            <hr className="border-black my-2"></hr>
            {/* <h1 className="text-2xl pl-1 mb-2">Filters:</h1> */}
            <div className=" flex flex-row flex-wrap md:flex-col gap-2 justify-center">
                {/* <h2 className="text-md pl-3 w-full">Class Types</h2> */}
                {allCourseTypes.map((filter, i) => {
                    const cn = (toggled.find(f => f === filter)) ? "outline" : "";

                    return (
                        <label className={`${cn} outline-[3px] outline-offset-0 outline-blue bg-foreground hover:bg-foreground-100 active:bg-foreground-200 rounded-lg px-6 py-1 text-nowrap text-center`}
                            key={i}
                        >
                            <span>{filter}</span>
                            <input type="checkbox" id={filter} className="hidden" onChange={_ => dispatch(toggleCourseType(filter))} />
                        </label>
                    );
                }
                )}
                {/* <button className="active:underline" onClick={() => dispatch(clearCourseTypes())}>Clear Filters</button> */}
            </div>
            <hr className="border-black my-2"></hr>
        </div>
    );
}

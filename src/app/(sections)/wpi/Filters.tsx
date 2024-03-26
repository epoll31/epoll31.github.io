"use client";
import { allCourseTypes, clearCourseTypes, selectCourseTypes, toggleCourseType } from "@/lib/features/courseFilters/courseFiltersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export function Filters() {
    const dispatch = useAppDispatch();
    const toggled = useAppSelector(selectCourseTypes);

    return (
        <div className="w-full h-fit mt-10 font-k2d">
            <h1 className="text-2xl pl-1 mb-2">Filters:</h1>
            <div className=" flex flex-col gap-2">
                <h2 className="text-md pl-3">Class Types</h2>
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
                <button className="active:underline" onClick={() => dispatch(clearCourseTypes())}>Clear Filters</button>
            </div>
            <hr className="border-black my-2"></hr>
        </div>
    );
}

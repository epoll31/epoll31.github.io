
"use client";

import { setPosition, setFollowMouse, setClassName } from "@/lib/features/mouse/mouseSlice";
import { useAppDispatch } from "@/lib/hooks";
import { twMerge } from "tailwind-merge";
import { useCursorLock } from "../CursorFollower";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={twMerge(`bg-blue text-white py-3 px-6 rounded-md`, className)}
      {...props}>
      {children}
    </button >

  );
};

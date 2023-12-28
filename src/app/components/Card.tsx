
"use client";

import { ReactElement, ReactNode } from "react";

export interface ICardProps {
  children?: ReactNode,
  className?: string,
  vertical?: boolean,
  horizontal?: boolean,
};

export default function Card(props: ICardProps) {
  let vertical = props.vertical ? props.vertical : false;
  let horizontal = props.horizontal ? props.horizontal : false;



  if (vertical && horizontal) {
    throw new Error("Card cannot be both vertical and horizontal");
  }
  
  let className = props.className ? props.className : "";
  if (vertical) {
    className += " aspect-golden-h";
  }
  if (horizontal) {
    className += " aspect-golden-v";
  }
  className += " bg-black-200 p-5 rounded-xl flex-col border border-transparent hover:border-black-100"

  return (
      <div  
        className={className}>
          {props.children}
      </div>
  );
};


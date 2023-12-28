
"use client";

import { ButtonHTMLAttributes, ReactEventHandler, ReactNode, useState } from "react";

export interface IButtonProps {
  text: String,
  onClick: ReactEventHandler
};

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
      <button 
        className="bg-blue hover:bg-orange text-black font-bold py-2 px-4 rounded transition-colors: duration-200 ease-in-out"
        onClick={props.onClick}>
          {props.title}
      </button>
  );
};
"use client"
// import { ButtonWithTrailingIcon } from "@/components/input/tailButton";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ButtonWithTrailingIcon } from "./tailButton";

export function DropdownComp(props: { arr: string[]; title: string }) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTitle, setActiveTitle] = useState(props.title);
  return (
    <div className="relative inline-block text-left">
      <div>
        <ButtonWithTrailingIcon
          placeholder={activeTitle}
          maxLength={40}
          icon={<MdKeyboardArrowDown />}
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </div>
      {showMenu && (
        <div
          className="
        absolute 
        z-5 
        mt-1
        w-36  
        origin-top-right 
        rounded-md 
        bg-white 
        shadow-lg 
        ring-1 
        ring-black 
        ring-opacity-5 
        focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {props.arr.map((v, i) => (
              <a
                key={i}
                href="#"
                onClick={() => {
                  setShowMenu(false);
                  setActiveTitle(v);
                }}
                className="
              text-gray-700 
              block 
              px-4 py-2 
              text-sm
              hover:bg-blue-500 
              hover:text-white"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                {v}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

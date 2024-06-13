"use client"

import React from "react";

export default function HamburgerMenu() {
    return (
        <div className="flex items-center gap-3">
            <div className="flex flex-col justify-between w-8 h-6 lg:hidden">
                <div className="w-full h-[3px] bg-text"></div>
                <div className="w-full h-[3px] bg-text"></div>
                <div className="w-full h-[3px] bg-text"></div>
            </div>

            <p className="text-lg">Menu</p>
        </div>
    );
}

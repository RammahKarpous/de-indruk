import React from "react";
import CardButton from "./CardButton";
import { CardProps } from "@/types";

export default function Card({ title, hasLogo, logo, category, styles, children, bgColor}: CardProps) {
    const textColor = bgColor === "white" ? "text-text" : "text-white"

    return (
        <div className={`relative p-12 rounded-3xl overflow-hidden card bg-${bgColor} ${styles}`}>
            <div className="relative z-10 flex items-center justify-between mb-8">
                <p className={`text-sm ${textColor}`}>{category}</p>
                
                {hasLogo && logo }
            </div>

            <h3 className={`text-3xl leading-tight font-bold relative z-10 w-10/12 ${textColor}`}>{title}</h3>
            {children}

            <div className="absolute left-12 bottom-12">
                <CardButton bgColor={bgColor} />
            </div>
        </div>
    );
}

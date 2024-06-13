import React from "react";
import ArrowRight from "./icons/ArrowRight";

export default function CardButton({ bgColor }: { bgColor?: string}) {
    return (
        <button className={`${bgColor === "primary" ? "bg-white" : "bg-primary"} rounded-full px-9 py-4`}>
            <ArrowRight color={bgColor === "primary" ? "text" : "white"} />
        </button>
    );
}

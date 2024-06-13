import { ReactNode } from "react";

export type CardProps = {
    title: string,
    category: string,
    hasLogo?: boolean,
    logo?: ReactNode,
    styles: string,
    children?: ReactNode,
    bgColor: "primary" | "white"
};
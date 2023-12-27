import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string,
    containerStyles?: string,
    handleCLick?: MouseEventHandler<HTMLButtonElement>
}
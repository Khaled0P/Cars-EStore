import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string,
    containerStyles?: string,
    handleCLick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: 'button' | 'submit'
}

export interface SearchManufacturerProps{
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}
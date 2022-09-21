import { atom } from "recoil";
import { Page } from "../types/pages";

export enum AtomKeyNavigation {
    Page = "Page",
}

export const pageAtom  = atom({
    key: AtomKeyNavigation.Page,
    default: Page.Home,
})
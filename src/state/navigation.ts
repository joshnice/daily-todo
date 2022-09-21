import { atom, RecoilState} from "recoil";
import { Page } from "../pages/pages.types";

export enum AtomKeyNavigation {
    Page = "Page",
}

export const pageAtom: RecoilState<Page> = atom({
    key: AtomKeyNavigation.Page,
    default: Page.Home,
})
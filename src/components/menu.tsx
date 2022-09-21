import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Page } from "../types/pages";
import { pageAtom } from "../state/navigation";
import { headerHeight } from "../style/style";

const Menu: FunctionComponent = () => {
    const [_, setPage] = useRecoilState(pageAtom);
    return (
        <MenuContainer>
            Menu
            <button onClick={() => setPage(Page.Home)}>Home</button>
            <button onClick={() => setPage(Page.Settings)}>Settings</button>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    height: calc(100vh - ${headerHeight});
    position: absolute;
    right: 0;
    top: ${headerHeight};
    width: 200px;
    background-color: white;
`;

export default Menu;
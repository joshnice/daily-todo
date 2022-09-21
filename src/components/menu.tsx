import { FunctionComponent } from "react";
import styled from "styled-components";
import { headerHeight } from "../style/style";

const Menu: FunctionComponent = () => {
    return (
        <MenuContainer>
            Menu
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
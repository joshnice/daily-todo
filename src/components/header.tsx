import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { IconButton } from "../style/icon-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from "./menu";
import { headerHeight } from "../style/style";

const HeaderComponent: FunctionComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Header>
                <h1 className="header-title">Daily Todo</h1>
                <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon className="menu-icon" icon={faBars} />
                </IconButton>   
            </Header>
            { menuOpen && <Menu /> }
        </>
    )
};

const Header = styled.div`
    height: ${headerHeight};
    border-bottom: 1px solid black;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu-icon {
        font-size: 20px;
    }
`;

export default HeaderComponent;

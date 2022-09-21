import { FunctionComponent } from "react";
import styled from "styled-components";

const HeaderComponent: FunctionComponent = () => {
    return (
        <Header>
           <h1 className="header-title">Daily Todo</h1>
        </Header>
    )
};

const Header = styled.div`
    height: 75px;
    border-bottom: 1px solid black;
    padding-left: 10px;
`;

export default HeaderComponent;

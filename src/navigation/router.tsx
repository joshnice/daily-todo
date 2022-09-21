import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import HeaderComponent from "../components/header";
import HomePage from "../pages/home";
import { Page } from "../pages/pages.types";
import { pageAtom } from "../state/navigation";

const Router: FunctionComponent = () => {
    const selectedPage = useRecoilValue<Page>(pageAtom);
    return (
        <>
        <HeaderComponent />
        <PageContainer>
            { Page.Home === selectedPage && <HomePage /> }
        </PageContainer>
        </>
    );
};

const PageContainer = styled.div`
    padding: 10px;
`;

export default Router;

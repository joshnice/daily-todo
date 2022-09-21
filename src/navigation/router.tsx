import { FunctionComponent } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import styled from "styled-components";
import HeaderComponent from "../components/header";
import HomePage from "../pages/home";
import { Page } from "../types/pages";
import SettingsPage from "../pages/settings";
import { pageAtom } from "../state/navigation";

const Router: FunctionComponent = () => {
    const selectedPage = useRecoilValue<Page>(pageAtom);
    return (
        <>
            <HeaderComponent />
            <PageContainer>
                { Page.Home === selectedPage && (
                    <RecoilRoot>
                        <HomePage />
                    </RecoilRoot>
                )}
                { Page.Settings === selectedPage && <SettingsPage /> }
            </PageContainer>
        </>
    );
};

const PageContainer = styled.div`
    padding: 10px;
`;

export default Router;

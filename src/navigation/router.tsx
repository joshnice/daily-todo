import { FunctionComponent } from "react";
import styled from "styled-components";
import HeaderComponent from "../components/header";
import HomePage from "../pages/home";

const router: FunctionComponent = () => {
  return (
    <>
      <HeaderComponent />
      <PageContainer>
        <HomePage />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  padding: 10px;
`;

export default router;

import { FunctionComponent } from "react";
import HeaderComponent from "../components/header";
import HomePage from "../pages/home";

const router: FunctionComponent = () => {
  return (
    <>
      <HeaderComponent />
      <HomePage />
    </>
  );
};

export default router;

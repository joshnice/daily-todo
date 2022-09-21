import { RecoilRoot } from "recoil";
import "./App.css";
import Router from "./navigation/router";

function App() {
    return (
        <RecoilRoot>
            <Router />
        </RecoilRoot>
    )
}

export default App;

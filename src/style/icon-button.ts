import styled from "styled-components";
import { fontColour } from "./style";

export const IconButton = styled.button `
    cursor: pointer;
    border-radius: 50%;
    font-size: 12px;
    padding: 15px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${fontColour};
`;
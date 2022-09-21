import { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { fontColour } from "../style/style";

interface TickboxProps {
    checked: boolean;
    onClick: () => void;
}   

const Tickbox: FunctionComponent<TickboxProps> = ({ checked, onClick }) => (
    <TickboxButton showBorder={!checked} onClick={onClick}>
        {checked && <FontAwesomeIcon className="checked-icon" icon={faSquareCheck} />  }
    </TickboxButton>
);

const tickboxSize = "20px";

const TickboxButton = styled.button<{ showBorder: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: ${tickboxSize};
    width: ${tickboxSize};
    border: ${({ showBorder }) => showBorder ? `2px solid ${fontColour}` : "none"};
    border-radius: 5px;
    cursor: pointer;
    .checked-icon {
        font-size: ${tickboxSize};
        color: ${fontColour};
    }
`;

export default Tickbox;

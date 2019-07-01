/* eslint-disable no-unused-vars */
import React from "react";
import { StyledModal, ModalContent, ModalWrapper } from "./style";

function Modal(props) {
    return (
        <StyledModal display={props.display}>
            <ModalContent>{props.children}</ModalContent>
        </StyledModal>
    );
}

export default Modal;

import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.9);
    display: ${props => props.display};
    -webkit-transition: all 0.5s 0.5s ease-in-out;
    transition: all 0.5s 0.5s ease-in-out;
`;

export const ModalContent = styled.div`
    padding: 10px;
    max-width: 600px;
    min-width: 360px;
    max-height: 85%;
    overflow: auto;
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 999;
    opacity: 1;
    border-radius: 3px;
    background: #fff;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
`;

import styled from "styled-components";

export const Title = styled.h2`
    margin: 0;
    margin-left: 15px;
    font-size: 2em;
    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

export const Menu = styled.ul`
    list-style: none;
    margin: 0;
    height: 100%;
    padding: 0 10px;
    background-color: #9b4dca;
`;

export const MenuItem = styled.li`
    margin: 0;
    margin-top: 10px;
`;

export const MenuLink = styled.a`
    color: #FFF;
    &:hover {
        color: #FFF;
        cursor: pointer;
    }
`;
import styled from "styled-components";

export const TabsWrapper = styled.a`
    float:left;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const Tab = styled.a`
    color: #606c76;
    padding: 5px;
    border-bottom: 5px solid ${ props => props.active ? '#9b4dca' : '#ccc' };
    width: 50%;
    float:left;
    text-align:center;
    &:hover {
        cursor: pointer
    }
`;
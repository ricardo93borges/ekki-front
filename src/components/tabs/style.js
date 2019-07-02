import styled from "styled-components";

export const Tab = styled.a`
    color: #606c76;
    padding: 5px;
    margin-right: 5px;
    border-bottom: 5px solid ${ props => props.active ? '#9b4dca' : '#606c76' };
    &:hover {
        cursor: pointer
    }
`;
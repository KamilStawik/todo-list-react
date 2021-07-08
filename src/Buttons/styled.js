import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
            flex-direction: column;
        }
`;

export const Button = styled.button`
    border: none;
    background-color: hsl(0, 0%, 100%);
    color: hsl(180, 100%, 25%);
    margin: 10px 20px 10px 0px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 35%);
    }
    &:active {
        color: hsl(180, 100%, 45%);
    }
    &:disabled {
        color: hsl(0, 0%, 80%);
    }
`;
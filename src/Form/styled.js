import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: hsl(0, 0%, 100%);
    margin-top: 2px;
    margin-bottom: 10px;
    padding: 20px 10px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
            flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    max-width: 100%;
    padding: 8px;
    margin: 10px;
    flex-grow: 1;
`;

export const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 100%);
    margin: 10px;
    cursor: pointer;
    justify-self: flex-end;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
    }
    
    &:active {
        background-color: hsl(180, 100%, 45%);
        transform: scale(1.1);
    }

    @media(max-width: 767px) {
        width: 100%;
    }
`;
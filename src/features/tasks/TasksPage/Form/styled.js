import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: hsl(0, 0%, 100%);
    margin-top: 2px;
    margin-bottom: 10px;
    padding: 20px 10px;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
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
    background-color: ${({ theme }) => (theme.colors.primaryColor)};
    color: hsl(0, 0%, 100%);
    margin: 10px;
    cursor: pointer;
    justify-self: flex-end;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }
    
    &:active {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    @media(max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        width: 100%;
    }
`;
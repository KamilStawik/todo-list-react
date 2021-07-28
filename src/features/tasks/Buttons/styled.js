import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: hsl(0, 0%, 100%);
    color: ${({ theme }) => (theme.colors.primaryColor)};
    margin: 10px 20px 10px 0px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);;
    }
    &:disabled {
        color: ${({ theme }) => (theme.colors.disabledColor)};
    }
`;
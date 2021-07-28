import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: hsl(0, 0%, 100%);
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        justify-content: center;
    }
`;

export const Header = styled.header`
    padding-left: 20px;
    border-bottom: 2px solid ${({ theme }) => (theme.colors.backgroundColor)};
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
            flex-wrap: wrap;
            justify-content: center;
    }
`;

export const HeaderText = styled.h2`
    @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
        flex-basis: 100%;
    }
`;
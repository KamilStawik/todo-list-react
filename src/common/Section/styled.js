import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: hsl(0, 0%, 100%);
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export const Header = styled.header`
    padding-left: 20px;
    border-bottom: 2px solid hsl(0, 0%, 93%);
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
            flex-wrap: wrap;
            justify-content: center;
    }
`;

export const HeaderText = styled.h2`
    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;
import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => (theme.colors.primaryColor)};
    margin-top: 2px;
    margin-bottom: 10px;
    padding: 20px 10px;
    display: flex;
    /* align-items: center; */

    /* @media (max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
            flex-wrap: wrap;
    } */
`;

export const UnorderedList = styled.ul`
    background-color: ${({ theme }) => (theme.colors.primaryColor)};
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.li`
    padding: 20px;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: hsl(0, 0%, 93%);
`;


// export const Button = styled.button`
//     border: none;
//     padding: 10px 20px;
//     background-color: ${({ theme }) => (theme.colors.primaryColor)};
//     color: hsl(0, 0%, 100%);
//     margin: 10px;
//     cursor: pointer;
//     justify-self: flex-end;
//     transition: 0.5s;

//     &:hover {
//         filter: brightness(110%);
//         transform: scale(1.1);
//     }

//     &:active {
//         filter: brightness(120%);
//         transform: scale(1.1);
//     }

//     @media(max-width: ${({ theme }) => (theme.breakPoints.mobile)}px) {
//         width: 100%;
//     }
// `;
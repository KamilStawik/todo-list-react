import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const UnorderedList = styled.ul`
    margin: 0px;
    background-color: ${({ theme }) => (theme.colors.primaryColor)};
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const ListItem = styled.li`
    padding: 20px;
`;

export const StyledLink = styled(NavLink).attrs(() => ({
    activeClassName: "active",
}))`
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    
    &.active{
        font-weight: bold;
    }
`;
import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    background-color: hsl(0, 0%, 100%);
    list-style: none;
    padding: 20px 10px;
    margin-top: 2px;
`;

export const ListItem = styled.li`
    border-bottom: 1px solid ${({ theme }) => (theme.colors.backgroundColor)}px;
    margin-top: 15px;
    padding: 10px;
    display: flex;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;
    padding: 0px 10px;
    flex-grow: 1;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => (theme.colors.greenButtonColor)};
    color: hsl(0, 0%, 100%);
    font-weight: bold;
    flex-shrink: 0;
    transition: 0.5s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => (theme.colors.greenButtonColor)};

        &:hover {
            filter: brightness(110%)
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => (theme.colors.redButtonColor)};

        &:hover {
            filter: brightness(110%)
        }
    `} 
`;
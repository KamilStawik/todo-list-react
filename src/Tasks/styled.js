import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    background-color: hsl(0, 0%, 100%);
    list-style: none;
    padding: 20px 10px;
    margin-top: 2px;
`;

export const ListItem = styled.li`
    border-bottom: hsl(0, 0%, 93%) solid 1px;
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
    background-color: hsl(120, 100%, 25%);
    color: rgb(255, 255, 255);
    font-weight: bold;
    flex-shrink: 0;
    transition: 0.5s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(120, 100%, 25%);

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(0, 100%, 50%);

        &:hover {
            background-color: hsl(0, 100%, 60%);
        }
    `} 
`;
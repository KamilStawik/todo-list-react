import { ListItem, UnorderedList, StyledLink } from "./styled.js";

const Navigation = () => (
    <nav>
        <UnorderedList>
            <ListItem>
                <StyledLink to="/zadania">Zadania</StyledLink>
            </ListItem>
            <ListItem>
                <StyledLink to="/autor">O autorze</StyledLink>
            </ListItem>
        </UnorderedList>
    </nav>
);

export default Navigation;
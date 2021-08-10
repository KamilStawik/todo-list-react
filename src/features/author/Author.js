import { Container } from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";
import AuthorText from "./AuthorText";

const Author = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Kamil Stawik"
            body={<AuthorText />}
        />
    </Container>
);

export default Author;
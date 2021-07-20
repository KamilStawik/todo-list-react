import { Header, HeaderText, StyledSection } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <StyledSection>
        <Header>
            <HeaderText>{title}</HeaderText>
            {extraContent}
        </Header>
        {body}
    </StyledSection>
);

export default Section;
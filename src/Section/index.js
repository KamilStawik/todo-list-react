import { Header, HeaderText, StyledSection } from "./styled";

const Section = ({ title, body, extraContent }) => (
    <StyledSection>
        <div>
            <Header>
                <HeaderText>{title}</HeaderText>
                {extraContent}
            </Header>
        </div>
        {body}
    </StyledSection>
);

export default Section;
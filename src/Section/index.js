import "./style.css";

const Section = ({ title, body, extraContent }) => (
    <section className="section">
        <div>
            <header className="section__header">
                <h2 className="section__titleText">{title}</h2>
                {extraContent}
            </header>
        </div>
        {body}
    </section>
);

export default Section;
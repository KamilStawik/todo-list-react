import "./style.css";

const Section = ({ title, body, extraContent }) => (
    <section>
        <div className="section__headerContainer">
            <header className="section__header">
                <h2>{title}</h2>
            </header>
            {extraContent}
        </div>
        {body}
    </section>
);

export default Section;
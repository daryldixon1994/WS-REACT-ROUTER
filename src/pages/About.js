import { Link } from "react-router-dom";
const About = () => {
    return (
        <section className="section">
            <h2>About Page</h2>
            <Link className="btn" to="/">
                back home
            </Link>
        </section>
    );
};
export default About;

import "./About.css";
import Battery from "../Battery/Battery"; 

export default function About() {
    return (
        <section className="about">
            <div className="about__content">
                <Battery />
            </div>  
        </section>
    );
}
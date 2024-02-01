import "./ScrollDownIndicator";
import { ScrollDownIndicator } from "./ScrollDownIndicator";

export function Home() {
    return (
        <div>
            <div className="hero-header">
                <div className="hero-header-content">
                    <h1>Christof Schramm</h1>

                    <h2>Software Engineer // Full Stack</h2>
                    <div className="hero-header-social-icons">
                        <a href ="https://www.linkedin.com/in/christof-schramm-534731b9/">
                            <div className="clickable-icon linkedin-icon"/>
                        </a>
                        <a href ="https://github.com/schrammc">
                            <div className="clickable-icon github-icon"/>
                        </a>
                    </div>
                    <ScrollDownIndicator/>

                </div>
            </div>
            <div className="page-container">
                <div className="page-section">
                    <h1>About me</h1>
                    <p>
                        I am a software engineer passionate about building
                        first-class technical solutions with a proven
                        track-record in the the Fintech and Saas industries. I
                        am an expert functional programmer in Haskell and Scala
                        and I very open to learning technologies and programming
                        languages for for exciting new projects.  
                    </p>
                </div>
                <div className="page-section">
                    <h1>Resume</h1>
                    [Resume goes here]
                </div>
            </div>
        </div>
    )
}

import "./ScrollDownIndicator";
import "./Resume";
import { ScrollDownIndicator } from "./ScrollDownIndicator";
import { Resume } from "./Resume";

export function Home() {
    return (
        <div>
            <div className="hero-header">
                <div className="hero-header-content">
                    <h1>Christof Schramm</h1>

                    <h2>Software Engineer // Full Stack</h2>
                    <div className="hero-header-social-icons">
                        <a href="https://www.linkedin.com/in/christof-schramm-534731b9/">
                            <div className="clickable-icon linkedin-icon" />
                        </a>
                        <a href="https://github.com/schrammc">
                            <div className="clickable-icon github-icon" />
                        </a>
                    </div>
                    <ScrollDownIndicator />

                </div>
            </div>
            <div className="page-container">
                <div className="page-section">
                    <h1>About me</h1>
                    <p>
                        I am a software engineer passionate about building
                        first-class technical solutions with a proven
                        track-record in the the Fintech and Saas
                        industries. While I am an expert functional programmer
                        in Haskell and Scala I'm also very open to learning
                        technologies and programming languages for exciting new
                        projects.
                    </p>
                </div>
                <div className="page-section">
                    <h1> Resume</h1>
                    <Resume items={[
                        {
                            title: "Senior Software Engineer"
                            , company: "Flint Healthcare Inc."
                            , dateRange: "April 2023 - current"
                            , description: "Senior Software Engineer in a startup company developing a scalable platform for nurses from the global market to obtain a US-License, emigrate to the US, and find long-term roles at healthcare providers. Haskell event sourcing backend and Elm frontend."
                            , skills: ["Haskell", "Elm", "Docker", "Github Actions"]
                        }
                        , {
                            title: "Senior Software Engineer"
                            , company: "e-bot7"
                            , dateRange: "February 2020 - March 2023"
                            , description: "Senior Software Engineerin the Conversational Engine team. Development of a new backend infrastructure for processing >100k Chat messages per day in Haskell using AWS Lambda and AWS DynamoDB. Setup of a CI/CD pipeline using Github actions. Product Manager(from July 2021) for the Conversational Engine team, a cross- functional team of eight employees including Software engineers, a UX - Designer, and QA - engineers"
                            , skills: [
                                "Haskell",
                                "Purescript",
                                "Typescript",
                                "React",
                                "Python",
                                "Github Actions",
                                "DynamoDB",
                                "MongoDB"
                            ]
                        }
                        , {
                            title: "Senior Software Engineer"
                            , company: "Spendit"
                            , dateRange: "Aug 2019 - Jan 2020"
                            , description: "Scala backend engineering in a company selling custom credit cards as a tax-exempt employee benefit"
                            , skills: ["Scala", "PostgreSQL", "AWS", "Jenkins", "AngularJS"]
                        }
                        , {
                            title: "Software Engineer"
                            , company: "Ubtrend"
                            , dateRange: "October 2016 - July 2019"
                            , description: "A project developing an algorithmic trading solution. This included development of infrastructure for efficiently back-testing novel trading algorithms, statistical evaluation of the efficacy of trading algorithms and design of a new framework for the development of algorithmic trading strategies."
                            , skills: ["Haskell", "Javascript", "PostgreSQL"]
                        }
                        , {
                            title: "Software Engineer"
                            , company: "Freelance"
                            , dateRange: "June 2015 - October 2016"
                            , description: "Developing software for Munich hedge-funds."
                            , skills: ["Scala", "Java", "PostgreSQL"]
                        }
                        , {
                            title: "Junior Software Engineer"
                            , company: "Clueda"
                            , dateRange: "June 2013 - May 2015"
                            , description: "Maintenance of an Elastic Search cluster, Scala backend development"
                            , skills: ["Scala", "Elastic Search"]
                        }
                        , {
                            title: "Working Student"
                            , company: "LMU Munich"
                            , dateRange: "June 2012 - December 2012"
                            , description: "Software development in Java for a research project modeling cellular metabolism through Petri-Nets"
                            , skills: ["Java", "RabbitMQ"]
                        }
                    ]}></Resume>
                </div>
            </div>
        </div>
    )
}

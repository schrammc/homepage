import { Link } from 'react-router-dom';
import { Resume } from "./components/Resume";
import { ScrollDownIndicator } from "./components/ScrollDownIndicator";

export function Home() {
    return (
        <div>
            <div className="hero-header">
                <div className="hero-header-content">
                    <h1 style={{ color: "var(--col-text)" }}>Christof Schramm</h1>

                    <h2>Software&nbsp;Engineer</h2>
                    <div className="hero-header-social-icons">
                        <a href="https://www.linkedin.com/in/christof-schramm-534731b9/" aria-label="My LinkedIn profile">
                            <div className="clickable-icon linkedin-icon" />
                        </a>
                        <a href="https://github.com/schrammc" aria-label="My GitHub profile">
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
                        in Haskell and Scala I&apos;m also very open to learning
                        technologies and programming languages for exciting new
                        projects. Furthermore I am very interested in optimizing
                        applications for efficiency and performance.
                    </p>
                </div>
                <div className="page-section">
                    <h1> Resume</h1>
                    <Resume items={[
                        {
                            title: "Senior Software Engineer"
                            , company: "Tacto"
                            , dateRange: "March 2024 - May 2025"
                            , description: "Senior Software Engineer working on a novel Supplier Relations Management solution for European SMEs."
                            , skills: ["Python", "FastAPI", "React", "Typescript", "Kubernetes", "Docker", "Github Actions"]
                        },
                        {
                            title: "Senior Software Engineer"
                            , company: "Flint Healthcare"
                            , dateRange: "April 2023 - February 2024"
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
                                "Docker",
                                "DynamoDB",
                                "MongoDB"
                            ]
                        }
                        , {
                            title: "Senior Software Engineer"
                            , company: "Spendit"
                            , dateRange: "Aug 2019 - Jan 2020"
                            , description: "Scala backend engineering in a company selling custom credit cards as a tax-exempt employee benefit"
                            , skills: ["Scala", "PostgreSQL", "Docker", "AWS", "Jenkins", "AngularJS"]
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
                <div className="page-container">
                    <div className="page-section">
                        <h1>Articles and Publications</h1>
                        <ul>
                            <li>

                                Schramm, C., Wang, Y., & Bry, F. (2018, May).&nbsp;
                                <a href="/static/codekoan-icse2018.pdf">
                                    CodeKoan: A Source Code Pattern Search Engine
                                    Extracting Crowd Knowledge.</a> In 2018 IEEE/ACM
                                5th International Workshop on Crowd Sourcing in
                                Software Engineering (CSI-SE) (pp. 1-8). IEEE.
                            </li>
                            <li>

                                Schramm, C. (2017), <a href="/static/master-thesis.pdf">Recognition
                                    of Code Patterns From Stackoverflow Answers
                                    in Computer Programs </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-container">
                    <div className="page-section">
                        <h1>Showcases</h1>
                        <ul>
                            <li>
                                <Link to="/showcase/news-sentiment">German news sentiment</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

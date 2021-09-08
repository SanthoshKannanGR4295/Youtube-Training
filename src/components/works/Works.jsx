import { useState } from "react";
import "./works.scss";
import { publicUrl } from "./../../commons";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: publicUrl("/assets/mobile.png"),
            title: "AI-based ERP Module",
            desc: `\nHandled complex projects spanning multiple modules and components.
                Communicated with clients, gathered requirements & expectations, assessed quality parameters from client requirements.
                Analyzed and effectively implemented sophisticated Business Logic in applications.
                Implemented the Waterfall Project Life Cycle Model, ensuring deadlines are met within client-approved budgets.\n`,
        },
        {
            id: "2",
            icon: publicUrl("/assets/globe.png"),
            title: "Health Insights Explorer",
            desc: `\nHealth Insights Explorer is one of the applications under the portfolio of IBM Health Insights.
            The application is linked to an integrated warehouse of medical claims data.
            The curated Dataset in the application enables guided analytics to understand the cost, use, and quality of the payer(ex: Insurance companies) services, and provider(ex: hospitals) practices.
            Users can create reports and dashboards to perform ad-hoc data investigations by drilling down to claim-level details and easily uncover actionable insights.\n`,
            keyResultAreas: `\nWorked on the modernization & optimization of a legacy healthcare analytics engine by enabling migration of processing to Cognos.
                  Helped to integrate Data Modules into Cognos which were essential for it to fetch data from database and create reports, dashboards and visualizations.
                  Facilitated content migration which migrates the Framework Manager report/dashboard specifications to those supported by the Data Module \n`,
        },
        // {
        //     id: "3",
        //     icon: "./assets/writing.png",
        //     title: "Branding",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //     img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        // },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(
                  currentSlide > 0 ? currentSlide - 1 : data.length - 1
              )
            : setCurrentSlide(
                  currentSlide < data.length - 1 ? currentSlide + 1 : 0
              );
    };

    return (
        <div
            className="works"
            id="works"
            style={{
                background: `url(${publicUrl("/assets/worksBackground.jpg")})`,
            }}
        >
            <h1>{`Projects`}</h1>
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <ul
                                        className={
                                            d.keyResultAreas && "large-content"
                                        }
                                    >
                                        <li
                                            style={{
                                                display: "inline-block",
                                            }}
                                        ></li>
                                        <li>Description</li>
                                        <ul>
                                            {d.desc.split("\n").map((desc) =>
                                                desc === "" ? (
                                                    <li
                                                        style={{
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    >
                                                        {desc}
                                                    </li>
                                                ) : (
                                                    <li>{desc}</li>
                                                )
                                            )}
                                        </ul>
                                        {d.keyResultAreas && (
                                            <>
                                                <li>Key Result Areas</li>
                                                <ul>
                                                    {d.keyResultAreas
                                                        .split("\n")
                                                        .map((desc) =>
                                                            desc === "" ? (
                                                                <li
                                                                    style={{
                                                                        display:
                                                                            "inline-block",
                                                                    }}
                                                                >
                                                                    {desc}
                                                                </li>
                                                            ) : (
                                                                <li>{desc}</li>
                                                            )
                                                        )}
                                                </ul>
                                            </>
                                        )}
                                    </ul>
                                    {/* <span>Projects</span> */}
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={publicUrl("assets/arrow.png")}
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src={publicUrl("assets/arrow.png")}
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}

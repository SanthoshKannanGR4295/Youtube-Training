import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import Rating from "@material-ui/lab/Rating";
import {
    javaTechnologiesPortfolio,
    webDevelopmentPortfolio,
    databasePortfolio,
    dotnetPortfolio,
    progLangsPortfolio,
} from "../../data";
import { withStyles } from "@material-ui/styles";
import { Star } from "@material-ui/icons";
import { nearestPerfectSquare } from "../../commons";

const StyledRating = withStyles({
    root: {
        opacity: "1 !important",
        fontSize: "inherit",
    },
    iconFilled: {
        color: "#ffff00",
    },
    iconHover: {
        color: "red",
    },
})(Rating);

export default function Portfolio() {
    const [selected, setSelected] = useState("javatech");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "javatech",
            title: "Java",
        },
        {
            id: "web",
            title: "Web Development",
        },
        {
            id: "database",
            title: "Databases",
        },
        {
            id: "dotnet",
            title: ".Net",
        },
        {
            id: "proglangs",
            title: "Other Programming Languages",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "javatech":
                setData(javaTechnologiesPortfolio);
                break;
            case "web":
                setData(webDevelopmentPortfolio);
                break;
            case "database":
                setData(databasePortfolio);
                break;
            case "dotnet":
                setData(dotnetPortfolio);
                break;
            case "proglangs":
                setData(progLangsPortfolio);
                break;
            default:
                setData(javaTechnologiesPortfolio);
        }
        document.querySelector("#portfolio .container").scrollTop = 0;
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div
                        className="item"
                        container-grid={data.length}
                        // style={{
                        //     flex: `0 1 ${
                        //         100 / (nearestPerfectSquare(data.length) * 2)
                        //     }%`,
                        // }}
                    >
                        <img src={d.img} alt="" />
                        <h3
                        // style={{
                        //     transform: `scale(${
                        //         (100 /
                        //             (nearestPerfectSquare(data.length) *
                        //                 2)) *
                        //         8
                        //     }%)`,
                        // }}
                        >
                            {/* {d.title} */}
                            <StyledRating
                                name="customized-color"
                                value={d.value}
                                getLabelText={(value) =>
                                    `${value} Heart${value !== 1 ? "s" : ""}`
                                }
                                precision={0.5}
                                icon={<Star fontSize="inherit" />}
                                disabled
                            />
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

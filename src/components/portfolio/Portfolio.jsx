import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import Rating from "@material-ui/lab/Rating";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";
import { withStyles } from "@material-ui/styles";
import { Star } from "@material-ui/icons";

const StyledRating = withStyles({
    root: {
        opacity: "1 !important",
    },
    iconFilled: {
        color: "#ffff00",
    },
    iconHover: {
        color: "red",
    },
})(Rating);

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
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
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>
                            <StyledRating
                                name="customized-color"
                                defaultValue={2.5}
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

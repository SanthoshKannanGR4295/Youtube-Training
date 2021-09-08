import "./testimonials.scss";
import { useEffect, useState } from "react";
import { nearestPerfectSquare } from "../../commons";

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img: "./assets/certificate-1.png",
            icon: "assets/twitter.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            // featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img: "./assets/certificate-1.png",
            icon: "assets/twitter.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            // featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];
    // const [isHovering, setIsHovering] = useState(false);
    const [showFull, setShowFull] = useState(null);
    const [filteredData, setFilteredData] = useState(data.slice(0, 1));
    useEffect(() => {
        showFull !== null &&
            setFilteredData(data.filter((d, index) => index === showFull));
    }, [showFull]);
    return (
        <div
            className="testimonials"
            id="testimonials"
            onClick={(e) => {
                // e.currentTarget.children[2]
                //     .getAttribute("style")
                //     .concat("position:absolute");
                setShowFull(null);
            }}
        >
            <h1>Testimonials</h1>
            {/* <div className="container">
                {data.map((d, index) => (
                    <div
                        className={d.featured ? "card featured" : "card"}
                        key={index}
                        onClick={(e) => {
                            console.log(index);
                            !isHovering &&
                                e.currentTarget.classList.toggle("hovered");
                            !isHovering &&
                                e.currentTarget.parentElement.classList.toggle(
                                    "hovered"
                                );
                            setIsHovering(true);
                        }}
                        // onMouseLeave={(e) => {
                        //     !isHovering &&
                        //         e.currentTarget.classList.toggle("hovered");
                        //     !isHovering &&
                        //         e.currentTarget.parentElement.classList.toggle(
                        //             "hovered"
                        //         );
                        //     setIsHovering(true);
                        // }}
                        onTransitionEnd={(e) => {
                            setIsHovering(false);
                        }}
                    >
                        <img className="user" src={d.img} alt="" />
                    </div>
                ))}
            </div> */}
            {
                <div
                    className="container"
                    style={{
                        width: `${showFull !== null ? "0%" : "100%"}`,
                        height: `${showFull !== null ? "0%" : "100%"}`,
                    }}
                >
                    {data.map((d, index) => (
                        <div
                            className={d.featured ? "card featured" : "card"}
                            // style={{
                            //     flex: `0 1 ${
                            //         100 /
                            //         (nearestPerfectSquare(data.length) * 2)
                            //     }%`,
                            // }}
                            key={index}
                            onClickCapture={(e) => {
                                setShowFull(index);
                                e.stopPropagation();
                            }}
                        >
                            <img className="user" src={d.img} alt="" />
                        </div>
                    ))}
                </div>
            }
            {
                <div
                    className={`container${
                        showFull !== null ? " hovered" : ""
                    }`}
                    style={{
                        position: `${
                            showFull === null ? "absolute" : "relative"
                        }`,
                        zIndex: `${showFull === null ? "-1" : "1"}`,
                        transform: `translateY(${
                            showFull === null ? "100%" : "0%"
                        })`,
                    }}
                >
                    {filteredData.map((d, index) => (
                        <div
                            className={[
                                d.featured ? "card featured" : "card",
                                showFull !== null ? "hovered" : "",
                            ].join(" ")}
                            style={
                                showFull === null
                                    ? {
                                          width: "0%",
                                          height: "0%",
                                      }
                                    : {}
                            }
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <img className="user" src={d.img} alt="" />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [
                "Full Stack Developer",
                "Code Reviewer",
                "Bug Fixer",
                "Software Tester",
            ],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Santhosh Kannan G R, </h1>
                    <h3>
                        a <span ref={textRef}></span>
                    </h3>
                </div>
                <img
                    src="assets/down.png"
                    alt=""
                    onClick={() => {
                        document.getElementById("portfolio").scrollIntoView({
                            block: "end",
                            behavior: "smooth",
                        });
                    }}
                />
            </div>
        </div>
    );
}

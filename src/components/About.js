import React from "react";

export default function About() {

    const introduction ={
        color: "red"
    }

    return (
        <section id="">
            <div className="">
                <div className="">
                    <h1 style={introduction}>
                        Hi, I'm Yari.
                        <br className="" />I love building amazing apps!
                    </h1>
                    <p className="">
                        My name is Yari, and I am an aspiring full stack web developer.
                    </p>
                    <div className="">
                        <a
                            href="#contact"
                            className="">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="">
                            See My Work
                        </a>
                    </div>
                </div>
                <div className="">
                    <img
                        className=""
                        alt=""
                        src=""
                    />
                </div>
            </div>
        </section>
    );
}
import React from "react";

export default function About() {

    const introduction ={
        resize: {
            height: "66vmin",
            width: "auto",
        }
    };

    return (
        <section id="">
            <div className="">
                <div className="">
                    <h1 style={introduction}>
                        Hi, I'm Yari.
                        <br className="" />I love building amazing apps!
                    </h1>
                    <p className="">
                        I am an aspiring full stack web developer from Tucson Arizona.
                    </p>
                </div>
            </div>
        </section>
    );
}
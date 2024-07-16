import './filmCssMain.css';
import React from "react";

export default function InfoFilm() {
    return (
        <div className="divInfoFilm">
            <div className="divBlack">
                <h2>Режисер:</h2>
                <div className="divPRegeser">
                    <p className="pInfo"> Джо Чаппелль</p>
                    <p className="pInfo">Брэд Андерсон</p>
                </div>
                <p className="pInfoYear">Рік випуску: 2008</p>
                <p className="pActors">Актори:</p>
                <div className="ulActors">
                    {namesActor.map((name, index) => (
                        <NameActors key={index} name={name}/>
                    ))}
                </div>
            </div>
            {images.map((image, index) => (
                <PosterFilm key={index} src={image.src} alt={image.alt}
                            className={image.src === "/imageFilm/600px-FrogGlyph.webp" ? "imgM" : "small-image"}/>
            ))}
        </div>
    );
}

function NameActors(props) {
    return (<p className='namesActor'>{props.name}</p>)
}

function PosterFilm({src, alt, className}) {
    return (<img className={className} src={src} alt={alt}/>)
}

const namesActor = [
    "Анна Торв",
    "Джошуа Джексон",
    "Джон Нобл"
];

const images = [
    {
        src: "/imageFilm/600px-FrogGlyph.webp",
        alt: "Fringe",
    },
    {
        src: "/imageFilm/600px-SmokeGlyph.webp",
        alt: "Fringe",
    }
];
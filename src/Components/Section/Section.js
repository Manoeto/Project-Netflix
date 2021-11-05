import React from "react";
import "./Section.css"
import Card from "./Card/Card";
export default function Section({title}){
    
    return <section className="Section">
        <h4>{title}</h4>
        <div className="Cards">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </section>
}
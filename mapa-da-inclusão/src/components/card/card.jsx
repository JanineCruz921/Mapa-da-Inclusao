import { useState } from "react";
import "./card.css"

export function Card({ ongs }) {
    return (<section className="Card">
    <div className="cardContent">
        <div>
            <p>{ongs}</p>
        </div>
    </div>
    </section>)
}
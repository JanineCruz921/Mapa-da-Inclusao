import { UseFetchIntelectual } from "../../fetchApi";
import { Card } from "../card/card";
import { CardResume } from "../cardResume/cardResume";
import "./IntelectualSession.css"

export function IntelectualSession() {
    return (<session className="intelectualSession">
        <div className="CardIntelectual" >
            <Card ongs= {UseFetchIntelectual.ongIntelectual}/>
        </div>
        <div className="CardResueIntelectual" >
            <CardResume url={""} imgContent={"esta é uma imagem relacionada a defciência intelectual"} 
            pContent={"esse é um pequeno texto que acompanha a imagem sobre deficiência intelectual"}/>
        </div>
    </session>)
}
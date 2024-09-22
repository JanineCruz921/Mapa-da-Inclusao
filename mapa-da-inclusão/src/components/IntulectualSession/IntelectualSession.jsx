import { Card } from "../card/card";
import { CardResume } from "../cardResume/cardResume";
import "./IntelectualSession.css"

export function IntelectualSession() {
    return (<session className="intelectualSession">
        <div className="CardIntelectual" >
            <Card content= {"esse é um breve resumo para a sessão de pesquisa por ongs que dão apoio à deficiências Intelectual"}/>
        </div>
        <div className="CardResueIntelectual" >
            <CardResume url={""} imgContent={"esta é uma imagem relacionada a defciência intelectual"} 
            pContent={"esse é um pequeno texto que acompanha a imagem sobre deficiência intelectual"}/>
        </div>
    </session>)
}
import { Card } from "../card/card";
import { CardResume } from "../cardResume/cardResume";
import "./physicalSession.css"

export function PhysicalSession(){
    return  (<session className="physicalSession">
        <div>
            <Card content= {"Descubra ONGs dedicadas a oferecer suporte e recursos para pessoas com deficiência motora. Nossa plataforma facilita a busca por iniciativas que promovem a inclusão, reabilitação e qualidade de vida. Conecte-se e encontre a ajuda que você precisa!"}/>
        </div>
        <div>
            <CardResume url={""} imgContent={"esta é uma imagem relacionada a defciência motora"} 
            pContent={"esse é um pequeno texto que acompanha a imagem sobre deficiência motora"}/>
        </div>
    </session>)
}

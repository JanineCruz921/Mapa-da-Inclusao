import { Card } from "../card/card";
import { CardResume } from "../cardResume/cardResume";
import "./VisualSession.css"

export function VisualSession (){
    return (<session className="visualSession">
        <div>
            <Card content= {"esse é um breve resumo para a sessão de pesquisa por ongs que dão apoio à deficiências visuais"}/>
        </div>
        <div>
            <CardResume url={""} imgContent={"esta é uma imagem relacionada a defciência visual"} 
            pContent={"esse é um pequeno texto que acompanha a imagem sobre deficiência visual"}/>
        </div>
    </session>)
}
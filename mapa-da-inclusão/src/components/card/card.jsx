import { PageButton } from "../button/button";
import { PopUp } from "../popUp/popUp";
import"./card.css"

export function Card({content}) {
    return <div className="divCard">
            <div>
                <p>{content}</p>
            </div>
            <div className="divCardButton">
                <PageButton onclick= {PopUp} height={"50px"} width={"180px"}/>
            </div>
    </div>
}
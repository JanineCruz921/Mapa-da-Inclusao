import { Menu } from "../menu/menu";
import { PresentationSession } from "../presentationSession/presentationSession";
import { IntelectualSession } from "../IntulectualSession/IntelectualSession";
import { VisualSession } from "../VisualSession/visualSession";
import { PhysicalSession } from "../physicalSession/physicalSession";
import { Footer } from "../footer/footer";
import "./landingPage.css"

export function LandingPageLayout (){
    return (<session className ="landingPage" >
        <div><Menu/></div>
        <div><PresentationSession/></div>
        <div><IntelectualSession /></div>
        <div><VisualSession/></div>
        <div><PhysicalSession/></div>
        <div><Footer/></div>
    </session>)
}

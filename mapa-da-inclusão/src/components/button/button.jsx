import "./button.css"

export function PageButton ({color, placeholder, onclick, height, width}){
    return <button className="pageButton" style={{color:color, placeholder:placeholder,height:height, width:width}} onclick={{onclick}}></button>
}
import "./cardResume.css"

export function CardResume ({pContent,url,imgContent}){
    return (<div className="cardResume">
        <div><img src= {url} alt={imgContent} /></div>
        <div><p>{pContent}</p></div>
        </div>)
}
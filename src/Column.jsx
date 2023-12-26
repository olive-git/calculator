export function Column ({borderColor, content}){
    const className = "col-md-5 m-2 border border-rounded border-" + borderColor
    return <div className={className}>{content}</div>
}
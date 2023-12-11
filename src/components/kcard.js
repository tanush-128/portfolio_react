export default function Kcard(props){
    return(

        <div className="kcard">
    <div className="time">{props.time}</div>
    <div className="title">{props.title}</div>
    <div className="description">
      {props.description}
    </div>
    <div className="institution"> {props.institution}</div>
  </div>
        )
}
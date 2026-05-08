import "./ServiceCard.css"

export default function ServiceCard({title,image,desc}){
    return(
        <div className="service-card">
            <div className="service-image">  {/* kiri */}
                <img src={image} />
            </div>

            <div className="service-content"> {/* kanan */}
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}
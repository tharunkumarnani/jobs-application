import './index.css'

const CareerItem=(props)=>{
    const {careerDetails}=props
    const {title,location,requirements,description}=careerDetails
    console.log(requirements)
    return (

        <li className="career-item">
            <div className="title-apply">
                <h1 className="title">{title}</h1>
                <button className="apply-btn">Apply Now</button>
            </div>
            <p className="loc">{location}</p>
            <p className="requires">
                Requirements:<br/>
                {requirements.map(each=><>{each}<br/><br/></>)}
            </p>
            <p className="des">{description}</p>
        </li>
    )
}

export default CareerItem;
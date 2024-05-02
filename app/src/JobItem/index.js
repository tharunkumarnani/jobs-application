import { FaLocationDot } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import './index.css'

const JobItem=(props)=>{
    const {jobDetails}=props
    const {jobTitle,department,location,description,qualification,skills}=jobDetails
    return (
        <li className="job-item">

            <div className="title-loc">
                <h1 className="job-title">{jobTitle}</h1>
                <div className="icons-des">
                <BsFillBriefcaseFill/>
                <p className="depart">{department}</p>
                </div>
                <div className="icons-des">
                <FaLocationDot />
                <p className="loc">{location}</p>
                </div>
                <button className="apply-btn">Apply</button>
            </div>
            <p className="des">{description}</p>
            <p className="qual">Qualifications : {qualification}</p>
            <p className="skills">Skills : {skills}</p>
            
        </li>
    )
}

export default JobItem
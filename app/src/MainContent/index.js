import CareerItem from '../CareerItem'
import JobItem from '../JobItem'
import './index.css'


const dummyData=[
    {
        jobId:1,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
    {
        jobId:2,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
    {
        jobId:3,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
    {
        jobId:4,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
    {
        jobId:5,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
    {
        jobId:6,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
    {
        jobId:7,
        jobTitle:"Title",
        department:"Domain",
        location:"Place",
        description:"As a Product Design Manager at GitLab, you will be responsible for managing a team of up to 5 talented Product Designers.",
        qualification:"Any Degree",
        skills:"Html, CSS, Js, React Js"
    },
]

const dummyCareerOpportunities=[
    {
        id:1,
        title:"Vocational Job Coach",
        location:"Campell Country School District, Gillette, WY 82718",
        requirements:["SKILLS are required to perform multiple, non-technical tasks with a potential need to upgrade skills in order to meet changing job conditions.","KNOWLEDGE is required to perform basic math, including calculations using fractions, percents, and/or ratios; read a variety of manuals, write documents following prescribed formats, and/or present information to others; and analyze situations to define issues and draw conclusions.","ABILITY is required to schedule activities and/or meetings; gather and/or collate data; and use basic, job-related equipment."],
        description:"The job of Vocational Job Coach is done for the purpose/s of acting under the direction of the building principal and the vocational special education teacher, assisting with job/work experience opportunities for students who meet program criteria; maintaining liaisons with community leaders and organizations; and providing information and/or direction to students."
    },
    {
        id:2,
        title:"Vocational Job Coach",
        location:"Campell Country School District, Gillette, WY 82718",
        requirements:["SKILLS are required to perform multiple, non-technical tasks with a potential need to upgrade skills in order to meet changing job conditions.","KNOWLEDGE is required to perform basic math, including calculations using fractions, percents, and/or ratios; read a variety of manuals, write documents following prescribed formats, and/or present information to others; and analyze situations to define issues and draw conclusions.","ABILITY is required to schedule activities and/or meetings; gather and/or collate data; and use basic, job-related equipment."],
        description:"The job of Vocational Job Coach is done for the purpose/s of acting under the direction of the building principal and the vocational special education teacher, assisting with job/work experience opportunities for students who meet program criteria; maintaining liaisons with community leaders and organizations; and providing information and/or direction to students."
    },
    {
        id:3,
        title:"Vocational Job Coach",
        location:"Campell Country School District, Gillette, WY 82718",
        requirements:["SKILLS are required to perform multiple, non-technical tasks with a potential need to upgrade skills in order to meet changing job conditions.","KNOWLEDGE is required to perform basic math, including calculations using fractions, percents, and/or ratios; read a variety of manuals, write documents following prescribed formats, and/or present information to others; and analyze situations to define issues and draw conclusions.","ABILITY is required to schedule activities and/or meetings; gather and/or collate data; and use basic, job-related equipment."],
        description:"The job of Vocational Job Coach is done for the purpose/s of acting under the direction of the building principal and the vocational special education teacher, assisting with job/work experience opportunities for students who meet program criteria; maintaining liaisons with community leaders and organizations; and providing information and/or direction to students."
    },
    {
        id:4,
        title:"Vocational Job Coach",
        location:"Campell Country School District, Gillette, WY 82718",
        requirements:["SKILLS are required to perform multiple, non-technical tasks with a potential need to upgrade skills in order to meet changing job conditions.","KNOWLEDGE is required to perform basic math, including calculations using fractions, percents, and/or ratios; read a variety of manuals, write documents following prescribed formats, and/or present information to others; and analyze situations to define issues and draw conclusions.","ABILITY is required to schedule activities and/or meetings; gather and/or collate data; and use basic, job-related equipment."],
        description:"The job of Vocational Job Coach is done for the purpose/s of acting under the direction of the building principal and the vocational special education teacher, assisting with job/work experience opportunities for students who meet program criteria; maintaining liaisons with community leaders and organizations; and providing information and/or direction to students."
    },
    {
        id:5,
        title:"Vocational Job Coach",
        location:"Campell Country School District, Gillette, WY 82718",
        requirements:["SKILLS are required to perform multiple, non-technical tasks with a potential need to upgrade skills in order to meet changing job conditions.","KNOWLEDGE is required to perform basic math, including calculations using fractions, percents, and/or ratios; read a variety of manuals, write documents following prescribed formats, and/or present information to others; and analyze situations to define issues and draw conclusions.","ABILITY is required to schedule activities and/or meetings; gather and/or collate data; and use basic, job-related equipment."],
        description:"The job of Vocational Job Coach is done for the purpose/s of acting under the direction of the building principal and the vocational special education teacher, assisting with job/work experience opportunities for students who meet program criteria; maintaining liaisons with community leaders and organizations; and providing information and/or direction to students."
    },
]


const MainContent=()=>{
        console.log('Main Content')
        return (
            <div className="main-content">
                <h1 className='heading' >Job Openings and Career Oppotunities</h1>
                <div className="job-posts">
                <h2 className='sub-heading'>Internal Job Postings</h2>
                <ul className="job-lists">
                    {dummyData.map(each=><JobItem key={each.jobId} jobDetails={each}/>)}
                </ul>
                </div>
                <div className="career-adv">
                    <h2 className='sub-heading'>Career Advancement Opportunities</h2>
                    <ul className="career-programs">
                        {dummyCareerOpportunities.map((each)=><CareerItem key={each.id} careerDetails={each}/>)}
                    </ul>
                </div>
            </div>
        )
}

export default MainContent
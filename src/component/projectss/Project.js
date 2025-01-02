import { Element } from 'react-scroll'
import './Project.css'
import userform from '../asset/userform.png';
import employeemng from '../asset/employee.png';
import { GiBarbedStar } from "react-icons/gi";
const Project = () => {
    const projectinfo = {
        projectdetail: [
            {
                para1: "Developed an employee management application using HTML, CSS, and ReactJS.",
                para2: "Designed a simple CSS layout for user-friendly data entry forms. Implemented functionality to add employee details, displaying them within an HTML table.",
                para3: "Enabled edit and delete options for each employee entry, allowing for seamless data modifications.",
                para4: "Ensured efficient state management in ReactJS to dynamically update the table upon any data changes ",

            },
            {
                para1: "Developed a React-based form application with dynamic input validation and modular components.",
                para2: "Used custom hooks to manage state and validation, ensuring reusable and efficient logic.",
                para3: "Designed a responsive UI with CSS, enhancing usability across desktop and mobile devices.",
                para4: "Integrated mock APIs for simulating data handling and submission processes.",


            }
        ]
    }
    return (
        <Element id='project'>
            <div className='project-container'>
                <div className='projectheading-container'>
                    <h2>project</h2>
                </div>
                <div className='allproject-container'>

                    <div className='projectdetail-container1'>
                        <img src={employeemng} height={500} width={500} alt='firstproject' />
                        <div className='projectbreif-container'>
                            <h4>Employee Details Management</h4>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[0].para1}</p>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[0].para2}</p>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[0].para3}</p>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[0].para4}</p>
                           
                        </div>
                    </div>

                    <div className='projectdetail-container2'>
                        <img src={userform} height={500} width={500} />
                        <div className='projectbreif-container'>
                            <h4>User Form</h4>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[1].para1}</p>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[1].para2}</p>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[1].para3}</p>
                            <p><GiBarbedStar id='icon'/>{projectinfo.projectdetail[1].para4}</p>
                        </div>
                    </div>
                </div>

            </div>
        </Element>
    )
}

export default Project
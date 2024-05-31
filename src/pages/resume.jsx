import ProfilePic from '../assets/images/profilepic.jpg';

function currVitae() {
    return (
        <>
        <div>
        <img className='avatar' src={ProfilePic} width = '50%' height = '100%'/>
        <h1> Alexander Egerev </h1>
        <p> Computing and Informatics Specialist</p>
        </div>
 
        <div classname = 'experience'>
        <h1> EXPERIENCE </h1>
        <div>
        <h2> JRH Electronics, Swedesboro, NJ — IT Contractor </h2>
        <h3>September 2021 - Present</h3>
        <p> Started as an intern; after a six-month period, was hired as a contractor.</p>
            <li>Built e-commerce jrhelec.com e-commerce website based on WordPress, PHP, JavaScript, and 
                MySQL. </li>
            <li>Created Python APIs for getting data from vendors and pushing gathered data to the website.</li>
            <li>Participated in a data extraction process from the company's SAP system for the website.</li>
            <li>Wrote Excel VBA functions for exchanging data and creating files for uploading to the website.</li>
            <li> Uploading new materials to the website and updating existing materials with live data.</li>
        </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <div>
        <h2> eDataRun, Cherry Hill, NJ </h2>
        <h3>June 2016 - August 2020 </h3>
            <li>Assisted with developing an Android, Java-based, secured texting app in Google Play. </li>
        </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <h2> Cherry Hill Public Library, Cherry Hill, NJ — Volunteer Library Assistant </h2>
        <h3> June 2015 - August 2015 </h3>
            <li>Updated library database with customer information. </li>
            <li>Responded to customer inquiries and assisted customers with prize redemption.</li>
        </div>

        <div classname = 'education'>
        <h1> EDUCATION </h1>
        <h2> Massachusets Institute of Technology, in collaboration with xPRO and Emeritus — 
            The MERN Stack Boot Camp certification </h2>
        <h3>May 2024 - Present</h3>
            <p>-----------------------------------------------------------------------------------------</p>

            <p>-----------------------------------------------------------------------------------------</p>
        <h2> University of Pennsylvania, College of Liberal and Professional Studies (LPS) — 
            Coding Boot Camp certification </h2>
        <h3>September 2023 - March 2024</h3>
            <p>-----------------------------------------------------------------------------------------</p>

            <p>-----------------------------------------------------------------------------------------</p>
        <h2> Rowan University, Glassboro, NJ — B.A. in Computing and Informatics </h2>
        <h3> Concentration in Mobile Development;  minor in Spanish </h3>
        <h4> September 2020 - May 2023 </h4>
        <h5> GPA: 3.97 </h5>
            <p>-----------------------------------------------------------------------------------------</p>
        <h2> Camden County College, Blackwood, NJ — 
             Associate in Applied Science - Computer Information Systems </h2>
        <h3> June 2016 - August 2020 </h3>
        <h4> September 2020 - May 2023 </h4>
        <h5> GPA: 3.79 </h5>
        <p>-----------------------------------------------------------------------------------------</p>
        <p>-----------------------------------------------------------------------------------------</p>
        </div>
        
        <div classname = 'skills'>
        <h1> SKILLS </h1>
        <li> Knowledge of business, programming, and application software for a business/organizational IT 
             environment</li>
        <li>Analysis and  design of information systems and database solutions </li>
        <li>Applying state-of-the-art programming techniques and application software to solve 
            business/organizational information systems issues </li>
        <p>-----------------------------------------------------------------------------------------</p>
        <p>-----------------------------------------------------------------------------------------</p>
        </div>

        <div classname = 'programming-languages'>
        <h1> PROGRAMMING LANGUAGES </h1>
        <li> Java </li>
        <li>C++ </li>
        <li>VBA </li>
        <li> Python </li>
        <li> Matlab </li>
        <li> R </li>
        <li> HTML5 </li>
        <li> CSS3 </li>
        <li> JavaScript </li>
        <li> jQuery </li>
        <li> Command Line </li>
        <li> API consumption </li>
        <li> Node.js server code </li>
        <li> MySQL </li>
        <li> React </li>
        <li> Github </li>
        <li> Progressive Web Applications </li>
        <p>-----------------------------------------------------------------------------------------</p>
        <p>-----------------------------------------------------------------------------------------</p>
        </div>

        <a href = "https://github.com/upennbootcamp23/my-portfolio/blob/main/src/assets/Egerev_Alexander_Resume2023.docx.pdf">
            VIEW FULL RESUME </a>
        </>
        
    )
};

export default currVitae;
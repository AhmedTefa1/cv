import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ofoqe.com" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ofoqe.com" target="_blank" rel="noreferrer"><h2>Ofoq Digital Solutions</h2></a>
                <p>The company website for Ofoq, a digital solutions agency offering web and mobile development, ERP and POS systems, and digital marketing, with Arabic/English support and light/dark themes.</p>
            </div>
            <div className="project">
                <a href="https://dexter-swart.vercel.app/academy/roboleap" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dexter-swart.vercel.app/academy/roboleap" target="_blank" rel="noreferrer"><h2>RoboLeap Academy</h2></a>
                <p>A website for a robotics and coding academy for kids aged 6 to 17, featuring age-based learning tracks, live courses, student success stories, and a filterable gallery of student projects, with Arabic/English support and light/dark themes.</p>
            </div>
            <div className="project">
                <a href="https://ofoqpos.ofoqe.com/" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ofoqpos.ofoqe.com/" target="_blank" rel="noreferrer"><h2>Ofoq POS</h2></a>
                <p>A cloud-based point-of-sale system for any type of store, covering sales, inventory, and real-time reports, with unlimited branches, automatic barcode generation and printing, and a customer loyalty program.</p>
            </div>
            <div className="project">
                <a href="https://ahmedtefa1.github.io/todoApp/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ahmedtefa1.github.io/todoApp/" target="_blank" rel="noreferrer"><h2>ToDo App</h2></a>
                <p>A fast, responsive to-do web app designed to help users organize tasks efficiently with a clean and intuitive interface.</p>
            </div>
            <div className="project">
                <a href="https://ahmedtefa1.github.io/smartshop/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ahmedtefa1.github.io/smartshop/" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>A fast and responsive e-commerce website built with React, offering a smooth user experience, efficient navigation, and modern UI design.</p>
            </div>
            <div className="project">
                <a href=" https://ahmedtefa1.github.io/bakery/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ahmedtefa1.github.io/bakery/" target="_blank" rel="noreferrer"><h2>bakery</h2></a>
                <p>A modern website designed to showcase the bakery’s products, highlight daily fresh offerings, and provide an easy, enjoyable browsing experience for customers.
</p>
            </div>
            <div className="project">
                <a href="https://ahmedtefa1.github.io/porfolio/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                {/* <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a> */}
                {/* <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p> */}
            </div>
            <div className="project">
                <a href=" https://ahmedtefa1.github.io/mealfi/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ahmedtefa1.github.io/mealfi/" target="_blank" rel="noreferrer"> <h2>mealfi</h2></a>
                 {<p>A healthy food platform offering nutritious, balanced meals made from fresh, high-quality ingredients to support a better lifestyle.</p> }
            </div>
            {/* <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>*/}
        </div> 
    </div>
    );
}

export default Project;
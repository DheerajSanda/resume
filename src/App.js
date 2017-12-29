import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">

                            <div className="wrapper">
       <div className="sidebar-wrapper">
           <div className="profile-container">
               <img className="profile" src="assets/images/profile.jpg" alt="image" />
               <h1 className="name">Dheeraj Sanda</h1>
               <h3 className="tagline">Front End Developer</h3>
           </div>

           <div className="contact-container container-block">
               <ul className="list-unstyled contact-list">
                   <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">dheeraj.sanda@gmail.com</a></li>
                   <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">+1(669) 246-3366</a></li>
                   <li className="linkedin"><i className="fa fa-linkedin"></i><a href="#" target="_blank">https://www.linkedin.com/in/dheeraj-sanda/</a></li>
                   <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">https://github.com/DheerajSanda</a></li>
               </ul>
           </div>
           <div className="education-container container-block">
               <h2 className="container-block-title">Education</h2>
               <div className="item">
                   <h4 className="degree">MSc in Engineering Management</h4>
                   <h5 className="meta">Lamar University</h5>
                   <div className="time">2016 - 2017</div>
               </div>
               <div className="item">
                   <h4 className="degree">BTech</h4>
                   <h5 className="meta">Koneru Lakshmaiah University</h5>
                   <div className="time">2009 - 2013</div>
               </div>
           </div>

           <div className="languages-container container-block">
               <h2 className="container-block-title">Languages</h2>
               <ul className="list-unstyled interests-list">
                   <li>Telugu <span className="lang-desc">(Native)</span></li>
                   <li>English <span className="lang-desc">(Professional)</span></li>
                   <li>Hindi <span className="lang-desc">(Professional)</span></li>
               </ul>
           </div>

           <div className="interests-container container-block">
               <h2 className="container-block-title">Interests</h2>
               <ul className="list-unstyled interests-list">
                   <li>Games</li>
                   <li>Movies</li>
                   <li>Cooking</li>
               </ul>
           </div>

       </div>

       <div className="main-wrapper">

           <section className="section summary-section">
               <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
               <div className="summary">
                   <p>Looking for a position to utilize my skills and expertise in an industry which offers professional growth while being innovative and flexible.</p>
               </div>
           </section>

           <section className="section experiences-section">
               <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

               <div className="item">
                   <div className="meta">
                       <div className="upper-row">
                           <h3 className="job-title">Front End Developer</h3>
                           <div className="time">June 2017 - Present</div>
                       </div>
                       <div className="company">Chatgrid Inc, Palo Alto</div>
                   </div>
                   <div className="details">
                       <p>Advocated Web interaction design best practices, with a focus on consistency and usability.
                          Assured that all user input is validated before submitting to back-end.
                          Built reusable code and libraries for future use.
                          Created and tested clean, precise multi-browser compatible code.
                          Designed and developed various components like Login form, Business info, User profile, Categories, Summary page etc.
                          Implemented Redux and moved functions into actions and reducers.
                          Ensured the technical feasibility of UI/UX design.
                          Implemented page designs in standards-compliant dynamic XHTML and CSS.
                          Optimized application for maximum speed and scalability.
                          Planned site/project design by clarifying goals.
                          </p>
                   </div>
               </div>

               <div className="item">
                   <div className="meta">
                       <div className="upper-row">
                           <h3 className="job-title">Quality Assurance Engineer</h3>
                           <div className="time">august 2013 – november 2015</div>
                       </div>
                       <div className="company">D Square Tech Labs, Hyderabad</div>
                   </div>
                   <div className="details">
                       <p>Performed system, unit, acceptance, regression, load and functional/performance testing on client applications using both automated and manual testing methods.
                          Identified, documented and reported bugs, errors, interoperability flaws and other issues within internal software application developed for the Company’s global user base.
                          Hands-on technology professional accustomed to working in complex, project-based environments. Multifaceted experience in QA software testing, software development and user-acceptance testing.
                          Demonstrated methodical, detail-oriented and thorough approach to all assignments while adhering to compressed timelines.
                          Consistently recognized for excellent problem-solving and analytical skills by programmers, project managers and supervisors.</p>

                   </div>
               </div>

           </section>

           {/*
             <section className="section projects-section">
                 <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                 <div className="intro">
                     <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                 </div>
                 <div className="item">
                     <span className="project-title"><a href="#hook">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

                 </div>
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> -
                     <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                 </div>
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                 </div>
                 <div className="item">
                     <span className="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                 </div>
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                 </div>
             </section>

             */}

           <section className="skills-section section">
               <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
               <div className="skillset">
                   <div className="item">
                       <h3 className="level-title">Javascript </h3>
                       <div className="level-bar">
                           <div className="level-bar-inner" data-level="98%">
                           </div>
                       </div>
                   </div>

                   <div className="item">
                       <h3 className="level-title">React &amp; Redux</h3>
                       <div className="level-bar">
                           <div className="level-bar-inner" data-level="98%">
                           </div>
                       </div>
                   </div>

                   <div className="item">
                       <h3 className="level-title">HTML5 &amp; CSS</h3>
                       <div className="level-bar">
                           <div className="level-bar-inner" data-level="98%">
                           </div>
                       </div>
                   </div>

                   <div className="item">
                       <h3 className="level-title">Java</h3>
                       <div className="level-bar">
                           <div className="level-bar-inner" data-level="95%">
                           </div>
                       </div>
                   </div>

                   <div className="item">
                       <h3 className="level-title">Selenium</h3>
                       <div className="level-bar">
                           <div className="level-bar-inner" data-level="85%">
                           </div>
                       </div>
                   </div>

                   <div className="item">
                       <h3 className="level-title">Sketch &amp; Photoshop</h3>
                       <div className="level-bar">
                           <div className="level-bar-inner" data-level="60%">
                           </div>
                       </div>
                   </div>

               </div>
           </section>

       </div>
</div>
      </div>
    );
  }
}

export default App;

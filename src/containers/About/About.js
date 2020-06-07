import React from "react";
import Info from "../../components/Info/Info";
import SkillTable from "../../components/SkillTable/SkillTable";
const About = () => {
  return (
    <article>
      <Info title="About me">
        <p>
          I consider myself a 'forever student' - never stop improving my skills, knowledge and overcome my weaknesses. I am highly
          motivated to get new experiences, grow in my professional and personal life. I am ready to join a team and share my experiences,
          good attitude and challenges with new colleagues.
        </p>
        <SkillTable />
      </Info>
      <Info title="Work">
        <p>
          The most interesting experience I acquired is my current job in Brazil as System Developer. In a short amount of time I had to
          learn portuguese and all technologies needed for web development. After some time I was assigned to create the mobile application
          for our clients, that was the moment I got to know React Native technology and got interested in React.js and frontend
          development. Before that I worked few months as Junior SAP Consultant, where I had opportunity to work in an international team.
        </p>
      </Info>
      <Info title="Education">
        <p>
          I graduated in Applied Mathematics at Wroclaw University of Science and Techonology (Poland) which I finished with Master of
          Science degree. The studies helped me to develop analytical and logical skills and I also learned how to acquire the knowledge in
          a fast way. During that time I have been an active student, taking part in extra activities, such as being a member of the
          Scientific Circle of Financial Engineering, where after some time I became a chairman of this organization and led the biggest
          student project in the Department of Mathemtics - Polish Nationwide Mathematical Conference "OMatKo!!!". I also spent one semester
          abroad in Portugal, where I improved my english and communication skills.
        </p>
      </Info>
    </article>
  );
};

export default About;

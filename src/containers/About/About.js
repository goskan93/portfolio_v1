import React from "react";
import Info from "../../components/Info/Info";
import SkillTable from "../../components/SkillTable/SkillTable";
const About = () => {
  return (
    <article>
      <Info title="About me">
        <p>
          I consider myself as 'forever student' - never stop imporving my skills, knowledge and overcome my weaknesses. I am highly
          motivated to get new experience, grown in my professional and personal life. I am ready to join the team, and share my experience,
          good attitude and challenges with new collegues.
        </p>
        <SkillTable />
      </Info>
      <Info title="Work">
        <p>
          The most interesting experience I acquired in my current job in Brazil as System Developer (web application). In a short amount of
          time I had to learn portuguese and all technologies needed for web development. After some time I was assigned to create the
          mobile application for our clients, and that was the moment I got know React Native technology, and got interested in React.js and
          frontend development. Before that, I worked few months as Junior SAP Developer, where I had opportunity to work in an
          international team.
        </p>
      </Info>
      <Info title="Education">
        <p>
          I graduated my studies in Applied Mathematics in Wroclaw University of Science and Techonology (Poland) which I finished with
          Master of Science degree. The studies helped me to develop analytical and logical skills and I also learned how to acquire the
          knowledge in a fast way. During that time I have been an active student, that took part in extra activities, such as being a part
          of scientific circle of FInancial Engineering where after some time, I became a chairman of this organization and lead the biggest
          student project in the Department of Mathemtics - Polish Nationwide Mathematical Conference "OMatKo!!!". I also spent one semester
          abroad in Portugal where I improve my english and communication skills.
        </p>
      </Info>
    </article>
  );
};

export default About;

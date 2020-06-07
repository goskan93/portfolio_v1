import React from "react";
import "./SkillTable.css";
const SkillTable = () => {
  return (
    <div className="Table-Container">
      <table className="Skill-Table">
        <thead>
          <tr>
            <th>I worked with</th>
            <th>I want to also work with</th>
            <th>I am currently learning</th>
            <th>I want to learn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML/CSS/JS</td>
            <td>
              <span>React.js</span>
            </td>
            <td>SCSS</td>
            <td>GraphQL</td>
          </tr>
          <tr>
            <td>React Native/Redux</td>
            <td></td>
            <td>Jest/Enzyme</td>
            <td>MongoDB</td>
          </tr>
          <tr>
            <td>C#/Python</td>
            <td></td>
            <td>Typescript</td>
            <td>Webpack</td>
          </tr>
          <tr>
            <td>MSSQL</td>
            <td></td>
            <td></td>
            <td>...and more!</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillTable;

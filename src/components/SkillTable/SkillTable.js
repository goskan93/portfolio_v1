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
            <th>I currently learn</th>
            <th>I want to learn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML/CSS/JS</td>
            <td>React.js</td>
            <td>SCSS</td>
            <td>node.js</td>
          </tr>
          <tr>
            <td>C#/Python</td>
            <td></td>
            <td>Jest/Enzyme</td>
            <td>MongoDB</td>
          </tr>
          <tr>
            <td>React Native/Redux</td>
            <td></td>
            <td></td>
            <td>GraphQL</td>
          </tr>
          <tr>
            <td>MSSQL</td>
            <td></td>
            <td></td>
            <td>...and more!</td>
          </tr>

          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillTable;

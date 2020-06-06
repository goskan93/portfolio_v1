import React, { useState } from "react";
import Layout from "../Layout/Layout";
import About from "../About/About";
import Main from "../Main/Main";
const Home = () => {
  const [section, setSection] = useState(About);

  const sectionHandler = (section) => {
    setSection(section);
  };

  return (
    <Layout click={sectionHandler}>
      <Main />
      {section}
    </Layout>
  );
};

export default Home;

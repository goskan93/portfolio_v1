import React, { useState } from "react";
import Layout from "../Layout/Layout";
import About from "../About/About";

const Home = () => {
  const [section, setSection] = useState(About);

  const sectionHandler = (section) => {
    setSection(section);
  };

  return (
    <Layout click={sectionHandler}>
      <section>Photo and info</section>
      {section}
    </Layout>
  );
};

export default Home;

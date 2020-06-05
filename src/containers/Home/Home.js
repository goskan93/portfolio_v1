import React, { useState } from "react";
import Layout from "../Layout/Layout";

const Home = () => {
  const [section, setSection] = useState(About);

  const sectionHandler = (section) => {
    setSection(section);
  };

  return (
    <Layout click={sectionHandler}>
      {section}
      {/* <section>Photo and info</section>
      <section>
        <article>About</article>
        <article>Projects</article>
        <article>CV</article>
      </section> */}
    </Layout>
  );
};

export default Home;

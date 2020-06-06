import recipesGif from "./recipes-app.gif";
import guessNumberGif from "./guess-number-app.gif";

export default [
  {
    title: "Curriculum Vitae",
    description: "Create your own CV with ready template! ",
    image: "",
    codeUrl: "https://github.com/goskan93/curriculum-vitae",
    projectUrl: "https://goskan93.github.io/curriculum-vitae/",
    technologies: ["react", "redux", "materialUI"],
  },
  {
    title: "Playground",
    description: "Play online for free.",
    image: "",
    codeUrl: "https://github.com/goskan93/playground",
    projectUrl: "",
    technologies: ["react", "react-router"],
  },
  {
    title: "Recipes",
    description: "Find the best recipes from all over the world.",
    image: recipesGif,
    codeUrl: "https://github.com/goskan93/recipes-app",
    projectUrl: "https://expo.io/@goskan93/meal-app?release-channel=recipes-app",
    technologies: ["expo", "react-native", "redux", "react-navigation"],
  },
  {
    title: "Guess the number app",
    description: "Let your opponent guess the number.",
    image: guessNumberGif,
    codeUrl: "https://github.com/goskan93/guess-number-app",
    projectUrl: "https://expo.io/@goskan93/guess-number-app?release-channel=guess-number-app",
    technologies: ["expo", "react-native"],
  },
];

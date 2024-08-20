import React, { useEffect } from "react";
import "../assets/css/styles.css";
import CVwork from "./CVwork";
import CVschool from "./CVschool";
import CVskills from "./CVothers/CVskills";
import CVleft from "./CVothers/CVleft";
import CVmenu from "./CVmenu";

function CVmain() {
  // Function to toggle dark/light theme
  const toggleTheme = () => {
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
      );
    }

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  // Add event listener directly in the component
  useEffect(() => {
    const themeButton = document.getElementById("theme-button");
    themeButton.addEventListener("click", toggleTheme);

    // Cleanup event listener when the component unmounts
    return () => {
      themeButton.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <>
      <CVmenu />

      <div className="Main">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <CVleft />
          </div>
          <div className="resume__right">
            <CVschool />
            <CVwork />
            <CVskills />
          </div>
        </div>
      </div>
    </>
  );
}

export default CVmain;

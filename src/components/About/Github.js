import React from "react";
import { GitHubCalendar } from "github-contribution-calendar";



function Github() {
    const my_theme = {
      noContributions: "rgba(190, 130, 230, 0.2)",
      low: "#8E5BB7",  // Deep vibrant purple
      moderate: "#9D5FDB",  // Vivid medium purple
      high: "#E0569E",  // Bright magenta
      veryHigh: "#F3794A",
      showTotalContributions:true  // Bright coral orange
        
    }

  return (
    <div className="App">
         <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
        <GitHubCalendar 
        username={process.env.REACT_APP_GITHUB_USERNAME}
        token={process.env.REACT_APP_GITHUB_TOKEN}
         theme="forest"
        // theme="custom" // must be specified for custom theme to be applied 
        // customTheme={my_theme}
        showTotalContributions={true}
        background={"##110d1a"}
        labelColor = {"white"}
        titleColor = {"white"} />
    </div>
  );
}

export default Github;
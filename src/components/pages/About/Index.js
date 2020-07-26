import React from "react";
import Info from "../../Info"
import "./style.css";
import Image from "./AlexSaiyan.jpg";

function About() {
  const text = `Aleks Saiyan was born in Yerevan, Armenia. He moved to the United States in 1998. He graduated with a Bachelor degree in Business with emphasis on Finance. He has been working in real estate industry since 2012. He has been working for an appraisal management
    company for the past 5 years.`

  return ( 
    
    <body>
      <Info 
        title={"About Me"}
        imageUrl={Image}
        text={`Aleks Saiyan was born in Yerevan, Armenia. He moved to the United States in 1998. He graduated with a Bachelor degree in Business with emphasis on Finance. He has been working in real estate industry since 2012. He has been working for an appraisal management
        company for the past 5 years.`}
        links={[
          {
            label: "Github",
            url: "https://github.com/Anverch",
          },
          {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/aleksandr-saiyan-3b60445a/",
          },
          {
            label: "Resume",
            url: "./assets/images/ASG.pdf",
          }
        ]
          
        }
      />
    </body>
  );
}

export default About;

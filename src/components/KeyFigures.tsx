import React from "react";
import data from "../json/keyFigures.json"
// Defining the dataypes of the data used
type FigureData = {
      figure: string;
      description: string;
  };

function KeyFigures(){
    
    return (
        <div className="figures-sec">
            <p>Key Figures</p>
        <div className="figures-grid-sec">
            
            {/* Mapping the json data and display the data */}
           {data.map((item: FigureData) => (
          <div className="figure-slot">
            <p>{item.figure}</p>
            <p>{item.description}</p>
          </div>
        ))} 
            
        
    </div>
    </div>
    )
};
export default KeyFigures;
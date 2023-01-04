import React from "react";

import MemorialCards from "./memorialCards";

export default function Adopt() {


  // Use optional chaining to check if data exists and if it has an animals property. If not, return an empty array to use.


  return (
    <>
      <div className="shadow-lg card bg-light mb-3">
        <h1 className="card-header">Memorials header</h1>
        <p className="card-body">
            Memorials here
        </p>
        
      </div>
      
          {<MemorialCards/>}
        
        <div className="card-footer"></div>
        </>
  );
}

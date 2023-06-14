import React from "react";
import logoImagedark from "../logo/eqipo_logo.png";


const Logo = (props) => {
  return (
    <div {...props}>
      <img src={logoImagedark} alt="Logo" style={{height:"100px"}}/>
    </div>
  );
};

export default Logo;


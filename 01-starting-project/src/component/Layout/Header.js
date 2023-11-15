import React from "react";
import HeaderCardButton from "./HeaderCardButton";

import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>{props.title}</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="table full of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;

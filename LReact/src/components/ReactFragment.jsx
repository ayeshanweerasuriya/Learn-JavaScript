import React from "react";
import style from "./styles.module.css";

export function ReactFragment() {
  return (
    <React.Fragment>
      <p className={style.redText}>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </React.Fragment>
  );
}

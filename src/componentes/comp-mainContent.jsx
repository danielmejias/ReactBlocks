import React from "react";
import styles from "./comp-mainContent.module.css";
import { CompSub } from "../componentes/comp-subcontents";
import { CompAdv } from "../componentes/comp-advertisement";

export const CompMain = (props) => (
  <div className={styles.mainContent}>
    <CompSub />
    <CompSub />
    <CompSub />
    <CompAdv />
  </div>
);

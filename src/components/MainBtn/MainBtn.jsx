import React from "react";
import styles from './MainBtn.module.scss';
import { Button } from "antd";

const MainBtn = ({onClick, text}) => {
  return <Button className={styles.btn} onClick={onClick}>{text}</Button>;
};

export default MainBtn;

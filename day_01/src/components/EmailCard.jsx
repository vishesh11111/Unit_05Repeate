import React from "react";
import { useState } from "react";
import styles from "./css/EmailCard.module.css";

export const EmailCard = ({ id, image, name, email, phone, onDelete }) => {
  const [set, setset] = useState(true);
  return (
    <div
      onClick={() => {
        setset(!set);
      }}
      className={styles.main1}
    >
      <div className="main-2">
        {set ? (
          <div className={styles.main3}>
            <div className={styles.header}>
              <img src={image} alt="" />
            </div>
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
            <button className={styles.btn} onClick={() => onDelete(id)}>Delete</button>
          </div>
        ) : null}
        {set ? null : <h1>Contact Number : {phone}</h1>}
      </div>
    </div>
  );
};

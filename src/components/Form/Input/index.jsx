import React, { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <>
      <input className={styles.inputBox} ref={ref} {...rest} />
      {error ? <p className={styles.messageError}>{error.message}</p> : null}
    </>
  );
});

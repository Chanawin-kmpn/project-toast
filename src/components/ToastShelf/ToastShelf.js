import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
      {/* <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  );
}

export default React.memo(ToastShelf);

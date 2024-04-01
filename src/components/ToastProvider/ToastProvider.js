import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "Oh no!",
      variant: "error",
    },
    {
      id: crypto.randomUUID(),
      message: "Logged in",
      variant: "success",
    },
  ]);

  useEscapeKey(() => {
    setToasts([]);
  });

  function createNewToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    const nextToast = [...toasts, newToast];
    setToasts(nextToast);
  }
  function dissmissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, createNewToast, dissmissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

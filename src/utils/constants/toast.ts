import { Zoom } from "react-toastify";
import type { ToastOptions } from "react-toastify";

const TOAST_UI: ToastOptions = {
  position: "top-center",
  closeButton: false,
  autoClose: 3000,
  transition: Zoom,
  hideProgressBar: true,
  icon: false,
};

export { TOAST_UI };

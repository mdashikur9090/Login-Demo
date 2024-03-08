import { toast } from 'react-toastify';

const showToast = (type, message, options) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    ...options
  });
};

export const successToast = (message, options) => {
  showToast('success', message, options);
};

export const errorToast = (message, options) => {
  showToast('error', message, options);
};

export const infoToast = (message, options) => {
  showToast('info', message, options);
};

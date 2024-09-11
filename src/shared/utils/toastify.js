// src/utils/toastUtils.js
import { toast, Slide } from 'react-toastify'

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Slide,
  })
}

export const showErrorToast = (message) => {
  toast.error(message, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Slide,
  })
}

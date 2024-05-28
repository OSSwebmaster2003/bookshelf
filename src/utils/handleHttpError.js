import axios from "axios";
import { toast } from "react-toastify";

export const handleHttpError = (error) => {
  let errMsg;

  if (axios.isCancel(error)) {
    errMsg = `Reques Cancelled ${error.message}`;
  } else if (error.response) {
    const { status } = error.response;

    //! server error messages
    if (status >= 500) {
      errMsg = "Server Error";
    }

    //! login error messages
    else if (
      error?.response?.data?.username ||
      error?.response?.data?.password
    ) {
      errMsg = "Parol yoki loginda xatolik bor";
    }

    //! custom error messages
    else if (error.response.data.detail) {
      errMsg = error.response.data.detail;
    }

    //! non-field error messages
    else if (error?.response?.data?.non_field_errors) {
      errMsg = error.response.data.non_field_errors[0];
    }

    //! unauthorized error messages
    else if (status === 403) {
      errMsg = "Taqiqlangan";
    } else {
      errMsg = `${error.message}`;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errMsg =
        "Internetga ulanmagansiz, iltimos internetga ulanib qaytib harakat qilib ko'ring";
    } else {
      errMsg = `No response received. Status code: ${error.request.status}`;
    }
  } else {
    errMsg = `Error: ${error.message}`;
  }

  toast.error(errMsg, { theme: "colored", autoClose: false });
};

import { toast } from "react-toastify";

export const handleHttpSuccess = (res) => {
  switch (res.status) {
    case 201:
      toast.success("Muvaffaqiyatli yaratildi");
      break;
    case 202:
      toast.success("Mufavvaqiyatli o'zgartirildi");
      break;
    case 204:
      toast.success("Muvaffaqiyatli o'chirildi");
      break;
  }
};

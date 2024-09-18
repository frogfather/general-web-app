import { useAtom } from "jotai";
import { toastAtom } from "../../store/toast.js";

export const useToast = () => {
  const [_, setToast] = useAtom(toastAtom);
  return ({ timer = 3000, ...toast }) => {
    const id = Date.now() + Math.random();
    setToast((state) => {
      state.list = [...state.list, { id, timer, ...toast }];
    });
  };
};
import React from "react";
import { Icon } from "@iconify-icon/react";
import * as Toast from "@radix-ui/react-toast";
import { useAtom } from "jotai";
import { useEffect, useMemo, useRef } from "react";
import { toastAtom } from "../../store/toast.js";

const modes = {
  positive: { textColor: "text-positive", borderColor: "border-positive" },
  negative: { textColor: "text-negative", borderColor: "border-negative" },
  info: { textColor: "text-info", borderColor: "border-info" },
};

const SingleToast = ({
  id,
  open = true,
  title = "",
  subtitle = "",
  mode = "info",
  timer = 3000,
  infinite = false,
}) => {
  const [_, setToast] = useAtom(toastAtom);
  const timerRef = useRef();

  const removeToast = () => {
    setToast((state) => {
      state.list = state.list.filter((toast) => toast.id != id);
    });
    timerRef.current && clearTimeout(timerRef.current);
  };

  const setTimer = () => {
    timerRef.current = setTimeout(() => {
      removeToast();
      clearTimeout(timerRef.current);
    }, timer + 1000);
  };

  useEffect(() => {
    !infinite && setTimer();
  }, []);

  return (
    <Toast.Root
      className={`${modes[mode].borderColor}
      border
      border-accent/50
      bg-light
      dark:bg-dark
      rounded-md
      shadow-[hsl(206_22%_7%_/_35%)_0px_10px_
      38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
      p-[15px]
      grid
      [grid-template-areas:_'title_action'_'description_action']
      grid-cols-[auto_max-content]
      gap-x-[15px]
      items-center `}
      duration={Infinity}
    >
      <Toast.Title className={`font-bold ${modes[mode].textColor}`}>
        {title}
      </Toast.Title>
      <Toast.Description className="text-base">{subtitle}</Toast.Description>
      <Toast.Action className="[grid-area:_action]" asChild altText="Dismiss">
        <Toast.Close
          aria-label="Close"
          className={`border
            rounded-full
            h-8
            w-8
            flex justify-center items-center ${modes[mode].borderColor}`}
          onClick={removeToast}
        >
          <Icon
            icon="ph:x-thin"
            className={`text-xl ${modes[mode].textColor}`}
          />
        </Toast.Close>
      </Toast.Action>
    </Toast.Root>
  );
};

const Toaster = () => {
  const [{ list }] = useAtom(toastAtom);
  return (
    <Toast.Provider swipeDirection="right" className="toaster">
      {list.map((props, index) => (
        <SingleToast
          //@ts-ignore
          title={props.title || ""}
          subtitle={""}
          {...props}
          key={`toast-${index}`}
        />
      ))}
      <Toast.Viewport style={{ opacity: "99%" }} />
    </Toast.Provider>
  );
};
export default Toaster;
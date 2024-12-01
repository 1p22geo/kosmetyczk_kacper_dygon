import Image from "next/image";
import CloseDialogIcon from "@/app/admin-panel/close-dialog-icon.svg";
import React, { ReactNode, useRef, useImperativeHandle } from "react";
import "./admin-panel-dialog.css";

export interface AdminPanelDialogHandle {
  open: () => void;
}

function AdminPanelDialog(
  props: { children: ReactNode },
  ref: React.Ref<AdminPanelDialogHandle>,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialog.current?.showModal(),
  }));

  return (
    <dialog ref={dialog}>
      <button
        className="close-dialog-button"
        onClick={() => dialog.current.close()}
      >
        <Image src={CloseDialogIcon} alt="close dialog icon" />
      </button>
      {props.children}
    </dialog>
  );
}

export default React.forwardRef(AdminPanelDialog);

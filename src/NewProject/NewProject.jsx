import { useRef } from "react";

import Input from "../Input/Input";
import ErrorModal from "../Modal/ErrorModal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = desc.current.value;
    const enterDate = date.current.value;

    if (
      enterDate.trim() === "" ||
      enterDescription.trim() === "" ||
      enterTitle.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enterTitle,
      description: enterDescription,
      dueDate: enterDate,
    });
  }

  return (
    <>
      <ErrorModal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 mt-4">
          Invalid or incomplete values
        </h2>
      </ErrorModal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:big-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type={"text"} ref={title} label="Title" />
          <Input ref={desc} label="Description" isTextArea={true} />
          <Input type="date" ref={date} label="Due Date" />
        </div>
      </div>
    </>
  );
}

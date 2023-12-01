import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  function saveProjectData() {
    const enteredTitle = projectTitle.current.value;
    const enteredDescription = projectDescription.current.value;
    const enteredDueDate = projectDueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid input</h2>
        <p>Check your input nigga</p>
        <p>We only accept valid input nigga bitch!</p>
      </Modal>

      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={saveProjectData}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="">
          <Input type="text" label="Title" ref={projectTitle} />
          <Input label="Description" textarea ref={projectDescription} />
          <Input type="date" label="Due Date" ref={projectDueDate} />
        </div>
      </div>
    </>
  );
}

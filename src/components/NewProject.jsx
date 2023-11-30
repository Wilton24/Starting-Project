import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  function saveProjectData() {
    const enteredTitle = projectTitle.current.value;
    const enteredDescription = projectDescription.current.value;
    const enteredDueDate = projectDueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
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
        <Input label="Title" ref={projectTitle} />
        <Input label="Description" textarea ref={projectDescription} />
        <Input label="Due Date" ref={projectDueDate} />
      </div>
    </div>
  );
}

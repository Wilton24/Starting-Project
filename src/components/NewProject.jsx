import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div className="flex items-center gap-4">
        <Input
          label="Title"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <Input
          label="Description"
          textarea
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <Input
          label="Due Date"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
      </div>
    </div>
  );
}

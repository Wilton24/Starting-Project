import piktyur from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-6 text-center w-2/3">
      <img
        src={piktyur}
        alt="nota"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-stone">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Add New Project</Button>
      </p>
    </div>
  );
}

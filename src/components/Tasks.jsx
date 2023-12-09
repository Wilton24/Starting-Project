import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">This project has no tasks yet</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-sm bg-stone-100">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex justify-between my-4 bg-slate-50 p-2"
              >
                <span>{task.text}</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

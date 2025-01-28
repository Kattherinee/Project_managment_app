import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">There are no tasks yet</p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 p-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex my-4 justify-between items-center"
            >
              <span className="text-stone-700">{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div>

      <header key={tasks.id}>
        <h1>Tasks{tasks.length}</h1>
        <link to='/create-task'>
          Create Tasks
        </link>
      </header>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`./edit-tasks/:id${tasks.id}`}>Edit Tasks</Link>
        </div>
      ))}
    </div>
  );
}

export default TasksList;

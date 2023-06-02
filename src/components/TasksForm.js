import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTasks } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TasksForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.proventDefault();
    if (params.id) {
      dispatch(editTasks(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => tasks.id === params.id));
    }
  }, [tasks, params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Add a tasks"
        onChange={handleChange}
        value={tasks.title}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={tasks.description}></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default TasksForm;

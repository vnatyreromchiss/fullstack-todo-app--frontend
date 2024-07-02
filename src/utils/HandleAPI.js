import axios from "axios";

const baseUrl = "https://fullstack-todo-app-backend-2-t2hq.onrender.com"; //http://localhost:5001 for local access

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data--->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };

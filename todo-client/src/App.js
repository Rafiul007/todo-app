import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;

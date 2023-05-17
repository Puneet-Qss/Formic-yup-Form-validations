import "./App.css";
import FormicForm from "./FormicForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Registration Form</h3>
        <hr style={{  width: "300px", height: "0.2px" }}></hr>
        <FormicForm></FormicForm>
      </header>
    </div>
  );
}

export default App;

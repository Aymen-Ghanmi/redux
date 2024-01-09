
import './App.css';
import AddTask from './Components/AddTask';
import Navigation from './Components/Navigation';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
    <Navigation />
    <AddTask />
    <TodoList />
    </div>
  );
}

export default App;

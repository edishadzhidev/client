import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="links">
          <Link to="/add">Add User</Link>
          <Link to="/list">List Users</Link>
        </div>
      </header>
    </div>
  );
}

export default App;

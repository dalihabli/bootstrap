import './App.css';

function App() {
  return (
    <div className="App">
        <form className="row g-3">
         
         <h1>welcome</h1>
        
        <input type="text" className="form-control" id="inputPassword2" placeholder="nom"></input>
        <input type="text" className="form-control" id="inputPassword2" placeholder="prenom"></input>
        <input type="text" className="form-control" id="inputPassword2" placeholder="Email"></input>
        
        <input type="password" className="form-control" id="inputPassword2" placeholder="Password"></input>
        <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
        </form>
    </div>
  

  );
}

export default App;

import Btn from "./Btn";

function App() {
  return (
    <div className="App">
      <p>Welcome first React App!</p>
      <Btn big={true} click={true}/>
      <Btn banana={"confiirm!!!"} big={false} click={true}/>
    </div>
  );
}

export default App;

import Btn from "./Btn";
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <p className={styles.Title}>Welcome first React App!</p>
      <Btn big={true} click={true}/>
      <Btn banana={"confiirm!!!"} big={false} click={true}/>
    </div>
  );
}

export default App;

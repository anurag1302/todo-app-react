import './App.css';
import Title from "./components/title/Title";
import LineBreak from './components/linebreak/LineBreak';
import InputBox from './components/inputbox/InputBox';

function App() {
  return (
    <div className="App">
      <Title/>
      <LineBreak/>
      <InputBox />
    </div>
  );
}

export default App;

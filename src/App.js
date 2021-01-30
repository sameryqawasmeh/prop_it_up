import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Samer"}lastName={"Qawasmeh"}/>
      <PersonCard age={"Age 35"}/>
      <PersonCard hairColor={"hair color: Black"}/>
      


      <PersonCard firstName={"samar"}lastName={"Qawasmeh"}/>
      <PersonCard age={"Age 30"}/>
      <PersonCard hairColor={"hair color: brown"}/>




      <PersonCard firstName={"sondos"}lastName={"Qawasmeh"}/>
      <PersonCard age={"Age 20"}/>
      <PersonCard hairColor={"hair color: bronze"}/>
</div>
    
    
  );
}

export default App;

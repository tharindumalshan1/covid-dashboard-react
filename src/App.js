import "./App.css";

import Table  from "./Components/country";

function App() {
  //
  // const [countries , setCountries] = useState([]);
  //
  // //const [worldData, setWorldData] = useState([]);
  //
  // const noCountries = !countries || (countries && countries.length === 0);
  //
  // const getAllData = async () => {
  //   const response = await axios.get("/all").catch((error) =>{
  //     console.log("Error:", error);
  //   });
  //   console.log("Response world", response);
  //  //  if (response && response.data) {
  //  //    setWorldData(response.data);
  //  // }
  // };
  //
  // const getCountries = async () => {
  //   const response = await axios.get("/countries").catch((error) => {
  //     console.log("Error:", error);
  //   });
  //   console.log("Response:" , response);
  //   if (response && response.data) {
  //     setCountries(response.data);
  //   }
  // };
  //
  //
  // //OnComponentDidMount lifecycle
  // useEffect(() => {
  //   getCountries();
  // }, []);
  //
  // useEffect(() => {
  //   getAllData();
  // }, []);

  return (
      <div className="App">
        <h3>Covid Details By countries</h3>
        <Table/>
      </div>
  );
}

export default App;


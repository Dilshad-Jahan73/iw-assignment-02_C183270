import Header from "./components/Header";
import AllList from "./components/AllList";
import AddEntry from "./components/AddEntry";

function App() {
  return (
    <div>
      {/* Header  */}
      <Header />
      
      {/* <AddEntry /> */}
      <AddEntry />

      {/* <Listing /> */}
      <AllList />
      
    </div>
  );
}

export default App;
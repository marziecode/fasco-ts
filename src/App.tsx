import Home from "./components/Screen/Home";
import Navbar from "./components/Navbar/Navbar";
import DealsOfMonth from "./components/DealsOfMonth/DealsOfMonth";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  items-center">
        <Home />
        <DealsOfMonth />
      </div>
    </>
  );
}

export default App;

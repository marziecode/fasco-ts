import Home from "./components/Screen/Home";
import Navbar from "./components/Navbar/Navbar";
import DealsOfMonth from "./components/DealsOfMonth/DealsOfMonth";
import NewArrivals from "./components/NewArrivals/NewArrivals";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  items-center">
        <Home />
        <DealsOfMonth />
        <NewArrivals/>
      </div>
    </>
  );
}

export default App;

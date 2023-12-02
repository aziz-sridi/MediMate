import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Home/NavBar";
import { Banner } from "./Home/Banner";
import { MyMeds } from "./Home/MyMeds";
import { Appointments } from "./Home/Appointments";
import { Search} from "./Home/Search";
import { Footer } from "./Home/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MyMeds />
      <Appointments/>
      <Search />
      <Footer />
    </div>
  );
}

export default App;

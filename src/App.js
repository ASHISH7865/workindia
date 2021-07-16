
import './App.css';
import Header from './components/header/header';
import Companyname from './components/section1/CompanyName';
import Recharge from './components/section2/recharge';
import Footer from './components/section3/footer'
function App() {
  return (
    <div className="App">
      <Header />

      <Companyname />
      <hr />
      <Recharge />
      <hr />
      <Footer />
    </div>
  );
}

export default App;

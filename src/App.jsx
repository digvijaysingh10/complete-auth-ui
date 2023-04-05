import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Logo from './components/common/Logo';

function App() {
  return (
    <>
    <Logo />
    <Navbar />
    <Signin />
    <Signup />
    <Footer />
    </>
  );
}

export default App;

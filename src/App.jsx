import Header  from './components/Header';
import SideNav  from './components/SideNav';
import Home  from './components/Home';
import Footer  from './components/Footer';

export default function App() {

  return (
    <div className='wrapper'>
      <Header />
      <SideNav />
      <Home />
      <Footer />
    </div>
  )
}


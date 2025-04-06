import './index.css';
import Footer from './components/base/Footer';
import Header from './components/base/Header';
import PageRoutes from './pages';

function App() {
  return (
    <div className="flex flex-col min-h-screen [&>*:nth-child(2)]:flex-1">
      <Header />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;

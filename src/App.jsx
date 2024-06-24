// App.jsx
import './App.css';
import './index.css';

// component imports
import Sidebar from './components/Sidebar.jsx';

// sidebar url imports
import Home from './pages/Home.jsx';
import Invoices from './pages/Invoices.jsx';
import CreateInvoice from './pages/CreateInvoice.jsx';
import InvoiceSettings from './pages/InvoiceSettings.jsx';
import Forms from './pages/Forms.jsx';

// react-router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-4 w-full">
          <Routes>
            <Route 
              exact path="/" 
              element={ <Home/> }>
            </Route>
            <Route 
              exact path="/facturen" 
              element={ <Invoices/> }>
            </Route>
            <Route 
              exact path="/factuurmaken" 
              element={ <CreateInvoice/> }>
            </Route>
            <Route 
              exact path="/instellingen" 
              element={ <InvoiceSettings/> }>
            </Route>
            <Route 
              exact path="/formulieren" 
              element={ <Forms/> }>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Link } from 'react-router-dom';
import Logo from '../images/DoeEzGroenLogo.png';

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-sidebar-color sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <img src={Logo} alt="DoeEzGroen Logo" className="logo" />
        <ul className="space-y-2 font-medium mt-5">
          <li>
            <Link to="/" className="flex items-center p-2 text-text-color rounded-lg hover:bg-company-green group">
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/facturen" className="flex items-center p-2 text-text-color rounded-lg hover:bg-company-green group">
              <span className="ml-3">Facturen</span>
            </Link>
          </li>
          <li>
            <Link to="/factuurmaken" className="flex items-center p-2 text-text-color rounded-lg hover:bg-company-green group">
              <span className="ml-3">Factuur maken</span>
            </Link>
          </li> 
          <li>
            <Link to="/instellingen" className="flex items-center p-2 text-text-color rounded-lg hover:bg-company-green group">
              <span className="ml-3">Factuur instellingen</span>
            </Link>
          </li>
          <li>
            <Link to="/formulieren" className="flex items-center p-2 text-text-color rounded-lg hover:bg-company-green group">
              <span className="ml-3">Formulieren</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

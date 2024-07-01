import { useContext, useState } from 'react';
import InvoiceContext from '../components/InvoiceContext.jsx';
import Logo from '../images/DoeEzGroenLogo.png';

function InvoiceSettings() {
  const { settings, setSettings } = useContext(InvoiceContext);
  const [localSettings, setLocalSettings] = useState(settings); // Lokale state voor wijzigingen
  const [saved, setSaved] = useState(false); // State voor het bijhouden van opslagstatus

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings((prevSettings) => ({
      ...prevSettings,
      myDetails: {
        ...prevSettings.myDetails,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    setSettings(localSettings); // Pas de wijzigingen toe in de context
    setSaved(true); // Zet de saved state naar true na succesvol opslaan
    // Reset localSettings indien nodig
    // setLocalSettings(settings); // Uncomment als je de lokale state wilt resetten na opslaan
  };

  const handleCancel = () => {
    setLocalSettings(settings); // Herstel lokale wijzigingen naar de originele instellingen in context
  };

  return (
    <div className="mx-auto p-8">
      <div className="flex justify-between items-start mb-8">
        <div className="logo-section">
          <img src={Logo} alt="DoeEzGroen Logo" className="w-24 h-auto" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Mijn details</h2>
          <div className="space-y-2">
            <input
              name="companyName"
              value={localSettings.myDetails.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              name="name"
              value={localSettings.myDetails.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              name="email"
              value={localSettings.myDetails.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              name="phone"
              value={localSettings.myDetails.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              name="address"
              value={localSettings.myDetails.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              name="postalCode"
              value={localSettings.myDetails.postalCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Overige details</h2>
          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium mb-1">Betalingstermijn</label>
              <input
                type="text"
                value={localSettings.paymentTerm}
                onChange={(e) => setLocalSettings((prevSettings) => ({ ...prevSettings, paymentTerm: e.target.value }))}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Prijs per uur</label>
              <input
                type="text"
                value={localSettings.pricePerHour}
                onChange={(e) => setLocalSettings((prevSettings) => ({ ...prevSettings, pricePerHour: e.target.value }))}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
          Sla instellingen op
        </button>
        <button onClick={handleCancel} className="ml-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400">
          Annuleren
        </button>
      </div>

      {saved && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Wijzigingen opgeslagen!
        </div>
      )}
    </div>
  );
}

export default InvoiceSettings;

  import Logo from '../images/DoeEzGroenLogo.png';  

  function InvoiceSettings() {

    return (
      <div className="mx-auto p-8">
        <div className="flex justify-between items-start mb-8">
          <div className="logo-section">
            <img src={Logo} alt="DoeEzGroen Logo" className="w-24 h-auto" />
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold mb-2">Factuur</h1>
            <div className="flex items-center justify-end">
              <span className="mr-2">Factuurnummer #</span>
              <input type="text" value="1" readOnly className="border border-gray-300 rounded px-2 py-1 w-16 text-right" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Mijn details</h2>
            <div className="space-y-2">
              <input placeholder="DoeEzGroen" className="w-full border border-gray-300 rounded px-3 py-2" />
              <input placeholder="Ezra Boezeroen" className="w-full border border-gray-300 rounded px-3 py-2" />
              <input placeholder="info@doeezgroen.nl" className="w-full border border-gray-300 rounded px-3 py-2" />
              <input placeholder="Hoofstraat 1" className="w-full border border-gray-300 rounded px-3 py-2" />
              <input placeholder="9514 BA Emmen" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Overige details</h2>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium mb-1">Betalingstermijn</label>
                <input type="text" value="30 dagen" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Te betalen voor</label>
                <input type="date" value="2024-05-24" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Prijs per uur</label>
                <input type="text" value="21,50" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">BTW </label>
                <input type="text" value="21%" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
          >
            Sla instellingen op
          </button>
        </div>
      </div>
    )
  }

  export default InvoiceSettings

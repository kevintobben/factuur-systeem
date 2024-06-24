import { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import Logo from '../images/DoeEzGroenLogo.png';

const CreateInvoice = () => {

  const { toPDF, targetRef } = usePDF({filename: 'invoice.pdf'});
  const [items, setItems] = useState([
    { id: 1, description: 'Buitentegels gravel kleur 50 x 50 cm', quantity: 18, price: 14.50, total: 250 }
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      description: '',
      quantity: 0,
      price: 0,
      total: 0
    };
    setItems([...items, newItem]);
  };
  
  return (
    <div className="mx-auto p-8" ref={targetRef}>
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
          <h2 className="text-lg font-semibold mb-2">Klant details</h2>
          <div className="space-y-2">
            <input placeholder="Bedrijfsnaam" className="w-full border border-gray-300 rounded px-3 py-2" />
            <input placeholder="Contactpersoon" className="w-full border border-gray-300 rounded px-3 py-2" />
            <input placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2" />
            <input placeholder="Adres" className="w-full border border-gray-300 rounded px-3 py-2" />
            <input placeholder="Postcode + Woonplaats" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Factuurdatum</label>
            <input type="date" value="2024-04-24" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Betalingstermijn</label>
            <input type="text" value="30 dagen" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Te betalen voor</label>
            <input type="date" value="2024-05-24" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>
      </div>

      <table className="w-full mb-4">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Item</th>
            <th className="py-2 px-4 text-right">Aantal</th>
            <th className="py-2 px-4 text-right">Nettoprijs</th>
            <th className="py-2 px-4 text-right">Prijs</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={item.description}
                  className="w-full border-none"
                  placeholder="Item beschrijving"
                />
              </td>
              <td className="py-2 px-4 text-right">
                <input
                  type="number"
                  value={item.quantity}
                  className="w-full text-right border-none"
                />
              </td>
              <td className="py-2 px-4 text-right">
                <input
                  type="number"
                  value={item.price}
                  className="w-full text-right border-none"
                  step="0.01"
                />
              </td>
              <td className="py-2 px-4 text-right">€ {item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-4">
        <button
          onClick={addItem}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Item
        </button>
      </div>

      <div className="flex justify-end">
        <div className="w-1/3">
          <div className="flex justify-between mb-2">
            <span>Subtotaal</span>
            <span>€ 21,50</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>BTW (21%)</span>
            <span>€ 4,52</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Totaalbedrag</span>
            <span>€ 26,02</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => toPDF()}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
        >
          Maak PDF en sla PDF op
        </button>
      </div>
    </div>
  );
};

export default CreateInvoice;
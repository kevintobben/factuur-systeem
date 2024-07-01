import { useContext, useState } from 'react';
import { usePDF } from 'react-to-pdf';
import InvoiceContext from '../components/InvoiceContext.jsx';
import Logo from '../images/DoeEzGroenLogo.png';

const CreateInvoice = () => {
  const { settings } = useContext(InvoiceContext);
  const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });
  const [items, setItems] = useState([

  ]);

  const [invoiceDate, setInvoiceDate] = useState('');
  const calculateDueDate = () => {
    if (invoiceDate) {
      const dueDate = new Date(invoiceDate);
      dueDate.setDate(dueDate.getDate() + 30);
      return dueDate.toISOString().split('T')[0]; // Formateer als 'YYYY-MM-DD'
    }
    return '';
  };

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
  const updateItem = (id, field, value) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price') {
          updatedItem.total = updatedItem.quantity * updatedItem.price;
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const deleteItem = (id) => { 
    setItems(items.filter(item => item.id !== id));
  }

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
            <input
              placeholder="DoeEzGroen"
              value={settings.myDetails.companyName}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              placeholder="Ezra Boezeroen"
              value={settings.myDetails.name}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              placeholder="info@doeezgroen.nl"
              value={settings.myDetails.email}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              placeholder="Hoofstraat 1"
              value={settings.myDetails.address}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              placeholder="9514 BA Emmen"
              value={settings.myDetails.postalCode}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
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
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Betalingstermijn</label>
            <input type="text" value={settings.paymentTerm} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Te betalen voor</label>
            <input
              type="date"
              value={calculateDueDate()}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      <table className="w-full mb-4">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Item</th>
            <th className="py-2 px-4 text-right">Aantal</th>
            <th className="py-2 px-4 text-right">Prijs per</th>
            <th className="py-2 px-4 text-right">Prijs</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  className="w-full border-none"
                  placeholder="Item beschrijving"
                />
              </td>
              <td className="py-2 px-4 text-right">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                  className="w-full text-right border-none"
                />
              </td>
              <td className="py-2 px-4 text-right">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                  className="w-full text-right border-none"
                  step="0.01"
                />
              </td>
              <td className="py-2 px-4 text-right">€ {item.total.toFixed(2)}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </td>
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

const Invoices = () => {
  return (
    <div className="invoice-list-container p-6">
      <h1 className="text-2xl font-bold mb-4">Facturen</h1>
      <div className="overflow-x-auto">
        <table className="w-full mb-8 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Factuurnummer</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Naam</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Betalingsdatum</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Acties</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">#ALC-31524</td>
              <td className="border border-gray-300 px-4 py-2">Alfa-College</td>
              <td className="border border-gray-300 px-4 py-2">30-06-2024</td>
              <td className="border border-gray-300 px-4 py-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Betaald</span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2'>View</button>
                <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'>Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">#ALC-31524</td>
              <td className="border border-gray-300 px-4 py-2">Alfa-College</td>
              <td className="border border-gray-300 px-4 py-2">30-06-2024</td>
              <td className="border border-gray-300 px-4 py-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Betaald</span>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2'>View</button>
                <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
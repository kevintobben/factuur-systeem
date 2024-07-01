// InvoiceContext.js
import { createContext, useState } from 'react';

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    myDetails: {
      companyName: 'DoeEzGroen',
      name: 'Ezra DoeEzgGroen',
      email: 'info@doeezgroen.nl',
      phone: '+31 6 42867494',
      address: 'Hogeweg 5',
      postalCode: '9913 TA Eenum',
    },
    paymentTerm: '30 dagen',
    pricePerHour: '21,50',
  });

  return (
    <InvoiceContext.Provider value={{ settings, setSettings }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;

import { createContext, useContext, useState } from 'react';
import { requestBody } from './CustomHooks/constants';

export const RequestContext = createContext();

export const RequestContextProvider = ({ children }) => {
  const [requestData, setRequestData] = useState(requestBody); // Initial state

  return (
    <RequestContext.Provider value={{ requestData, setRequestData }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestContext = () => {
  return useContext(RequestContext);
};
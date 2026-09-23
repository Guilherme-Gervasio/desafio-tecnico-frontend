import { createContext, useState } from 'react';
 
export const ChamadosContext = createContext();
 
export function ChamadosProvider({ children }) {
  const [chamados, setChamados] = useState([]);
 
  return (
    <ChamadosContext.Provider value={{ chamados, setChamados }}>
      {children}
    </ChamadosContext.Provider>
  );
}
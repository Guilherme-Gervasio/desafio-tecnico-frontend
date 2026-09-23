/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
 
export const ChamadosContext = createContext({
  chamados: [],
  setChamados: () => {}
});
 
export function ChamadosProvider({ children }) {
  const [chamados, setChamados] = useState([]);
 
  return (
    <ChamadosContext.Provider value={{ chamados, setChamados }}>
      {children}
    </ChamadosContext.Provider>
  );
}
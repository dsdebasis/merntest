import EmpId from "./context.js";
import { useState } from "react";

const EmpProvider = function ({ children }) {
  
  let [emp, setEmp] = useState()
  setEmp(emp)
  return <EmpId.Provider value={{ emp, setEmp }}>
    {children}
  </EmpId.Provider>
}

export default EmpProvider
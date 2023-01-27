import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DataContext from './DataContext';
import Edit from './Edit';
import Table from './Table';

function App() {
  const [data, setData] = useState([{ name: '', id: 1 }, { name: '', id: 2 }]);
  return (
    <>
    {/* NavBar */}
    <Routes>
      {/* Home  */}
      <Route path='/' element={
         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table />
         </DataContext.Provider>
      }/>
      {/* Edit  */}
      <Route path='/editStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Edit/>
        </DataContext.Provider>
      }/>
    <Route path='/addStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Edit/>
        </DataContext.Provider>
      }/>
    </Routes>
    </>
  );
}

export default App;

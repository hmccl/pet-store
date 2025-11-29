import { Routes, Route } from 'react-router';
import ClientList from './pages/ClientList';
import AddClient from './pages/AddClient';
import ClientDetails from './pages/ClientDetails';
import AddPet from './pages/AddPet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientList />} />
      <Route path="/add-client" element={<AddClient />} />
      <Route path="/client/:id" element={<ClientDetails />} />
      <Route path="/client/:id/add-pet" element={<AddPet />} />
    </Routes>
  );
}

export default App

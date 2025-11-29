import { Link } from 'react-router';
import TableClient from '@/components/TableClient';
import { Button } from '@/components/ui/button';

function ClientList() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clientes</h1>
        <Link to="/add-client">
          <Button>Adicionar Cliente</Button>
        </Link>
      </div>
      <TableClient />
    </div>
  );
}

export default ClientList;

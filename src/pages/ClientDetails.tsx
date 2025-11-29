import { useParams, useNavigate, Link } from 'react-router';
import { useClients } from '@/contexts/ClientContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function ClientDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClient, deletePet } = useClients();
  const client = getClient(id!);

  if (!client) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="pt-6">
            <p>Cliente não encontrado.</p>
            <Button onClick={() => navigate('/')} className="mt-4">
              Voltar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleDeletePet = (petId: string) => {
    deletePet(client.id, petId);
  };

  const getPetTypeLabel = (type: string) => {
    const types: { [key: string]: string } = {
      dog: 'Cachorro',
      cat: 'Gato',
      bird: 'Pássaro',
      rabbit: 'Coelho',
      hamster: 'Hamster',
      fish: 'Peixe',
    };
    return types[type] || type;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => navigate('/')}>
          ← Voltar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Cliente</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <span className="font-semibold">Nome:</span> {client.name}
          </div>
          <div>
            <span className="font-semibold">Telefone:</span> {client.phone}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Pets do Cliente</CardTitle>
          <Link to={`/client/${client.id}/add-pet`}>
            <Button>Adicionar Pet</Button>
          </Link>
        </CardHeader>
        <CardContent>
          {client.pets.length === 0 ? (
            <p className="text-muted-foreground">Nenhum pet cadastrado.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Raça</TableHead>
                  <TableHead>Idade</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.pets.map((pet) => (
                  <TableRow key={pet.id}>
                    <TableCell className="font-medium">{pet.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{getPetTypeLabel(pet.type)}</Badge>
                    </TableCell>
                    <TableCell>{pet.breed}</TableCell>
                    <TableCell>
                      {pet.age} {pet.age === 1 ? 'ano' : 'anos'}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeletePet(pet.id)}
                      >
                        Remover
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ClientDetails;

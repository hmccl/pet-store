import { useState, type FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useClients } from '@/contexts/ClientContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function AddPet() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getClient, addPet } = useClients();
  const client = getClient(id!);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: 0,
  });

  if (!client) {
    return (
      <div className="max-w-2xl mx-auto p-6">
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addPet(client.id, formData);
    navigate(`/client/${client.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Adicionar Pet para {client.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Pet</Label>
              <Input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Tipo</Label>
              <Select
                required
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dog">Cachorro</SelectItem>
                  <SelectItem value="cat">Gato</SelectItem>
                  <SelectItem value="bird">Pássaro</SelectItem>
                  <SelectItem value="rabbit">Coelho</SelectItem>
                  <SelectItem value="hamster">Hamster</SelectItem>
                  <SelectItem value="fish">Peixe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="breed">Raça</Label>
              <Input
                type="text"
                id="breed"
                required
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Idade (anos)</Label>
              <Input
                type="number"
                id="age"
                required
                min="0"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit">Adicionar Pet</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(`/client/${client.id}`)}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddPet;

import { createContext, useContext, useState, type ReactNode } from 'react';
import dbData from '@/data/db.json';

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  pets: Pet[];
}

interface ClientContextType {
  clients: Client[];
  addClient: (client: Omit<Client, 'id'>) => void;
  updateClient: (id: string, client: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  getClient: (id: string) => Client | undefined;
  addPet: (clientId: string, pet: Omit<Pet, 'id'>) => void;
  updatePet: (clientId: string, petId: string, pet: Partial<Pet>) => void;
  deletePet: (clientId: string, petId: string) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<Client[]>(dbData.clients);

  const addClient = (client: Omit<Client, 'id'>) => {
    const newClient: Client = {
      ...client,
      id: String(Date.now()),
    };
    setClients((prev) => [...prev, newClient]);
  };

  const updateClient = (id: string, updatedData: Partial<Client>) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id ? { ...client, ...updatedData } : client
      )
    );
  };

  const deleteClient = (id: string) => {
    setClients((prev) => prev.filter((client) => client.id !== id));
  };

  const getClient = (id: string) => {
    return clients.find((client) => client.id === id);
  };

  const addPet = (clientId: string, pet: Omit<Pet, 'id'>) => {
    const newPet: Pet = {
      ...pet,
      id: String(Date.now()),
    };
    setClients((prev) =>
      prev.map((client) =>
        client.id === clientId
          ? { ...client, pets: [...client.pets, newPet] }
          : client
      )
    );
  };

  const updatePet = (clientId: string, petId: string, updatedPet: Partial<Pet>) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === clientId
          ? {
              ...client,
              pets: client.pets.map((pet) =>
                pet.id === petId ? { ...pet, ...updatedPet } : pet
              ),
            }
          : client
      )
    );
  };

  const deletePet = (clientId: string, petId: string) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === clientId
          ? { ...client, pets: client.pets.filter((pet) => pet.id !== petId) }
          : client
      )
    );
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        addClient,
        updateClient,
        deleteClient,
        getClient,
        addPet,
        updatePet,
        deletePet,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useClients() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClients must be used within a ClientProvider');
  }
  return context;
}

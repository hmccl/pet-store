import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const clients = [
    {
        id: "1",
        name: "Augusto",
        phone: "8888-8888",
        pet: "Rex",
    },
    {
        id: "2",
        name: "Beatriz",
        phone: "8899-9988",
        pet: "Garfield",
    },
    {
        id: "3",
        name: "Maria",
        phone: "1188-1188",
        pet: "Princesa",
    },
    {
        id: "4",
        name: "Fernando",
        phone: "2222-2222",
        pet: "Dylan",
    },

]

function TableClient() {
    return (
        <Table>
            <TableCaption>Lista de Clientes da Pet Store.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead className="text-right">Pet</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {clients.map((client) => (
                    <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.id}</TableCell>
                        <TableCell>{client.name}</TableCell>
                        <TableCell>{client.phone}</TableCell>
                        <TableCell className="text-right">{client.pet}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableClient;
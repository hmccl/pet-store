import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useClients } from "@/contexts/ClientContext"
import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function TableClient() {
    const { clients } = useClients();

    return (
        <Table>
            <TableCaption>Lista de Clientes da Pet Store.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>Pets</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {clients.map((client) => (
                    <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell>{client.phone}</TableCell>
                        <TableCell>
                            <Badge variant="secondary">
                                {client.pets.length} {client.pets.length === 1 ? 'pet' : 'pets'}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                            <Link to={`/client/${client.id}`}>
                                <Button variant="outline" size="sm">Ver Detalhes</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TableClient;
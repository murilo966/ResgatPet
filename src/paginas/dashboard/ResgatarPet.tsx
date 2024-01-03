import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/menu-lateral';
import Rodape from '../../components/rodape';
import { useTable, Column } from 'react-table';
import React from 'react';

interface Dados {
    id: number;
    sexo: string;
    cor: string;
    raca: string;
    acessorio: string;
    saude: string;
    endereco: string;
    foto: string;
}

function ResgatarPet() {

    const dados: Dados[] = React.useMemo(
        () => [
            { id: 1, status: 'Espera', sexo: 'Macho', cor: 'Branco', raca: 'poodle', acessorio: 'coleira', saude: 'assustado', endereco: 'rua tapajos 8-3', foto: 'foto' },
            { id: 2, status: 'Espera', sexo: 'Femea', cor: 'Preto', raca: 'pitbull', acessorio: 'focinheira', saude: 'ferido', endereco: 'rua caetes 9-4', foto: 'foto' },
            { id: 3, status: 'Espera', sexo: 'Femea', cor: 'Branco', raca: 'chow chow', acessorio: 'corrente-guia', saude: 'agressivo', endereco: 'rua tupi 1-3', foto: 'foto' },
            { id: 4, status: 'Espera', sexo: 'Macho', cor: 'Branco', raca: 'bulldog', acessorio: 'coleira', saude: 'alegre', endereco: 'rua bagnol 17-04', foto: 'foto' },
        ],
        []
    )

    const colunas: Column<Dados>[] = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Sexo', accessor: 'sexo' },
            { Header: 'Cor', accessor: 'cor' },
            { Header: 'Raca', accessor: 'raca' },
            { Header: 'Acessorio', accessor: 'acessorio' },
            { Header: 'Saude', accessor: 'saude' },
            { Header: 'Foto', accessor: 'foto' },
        ],
        []
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<Dados>({ columns: colunas, data: dados });

    return (
        <div>
            <Cabecalho />
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />

                    <div className='container-painel'>
                        <h1>Resgatar Pet</h1>

                        <div className="tabelas">
                            <table {...getTableProps()}>
                                {/* CABEÇALHO */}
                                <thead>
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>

                                {/* CORPO */}
                                <tbody {...getTableBodyProps()}>
                                    {rows.map(row => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => (
                                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export default ResgatarPet
import Cabecalho from '../../components/cabecalho';
import MenuLateral from '../../components/menu-lateral';
import Rodape from '../../components/rodape';
import { useTable, Column } from 'react-table';
import React from 'react';

interface Dados {
    id: number;
    nome: string;
    idade: number;
}

function ResgatarPet() {

    const dados: Dados[] = React.useMemo(
        () => [
            { id: 1, nome: 'André', idade: 25 },
            { id: 2, nome: 'Murilo', idade: 30 },
            { id: 3, nome: 'João', idade: 22 },
            { id: 4, nome: 'Helder', idade: 22 },
        ],
        []
    )

    const colunas: Column<Dados>[] = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Nome', accessor: 'nome' },
            { Header: 'Idade', accessor: 'idade' },
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
            <Rodape />
        </div>
    )
}
export default ResgatarPet
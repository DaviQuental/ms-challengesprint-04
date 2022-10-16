import React, { useState } from 'react';
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'

import { DebounceInputComponent, TbodyComponent, TheadComponent, useEmailQuery } from '../../common'
import { EmailTypes } from '../../services';

import { EmailStyles, TableWrapperStyles } from './Email.styles';
import { TableComponent } from '../../common/';
import { TitleComponent } from '../../common/components/title';
import { format } from 'date-fns';

const MOCK_EMAIL: EmailTypes[] = [
  {
    id: 200,
    from: "teste@gmail.com",
    to: "quental@gmail.com",
    subject: "E-mail teste",
    body: "Apenas um teste",
    sendDate: new Date(2022, 10, 12),
    status: "Entregue"
  },
  {
    id: 2,
    from: "zzzzzz.com",
    to: "zzzzzz@gmail.com",
    subject: "rfdfdfdfd",
    body: "cccccccccc",
    sendDate: new Date(2022, 8, 10),
    status: "Processando"
  }
]

const column = createColumnHelper<EmailTypes>()

const columns = [
  column.accessor('id', {
    header: () => 'ID',
    cell: info => info.renderValue(),
  }),
  column.accessor('from', {
    header: () => 'De',
    cell: info => info.renderValue(),
  }),
  column.accessor('to', {
    header: () => 'Para',
    cell: info => info.renderValue(),
  }),
  column.accessor('subject', {
    header: 'Assunto',
    cell: info => info.renderValue(),
  }),
  column.accessor('body', {
    header: 'Mensagem',
    cell: info => info.renderValue(),
  }),
  column.accessor('sendDate', {
    header: 'Data de envio',
    cell: info => info.renderValue()?.toString().split("T")[0]
  }),
  column.accessor('status', {
    header: 'Status',
    cell: info => info.renderValue(),
  }),
]

export const EmailPage: React.FC = () => {
  const { emails } = useEmailQuery();

  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data: emails,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const getFilteredRows = table.getRowModel().rows.filter(row => row.original.sendDate.toString().split("T")[0].includes(globalFilter))

  return (
    <EmailStyles>
      <TitleComponent>Listagem de E-mails</TitleComponent>
      <TableWrapperStyles>
        <DebounceInputComponent
          value={globalFilter}
          onChange={value => setGlobalFilter(String(value))}
          placeholder="Filtre pela data"
        />
        <TableComponent>
          <TheadComponent>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </TheadComponent>
          <TbodyComponent>
            {getFilteredRows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </TbodyComponent>
        </TableComponent>
      </TableWrapperStyles>
    </EmailStyles>
  );
}
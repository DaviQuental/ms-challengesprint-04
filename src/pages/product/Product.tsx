import React, { useState } from 'react';
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'

import { TableComponent, TbodyComponent, TheadComponent, useProductQuery } from '../../common';
import { ProductTypes } from '../../services';

import { ProductStyles, TableWrapperStyles } from './Product.styles';
import { TitleComponent } from '../../common/components/title';

const MOCK_PRODUCT: ProductTypes[] = [
  {
    id: 1,
    nome: "Pão integral",
    categoria: "ALIMENTACAO",
    preco: 10,
    quantidade: 3
  },
  {
    id: 2,
    nome: "Motadela",
    categoria: "ALIMENTACAO",
    preco: 10,
    quantidade: 5
  }
];

const column = createColumnHelper<ProductTypes>()

const columns = [
  column.accessor('id', {
    header: () => 'ID',
    cell: info => info.renderValue(),
  }),
  column.accessor('nome', {
    header: () => 'Nome',
    cell: info => info.renderValue(),
  }),
  column.accessor('categoria', {
    header: () => 'Categoria',
    cell: info => info.renderValue(),
  }),
  column.accessor('preco', {
    header: 'Preço',
    cell: info => info.renderValue(),
  }),
  column.accessor('quantidade', {
    header: 'Quantidade',
    cell: info => info.renderValue(),
  }),
]


export const ProductPage: React.FC = () => {
  const { products } = useProductQuery();

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <ProductStyles>
      <TitleComponent>Listagem de Produtos</TitleComponent>
      <TableWrapperStyles>
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
            {table.getRowModel().rows.map((row) => (
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
    </ProductStyles>
  );
}

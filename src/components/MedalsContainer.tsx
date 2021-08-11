import data from '../data.json'
import React from 'react'
import { ColumnsType } from 'antd/es/table'
import { Medals } from '../types/MedalsType'
import { Table } from 'antd'

const MedalsContainer = () => {
  const medals: Medals[] = data.medals
  const medalsWithTotal: Medals[] = medals.map((elt: Medals) => {
    let total: number = elt.medals.silver + elt.medals.bronze + elt.medals.gold
    return { total: total, ...elt }
  })
  const columns: ColumnsType<Medals> = [
    {
      title: 'Pays',
      dataIndex: 'country',
    },
    {
      title: 'Or',
      dataIndex: ['medals', 'gold'],
      sorter: {
        compare: (a: Medals, b: Medals) => a.medals.gold - b.medals.gold,
      },
    },
    {
      title: 'Argent',
      dataIndex: ['medals', 'silver'],
      sorter: {
        compare: (a: Medals, b: Medals) => a.medals.silver - b.medals.silver,
      },
    },
    {
      title: 'Bronze',
      dataIndex: ['medals', 'bronze'],
      sorter: {
        compare: (a: Medals, b: Medals) => a.medals.bronze - b.medals.bronze,
      },
    },
    {
      title: 'Total',
      dataIndex: 'total',
      sorter: {
        compare: (a: any, b: any) => a.total - b.total,
      },
      defaultSortOrder: 'descend',
    },
  ]
  return <Table columns={columns} dataSource={medalsWithTotal} pagination={false} />
}

export default MedalsContainer

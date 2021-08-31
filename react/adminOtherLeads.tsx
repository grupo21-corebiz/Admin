import React, { FC, useState, useEffect } from 'react'
import { Layout, PageBlock, Divider } from 'vtex.styleguide'
import api from './config/api'

interface IClient {
  id: number,
  name: string,
  email: string,
  phone: string,
  type: string
}

const AdminOtherLeads: FC = () => {
  const [clients, setClients] = useState(Array<IClient>())

  useEffect(() => {
    api.get('https://7n2b3cjwuf.execute-api.us-east-1.amazonaws.com/prod/leads')
    .then(res => {
      const clients = res.data.data.filter((client:IClient) => client.type === 'client')
      setClients(clients)
    })
  }, [])
  return (
    <Layout>
      <PageBlock title= "Clientes" variation="full">
        {clients.map((client:IClient) => {
          return (
            <>
              <p>Nome: {client.name}</p>
              <p>E-mail: {client.email}</p>
              <p>Telefone: {client.phone}</p>
              <Divider />
            </>
          )
        })}
      </PageBlock>
    </Layout>
  )
}

export default AdminOtherLeads

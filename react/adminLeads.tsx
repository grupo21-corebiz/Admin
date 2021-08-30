import React, { FC, useState, useEffect } from 'react'
import { Layout, PageBlock, Divider } from 'vtex.styleguide'
import api from './config/api'

interface ILead {
  id: number,
  name: string,
  email: string,
  phone: string,
  type: string
}

const AdminLeads: FC = () => {
  const [leads, setLeads] = useState(Array<ILead>())

  useEffect(() => {
    api.get('https://7n2b3cjwuf.execute-api.us-east-1.amazonaws.com/prod/leads')
    .then(res => {
      const prospectLeads = res.data.data.filter((lead:ILead) => lead.type === 'prospect')
      setLeads(prospectLeads)
    })
  }, [])

  return (
    <Layout>
      <PageBlock title= "Leads prospectos" variation="full">
        {leads.map((lead:ILead) => {
          return (
            <>
              <p>Nome: {lead.name}</p>
              <p>E-mail: {lead.email}</p>
              <p>Telefone: {lead.phone}</p>
              <Divider />
            </>
          )
        })}
      </PageBlock>
    </Layout>
  )
}

export default AdminLeads

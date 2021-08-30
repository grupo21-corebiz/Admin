import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'
import helloworld from './graphql/helloworld.gql'

const AdminLeads: FC = () => {
  const { data } = useQuery(helloworld)

  return (
    <Layout>
      <PageBlock title= "Título" subtitle="Alguma explicação" variation="full">
        <h1>Cadastro de leads</h1>
        <p>{data?.helloworld}</p>
      </PageBlock>
    </Layout>
  )
}

export default AdminLeads
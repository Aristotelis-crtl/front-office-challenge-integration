import Medals from './components/MedalsContainer'
import Nav from './components/Nav'
import NextEventContainer from './components/NextEventContainer'
import React from 'react'
import { Divider } from 'antd'
import { Layout } from 'antd'

function App() {
  const { Header, Content } = Layout

  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: 'silver' }}>
          <Nav />
        </Header>
        <Content style={{ backgroundColor: '#eeeeee', padding: '2% 8%' }}>
          <NextEventContainer />
          <Divider plain />
          <Medals />
        </Content>
      </Layout>
    </>
  )
}

export default App

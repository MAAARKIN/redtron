import React from 'react'

import { Layout, Row, Col, Divider } from 'antd';

const { Content, Footer } = Layout;

class App extends React.Component {
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ margin: '0 0px', height: '90vh' }}>
          <Row>
            <Col span={5} style={{backgroundColor: '#595959', padding: 24, height: '90vh'}}>
              <h1 style={{color: '#ffffff'}}>Menu</h1>
            </Col>
            <Col span={10} style={{backgroundColor: '#262626', padding: 24}}>
              <div className="site-layout-background" style={{ borderRight: '1px solid #434343', margin: '0px 0 10px 0', height: '100%'}}>
                <h1 style={{color: '#ffffff'}}>Keys</h1>
              </div>
            </Col>
            <Col span={9} style={{backgroundColor: '#262626', padding: 24, color: '#ffffff'}}>
              <h1 style={{color: '#ffffff'}}>Editor</h1>
            </Col>
          </Row>
          </Content>
          <Footer style={{ textAlign: 'center'}}>Redtron ©2020 Created by Marcos Filho</Footer>
      </Layout>
    );
  }
}

export default App

import { useState } from "react";
import {
    message,
    Button,
    InputNumber,
    Layout,
    Select,
    Space,
    Typography,
    Empty,
    Row,
    Col,
    Card,
  } from "antd";
  import Title from "antd/es/typography/Title";
  const { Header, Content } = Layout;
  const { useMessage } = message;
  
 

  export const HomePageView = () => {
    const [messageInstance, messageContext] = useMessage();

    const ButtonFunction = () => {
        let a = 0;
    
        if(a===0){
            messageInstance.success(`1`);
            a = 1;
        }
    
        if(a === 1){
            messageInstance.error(`0`);
            a = 0;
        }
    }

    return(
      <Layout  style={{ height: "100vh", overflow: "auto" }}>
        {messageContext}
        <Header style={{ color: "white" }}>Login Tracking</Header>
            <Content style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
            <Row gutter={16}>
                 <Col span={10} >
                    <Card title="HomePage" style={{ minHeight: 140 }}> 
                    <Row style={{marginBottom: 5 }}>
                        <Button onClick={ButtonFunction}>HomePage</Button>
                    </Row>
                    <Row>
                        <Typography.Text style={{color: 'red'}}>
                            {messageInstance.error}
                        </Typography.Text>
                        <Typography.Text style={{color: 'green'}}>
                            {messageInstance.success}
                        </Typography.Text>
                    </Row>
                    </Card>
                </Col>
            </Row>
         </Content>
      </Layout>
    )
}
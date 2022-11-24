import s from "./index.module.css";
import { Layout, Row, Col, Typography, Slider } from "antd";
import Table from "../Table/table";
import { useState } from "react";
// import styled from 'styled-components';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function AppAnt() {
  const [rows, setRows] = useState(10);
  return (
    <Layout>
      <Header className={s.header}>Header</Header>
      <Content>
        <Row>
          <Col xs={24} md={{ span: 16, offset: 4 }}>
            <Slider
              min={1}
              max={50}
              defaultValue={rows}
              onChange={(value) => {
                setRows(value);
              }}
            />
            <Title level={4}>Количество покемонов</Title>
            <Table rows={rows} />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default AppAnt;

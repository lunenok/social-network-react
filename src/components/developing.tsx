import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React from 'react';

export const Developing: React.FC = () => {
    return (
        <Content style={{background: 'white', padding: '16px'}}>
            <Row align='middle' justify='center'>
                <Col span='6'>
                    <Title level={3}>Раздел в разработке</Title>
                </Col>
            </Row>
        </Content>
    );
};
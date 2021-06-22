import { Row, } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import React from 'react';

export const FooterComponent: React.FC = () => {
    return (
        <Footer style={{background: 'white', padding: '16px', marginTop: '1px'}}>
            <Row align='middle' justify='center' >
                <Text>React practice</Text>
            </Row>
            
        </Footer>
    );
};
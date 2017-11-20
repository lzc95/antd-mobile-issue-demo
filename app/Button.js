import React from 'react';
import { WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Button as AntdButton } from 'antd';


class ToastExample extends React.Component {
    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                <Button type='warning' loading onClick={() => alert('antd-mobile')}>Antd-mobile Button</Button>
                <WhiteSpace />
                <AntdButton type='primary' loading onClick={() => alert('antd')}>Antd Button</AntdButton>
            </WingBlank>
        );
    }
}

export default ToastExample;

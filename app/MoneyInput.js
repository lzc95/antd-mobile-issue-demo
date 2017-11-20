import React from 'react';
import { List, InputItem } from 'antd-mobile';

class H5NumberInputExample extends React.Component {
    render() {
        return (
            <List>
                <InputItem type='money' placeholder='注意确定按钮颜色' clear>金额键盘</InputItem>
            </List>
        );
    }
}

export default H5NumberInputExample;

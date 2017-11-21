import React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function loadingToast() {
    Toast.loading('Loading...', 15, () => {
        console.log('Load complete !!!');
    });
}

class ToastExample extends React.Component {
    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                <Button onClick={loadingToast}>loading</Button>
            </WingBlank>
        );
    }
}

export default ToastExample;

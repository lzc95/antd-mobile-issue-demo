import React from 'react';
import { render } from 'react-dom';
import { Button, Toast } from 'antd-mobile';
import { Button as PCButton } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

function failToast() {
  Toast.fail('Load failed !!!', 1);
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Button>Mobile Button</Button>
                <PCButton>PC Button</PCButton>
                <Button onClick={failToast}>text only</Button>
            </div>
        );
    }
}

const hook = document.getElementById('app');
render(<App />, hook);

import React from 'react';
import { render } from 'react-dom';
// import { Button, Toast } from 'antd-mobile';
import { Button, Modal } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import 'antd/lib/style/v2-compatible-reset';

function failToast() {
    Toast.fail('Load failed !!!', 1);
}

class App extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <ul>
                    <li>dfsdf</li>
                    <li>dfsdf</li>
                    <li>dfsdf</li>
                    <li>dfsdf</li>
                    <li>dfsdf</li>
                </ul>

                {/*<Button>Mobile Button</Button>*/}
                {/*<Button onClick={failToast}>Toast fail</Button>*/}

                <Button type="primary" onClick={this.showModal}>Open Modal</Button>
                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

const hook = document.getElementById('app');
render(<App />, hook);

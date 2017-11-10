import React from 'react';
import { render } from 'react-dom';
import { Toast, Tabs, Drawer, WhiteSpace, List, NavBar, Icon, Button } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { injectGlobal } from 'styled-components';

function showToast() {
    Toast.info('This is a toast tips !!!', 1);
}

function renderTabBar(props) {
    return (
        <Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1, top: 50 }}><Tabs.DefaultTabBar {...props} /></div>}
        </Sticky>
    );
}
const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];

class App extends React.Component {
    state = {
        open: false,
    }

    componentDidMount() {
        injectGlobal`
            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            ::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #c3c3c3;
            }
        `;
    }


    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        const sidebar = (
            <List>
                {[...Array(20).keys()].map((i, index) => {
                    if (index === 0) {
                        return (<List.Item key={index}
                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                            multipleLine
                        >Category</List.Item>);
                    }
                    return (<List.Item key={index}
                        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                    >Category{index}</List.Item>);
                })}
            </List>
        );

        return (
            <div>
                <StickyContainer>
                    <Sticky>
                        {({ style }) => <div style={{ ...style, zIndex: 1 }}><NavBar icon={<Icon type="ellipsis" />} style={{ ...style, zIndex: 1 }} onLeftClick={this.onOpenChange}>Basic</NavBar></div>}
                    </Sticky>
                    <Drawer
                        style={{ minHeight: document.documentElement.clientHeight }}
                        enableDragHandle
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >
                        <WhiteSpace />
                            <Tabs tabs={tabs} initalPage={'t2'} renderTabBar={renderTabBar}>
                                {
                                    Array(3).fill(0).map((v, k) => (
                                        <div style={{ backgroundColor: '#fff' }} key={k}>
                                        <Button type='primary' onClick={showToast}>Toast</Button>
                                            {++k}{Array(200).fill(0).map((vv, key) => <p key={key}>{key}</p>)}
                                        </div>
                                    ))
                                }
                            </Tabs>
                        <WhiteSpace />
                        {Array(200).fill(0).map((vv, key) => <p key={key}>{key}</p>)}
                    </Drawer>
                </StickyContainer>
            </div>
        );
    }
}


const hook = document.getElementById('app');
render(<App />, hook);

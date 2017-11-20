import React from 'react';
import { Tabs, Drawer, WhiteSpace, List, NavBar, Icon, } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
    return (
        <Sticky>
            {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
        </Sticky>
    );
}
const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];

class TabsSticky extends React.Component {
    state = {
        open: false,
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
                    <Drawer
                        style={{ minHeight: document.documentElement.clientHeight - 45, top: 45 }}
                        enableDragHandle
                        sidebar={sidebar}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >
                        <Sticky>
                            {({ style }) => <div style={{ ...style, zIndex: 1, top: 50 }}><NavBar mode='light' icon={<Icon type="ellipsis" />} style={{ ...style, zIndex: 1 }} onLeftClick={this.onOpenChange}>Basic</NavBar></div>}
                        </Sticky>
                        <WhiteSpace />
                        <Tabs tabs={tabs} initalPage={'t2'} renderTabBar={renderTabBar}>
                            {
                                Array(3).fill(0).map((v, k) => (
                                    <div style={{ backgroundColor: '#fff' }} key={k}>
                                        {++k}{Array(200).fill(0).map((vv, key) => <p key={key}>{key}</p>)}
                                    </div>
                                ))
                            }
                        </Tabs>
                        <WhiteSpace />
                        {Array(80).fill(0).map((vv, key) => <p key={key}>{key}</p>)}
                    </Drawer>
                </StickyContainer>
            </div>
        );
    }
}

export default TabsSticky;

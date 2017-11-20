import React from 'react';
import { render } from 'react-dom';
import { NavBar, } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import TabsSticky from './TabsSticky';
import Toast from './Toast';
import ButtonExample from './Button';
import PopoverExample from './Popover';
import Version from '../package.json';

class App extends React.Component {

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

    render() {
        return (
            <div>
            <Router>
                <div>
                    <NavBar mode='dark'><Link to='/' style={{ color: 'white' }}>Back</Link></NavBar>
                    <Route
                        exact
                        path='/'
                        render={() => {
                            return (
                                <ListWrap>
                                    <li><Link to='/tabsSticky'>TabsSticky </Link></li>
                                    <li><Link to='/toast'>Toast 无法正常显示</Link></li>
                                    <li><Link to='/buttonLoading'>按钮 Loading 时，期望为 Disabled, 不可点击</Link></li>
                                    <li><Link to='/popover'>Popover 隐藏后 Dom 未删除</Link></li>
                                </ListWrap>
                            );
                        }}
                    />
                    <Route path='/tabsSticky' component={TabsSticky} />
                    <Route path='/toast' component={Toast} />
                    <Route path='/buttonLoading' component={ButtonExample} />
                    <Route path='/popover' component={PopoverExample} />
                    <VersionWrap>
                        {JSON.stringify(Version.dependencies, ['react', 'antd', 'antd-mobile'], 2)}
                    </VersionWrap>
                </div>
                </Router>
            </div>
        );
    }
}

const ListWrap = styled.ul`
    font-size: 16px;
    padding: 20px;
    list-style-type: decimal;
    > li {
        padding: 4px 0;
    }
`;

const VersionWrap = styled.pre`
    margin: 20px;
    background: #eee;
    padding: 20px;
    font-weight: bold;
    border-radius: 6px;
`;

const hook = document.getElementById('app');
render(<App />, hook);

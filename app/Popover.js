import React from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class PopoverExample extends React.Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        return (
            <div>
                <NavBar
                    mode='light'
                    rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                    <span style={{ marginRight: 5 }}>Help</span>
                                </Item>),
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
                >
                    返回再进入点击右上角查看 Dom
            </NavBar>
        </div>
        );
    }
}
export default PopoverExample;

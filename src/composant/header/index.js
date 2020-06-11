import React ,{ Component } from 'react';
import {
    HeaderWrapper, Logo,SearchWrapper,NavSearch,Contact
} from './style';

import { Input,message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';


const { Search } = Input;
const info=()=>{
    message.info("Mail:jiahua.tang@utt.fr")
}


const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#7B68EE',
    }}
  />
);

class Header extends Component{
    state = {
        ModalText: 'Mail: jiahua.tang@utt.fr',
        visible: false,
        confirmLoading: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      };
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };
    
    
    render(){
        const { visible, confirmLoading, ModalText } = this.state;
        return(
            <HeaderWrapper>
                <Logo/>
                <SearchWrapper>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={value => console.log(value)}
                    />
                </SearchWrapper>
                <Contact>
                    <div>
                        {/* <Button type="primary" onClick={this.showModal}>
                        Contact me
                        </Button>
                        <Modal
                        title=""
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        >
                        <p>{ModalText}</p>
                        </Modal> */}
                        <Button type="primary" onClick={info}>
                             Contact me
                        </Button>
                    </div>
                </Contact>
            </HeaderWrapper>
        )
    }
}

export default Header;



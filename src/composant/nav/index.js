import React ,{ Component } from 'react';
import { NavWrapper,Search } from './style';

import { Checkbox, Row, Col } from 'antd';

function onChange(checkedValues) {

  const filmSele=[];
  console.log('checked = ', checkedValues);
  
  console.log("sel = ",this.filmSele);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Nav extends Component{

    constructor(props){
        super(props);
        this.state={
            filmsSel : []
        }
    }

    render(){
        return(
        <NavWrapper>
            <Search>
                <br></br>
                Select
                <br></br>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                    <Row>
                        <Col span={8}>
                            <Checkbox value="Comedy">Comedy</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Action">Action</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Animation">Animation</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Horror">Horror</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="Sci-fi">Sci-fi</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="China">China</Checkbox>
                        </Col>
                    </Row>


                </Checkbox.Group>
            </Search>    
        </NavWrapper>


        )
    }

}

export default Nav;



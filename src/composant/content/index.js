import React ,{ Component,Fragment } from 'react';
import {ContentWrapper,CardWrapper,Title,Post,Close,InfoWrapper,Info,ToolWrapper,Pourcent} from './style';
import { Card, Button } from 'antd';
import { DislikeOutlined,LikeOutlined,CloseCircleOutlined} from '@ant-design/icons';
import Item from 'antd/lib/list/Item';
import { BackTop,Pagination } from "antd";
import {filmList} from './store/reducer';

const { Meta } = Card;

const filmlist=filmList;

class Content extends Component{

    constructor(props){
        super(props);
        this.state={
            list: filmlist
        }
        this.getFilm=this.getFilm.bind(this);
        // this.handleBtnClick=this.handleBtnClick.bind(this);
    };

    render() {
        return (
            <Fragment>
                <ContentWrapper>
                    <div>
                        {this.getFilm()}            
                    </div>
                    
                </ContentWrapper>
                <Pagination simple defaultCurrent={1} total={50} />
            </Fragment>
    )}

        getFilm(){
            return this.state.list.map((item,index)=>{
                // console.log(item,index)
                return(
                    <CardWrapper>
                        <Post src={item.imgUrl}></Post>
                        <InfoWrapper>
                            <Title> {item.title}</Title>
                            {/* <br></br> */}
                            <Info>
                                {"Categorie : "+item.catalogue}
                            <br></br>
                                {"Note : "+item.note}
                            </Info>
                            <ToolWrapper>
                                <Button shape="circle" icon={<LikeOutlined />} />
                                <Button shape="circle" icon={<DislikeOutlined />} />
                                {/* <div style="width=50px;"></div> */}
                           </ToolWrapper>
                           <Close>
                               <h6 style={{color:"grey" }}>I'm not intrested</h6>
                                {/* <Button  icon={<CloseCircleOutlined />}
                                         onClick={this.handleBtnClick(index)}
                                ></Button> */}
                                <button onClick={this.handleBtnClick.bind(this,index)}>I dont like</button>
                           </Close>
                           
                        </InfoWrapper>
                   </CardWrapper>
                )
            })
        }

        handleBtnClick(index){
            console.log(index,this.state.list);
            this.setState((prevState)=>{
                const list=[...prevState.list];
                list.splice(index,1);
                return {list}
            })
        }

}


export default Content;
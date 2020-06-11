import React ,{ Component } from 'react';
import {ContentWrapper} from './style';
import { Card, Col, Row } from 'antd';
import { DislikeOutlined,LikeOutlined } from '@ant-design/icons';
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
    };

    render() {
        // console.log(this.state.list[1].catalogue+'123')
        return (
            <ContentWrapper>
            <div>
                {this.getFilm()};            
            </div>
                <>
            <BackTop/>
            See the top
            <strong className="site-back-top-basic"></strong>
        </>
        <Pagination simple defaultCurrent={2} total={50} />
            </ContentWrapper>
        )}

        getFilm(){
            return filmlist.map((item,index)=>{
                return(
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.imgUrl}/>}
                    >
                     <Meta title={item.title} 
                            description={"note: "+item.note} />   
                    </Card>

                )
            })
        }

}


export default Content;



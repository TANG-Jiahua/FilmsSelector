import React ,{ Component } from 'react';
import {ContentWrapper,CardWrapper,Title,Post,InfoWrapper,Info} from './style';
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
        return (
            <ContentWrapper>
                <div>
                    {this.getFilm()}            
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
                        </InfoWrapper>
                   </CardWrapper>
                )
            })
        }

}


export default Content;
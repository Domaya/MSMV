import React from 'react';
import store from '../../store';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Descriptions, Badge, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
import '../../App.css';
import StarRatingComponent  from 'react-star-rating-component';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { Tab, Tabs } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const ReviewButton = styled.button`
font-weight: 600;
color: white;
border: 1px solid #6799FF;
padding: 0.5rem;
padding-bottom: 0.4rem;
cursor: pointer;
border-radius: 2px;
text-decoration: none;
transition: .2s all;
background:#6B66FF;

&:hover {
    background-color: white;
    color: #6799FF;
}
`;
const ReviewTitle = styled.div`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 600;
  font-family: 맑은고딕;
`;

const GrayBackground = styled.div`
    background: #eaeaea;
`;

const Background = styled.div`
    font-family: 맑은고딕;
`;

const Pad = styled.div`
    padding-top: 30px; 
    padding-left: 30px; 
    padding-right: 30px; 
    padding-bottom: 30px; 
 
`;
const ComLeft = styled.div`
    text-align: left;
`;


//현정
const ThemovieTitle = styled.div`
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    font-size:30px;
`;
const MovieElement = styled.div`
    text-align: justify;
    padding:10px;
    
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;
const MyImage = styled.img`
    margin:auto;
    padding:10px;
    width:550px;
`;

const MyPageLink = styled(Link)`
  &:hover {
    color: darkred;
  }
`;
const Font = styled.div`
  font-family: 'Gowun Dodum', sans-serif;
`;

const Spacer = styled.div`
    flex-grow: 0.01;
`;

const DetailPresenter = ({movieData, movieReviews, peoples, reviewOnChange, writeOnClick, updateClick, submitDeleteReview, starRating, onStarClick}) => {
  const director = [];
  const actor = [];

  for (let i = 0 ; i < peoples.length; i++) {
    let people = peoples[i];
    people.peopleJob = people.peopleJob.replace(/\n/g,' ');
    people.peopleJob = people.peopleJob.replace(/\t/g,'');

    if (people.peopleJob === "감독") {
      director.push(people);
    }
    else
      actor.push(people);
  }

  return (


      <GrayBackground>
        <GridContainer>
          <MyImage src={movieData.image} alt="movieData.title" />
          
          <MovieElement>
            <ThemovieTitle>{movieData.title}</ThemovieTitle>
            
            관람등급 : {movieData.grade}<p>
            개봉 날짜 : {movieData.openDt}<p>
            장르 : {movieData.genres}<p>
            국가 : {movieData.country}<p>
            상영시간 : {movieData.runningTime}
            </p></p></p></p>            
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="줄거리">
                <MovieElement>{movieData.summary}</MovieElement>
              </Tab>
              <Tab eventKey="profile" title="제작진">
                ㅇㅏ직몰라
                
              </Tab>
              <Tab eventKey="contact" title="배우">
                얘도 몰라
              </Tab>
              <Tab eventKey="recommend" title="추천영화">
                해당 영화와 관련하여 추천하는 영화
              </Tab>
            </Tabs>
            </MovieElement>
        </GridContainer>
        


      

      {/* <br />
      
        <img src={movieData.image} alt="movieData.title"/>
      
      <br />
      <Background>
      <Descriptions title="영화 정보" bordered>
        <Descriptions.Item label="영화 제목" contentStyle={{ background: "white" }}>{movieData.title}</Descriptions.Item>
        <Descriptions.Item label="개봉 날짜" contentStyle={{ background: "white" }}>{movieData.openDt}</Descriptions.Item>
        <Descriptions.Item label="관람등급" contentStyle={{ background: "white" }}>{movieData.grade}</Descriptions.Item>
        <Descriptions.Item label="장르" contentStyle={{ background: "white" }}>{movieData.genres}</Descriptions.Item>
        <Descriptions.Item label="국가" contentStyle={{ background: "white" }}>{movieData.country}</Descriptions.Item>
        <Descriptions.Item label="상영시간" contentStyle={{ background: "white" }}>{movieData.runningTime}</Descriptions.Item>
        <Descriptions.Item label="줄거리" span={3} contentStyle={{ background: "white" }}>{movieData.summary}</Descriptions.Item>
        <Descriptions.Item label="감독" span={3} contentStyle={{ background: "white" }}>{director && director.map((people, index) => ( 
          <React.Fragment key={people.index}>
            
              <img src={people.peopleImage} alt={people.peopleName}/><br/>{people.peopleName}
              <p>{people.peopleJob}</p>
            
          </React.Fragment>
        ))}</Descriptions.Item>
        <Descriptions.Item label="배우" span={3} contentStyle={{ background: "white" }}>
        <Row gutter={[16,16]}>
          {actor && actor.map((people, index) => ( 
          <React.Fragment key={people.index}>
            <Col lg={3} md={6} xs={12}>
              <img style={{ width:'100%', height:'150px'}} src={people.peopleImage} alt={people.peopleName}/> {people.peopleName}
              <p>{people.peopleJob}</p>
            </Col>
          </React.Fragment>
        ))}
        
        </Row>
        </Descriptions.Item>
      </Descriptions>
      </Background> */}
      
      
      
    
    <div>
    <br />
    <ReviewTitle>○영화 리뷰○</ReviewTitle>
    <hr />
    <Pad>
      <Font>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={starRating.rating}
          onStarClick={onStarClick}
      />

      <form style={{ display: 'flex' }}>
        <textarea style={{ width: '80%', borderRadius: '2px' }}
          onChange={reviewOnChange}
          placeholder="리뷰를 입력해주세요">
        </textarea>
        <br />
        <ReviewButton style={{ width: '20%', height: '52px' }} onClick={writeOnClick}>작성</ReviewButton>
      </form>
      </Font>
      </Pad>
    
      
      
    </div>
    <Pad>
    <Font>
    {movieReviews && movieReviews.map((review, index) => ( 
      <Comment 
        actions={[
        <React.Fragment key={review.id}>
        <div>
          {store.getState().user ? (
            (store.getState().user.id === review.commenter) ? (
              <button type="button" id={review.id} onClick={submitDeleteReview}>리뷰 삭제하기</button>
              ) : (<p>{review.commenter}, {store.getState().user.id}</p>)
          ) : (<p></p>)}
          
        </div>
        </React.Fragment>
        ]}
        avatar={<Avatar src="https://beslow.co.kr/assets/img/mobile-float-mypage.png" width="25px" alt="image"/>}
        author={<Tooltip title="마이페이지 가기!"><MyPageLink to="/mypage">{review.nickname}</MyPageLink></Tooltip>}
      
        content={
            <ComLeft>        
              <br/>    
              평점: <StarRatingComponent 
                name="rate2" 
                editing={false}
                starCount={5}
                value={review.rate}
               />
               
               <br/>
               <br/>
               

               내용:  {review.contents}
               
            </ComLeft>
            
        
        }
      
      ><hr/>
      </Comment>
      
      
      
 ))}
    </Font>
    </Pad>
    </GrayBackground>
  

  
    
  )
}

export default DetailPresenter;
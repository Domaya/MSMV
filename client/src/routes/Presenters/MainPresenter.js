import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import {Nav} from 'react-bootstrap';
import '../../App.css';

// const Wrapper = styled.div`
    
// `;

const MainPage = styled.div`
  background-color: white;
  min-width:1190px;
`;
// origin background-color: #eaeaea;

// const MainDiv = styled.div`
  
// `;

// const SearchedDiv = styled.div`

// `;

// const BoxofficeDiv = styled.div`
//   display: inline-block;
// `;

const SwipeDiv = styled.div`
  padding-top: 25px;
`;

// const Boxoffice = styled.div`

//   display: flex;

//   width: 1300px;
//   background: #606060;
//   float: right;
//   list-style: none;
//   padding: 15px;
//   border-radius: 10px;
//   box-shadow: 0 15px 10px #000;
//   font-family: 'Noto Sans KR', sans-serif;
// `;

// const BoxofficeImg = styled.div`
//   display: inline-block;
  
//   width: 390px;
//   height: auto;
//   margin: 10px -90px 0px -90px;
// `;

// const BoxofficeTitle = styled.div`

//   text-decoration: none;
//   margin-bottom: 50px;
  
// `;

// const BannerPad = styled.div`
//     padding-left: 50px;
//     padding-right: 50px;
//     padding-bottom: 50px;
// `;

// const SearchButton = styled(Link)`
//   font-weight: 600;
//   background: white;
//   border: 1px black;
//   padding: 10px;
//   padding-bottom: 10px;
//   cursor: pointer;
//   border-radius: 2px;
//   text-decoration: none;
//   transition: .2s all;

//   &:hover {
//       background: lightblue;
//   }
// `;

const TitleDiv = styled.div`
  font-size: 35px;
  font-family: 'Jua', 'Nanum Gothic', sans-serif;
  padding-bottom: 20px;
  font-weight: 100;
`;

const SwipePad = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 20px;
    transition-duration: 0.5s;
`;


const NoMovieDiv = styled.div`
  margin-top : 10px;
  font-size: 20px;
`

const GenreNav = styled(Nav)`
  position: relative;
  bottom : 10px;
  & div { 
    font-size: 15px;
    margin: 10px;
    background-color: #C9C7FF;
    cursor: pointer;
    font-size: 18px;
    transition: .2s all;
    font-weight: 100;
    font-family: 'Jua', sans-serif;
    border-radius: 5px;
    &:hover {
      background: #E8E7FF;
    }
    &:focus-within {
      background: #E8E7FF;
    }
  }
`

const MovieImage = styled.img`
  border-radius: 5px;
`

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar])

const MainPresenter = ({topTenData, boxOfficeData, genreList, selectGenre}) => {

  return (
    <MainPage>
      <SwipeDiv>
          <TitleDiv>주간 인기 영화</TitleDiv>
            {topTenData.length ? <SwipePad>
              <Swiper
                className="banner"
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                navigation
                pagination={{ clickable: true }} 
                >
                {topTenData && topTenData.map((movie) => ( 
                <SwiperSlide key={movie.movieCd}> 
                  <Link to={`/Detail?code=${movie.movieCd}`}>
                    <MovieImage style={{ width:'auto', height:'100%'}} src={movie.image} alt={movie.title}/>
                  </Link>
                </SwiperSlide>
                ))}
                <br/>
                <br/>
              </Swiper>   
            </SwipePad> : <SwipePad>
                <SwiperSlide>
                  <NoMovieDiv>집계된 데이터가 없습니다.</NoMovieDiv>
                </SwiperSlide>
              </SwipePad>}
            
        </SwipeDiv>
      <SwipeDiv>
        <TitleDiv>최근 박스오피스 개봉영화</TitleDiv>
          <SwipePad>
            <Swiper
              className="banner"
              spaceBetween={10}
              slidesPerView={5}
              slidesPerGroup={5}
              navigation
              pagination={{ clickable: true }} 
              >
            
              {boxOfficeData && boxOfficeData.map((movie) => ( 
                <SwiperSlide key={movie.movieCd}>
                  <Link to={`/Detail?code=${movie.movieCd}`}>
                    <MovieImage style={{ width:'auto', height:'100%'}} src={movie.image} alt={movie.name}/>
                  </Link>
                </SwiperSlide>
              ))}
              <br/>
              <br/>
            </Swiper>   
          </SwipePad>
      </SwipeDiv>

     {/*  
        1. 드라마   2. 판타지   4. 공포     5. 로맨스
        6. 모험     7. 스릴러   8. 느와르   10. 다큐멘터리
        11. 코미디  12. 가족    13. 미스터리
        14. 전쟁    15. 애니메이션 
        16. 범죄    17. 뮤지컬  18. SF      19. 액션
     */ }
      <br/>
      <TitleDiv>장르별 영화</TitleDiv>
      <GenreNav className="justify-content-center">
        <GenreNav.Item>
          <GenreNav.Link value="1" onClick={selectGenre}>드라마</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="2" onClick={selectGenre}>판타지</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="4" onClick={selectGenre}>공포</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="5" onClick={selectGenre}>로맨스</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="6" onClick={selectGenre}>모험</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="7" onClick={selectGenre}>스릴러</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="11" onClick={selectGenre}>코미디</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="12" onClick={selectGenre}>가족</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="15" onClick={selectGenre}>애니메이션</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="18" onClick={selectGenre}>SF</GenreNav.Link>
        </GenreNav.Item>
        <GenreNav.Item>
          <GenreNav.Link value="19" onClick={selectGenre}>액션</GenreNav.Link>
        </GenreNav.Item>
      </GenreNav>
      
      <SwipeDiv>
        <SwipePad>
          <Swiper
            className="banner"
            spaceBetween={10}
            slidesPerView={5}
            slidesPerGroup={5}
            navigation
            pagination={{ clickable: true }} 
            >
            {genreList && genreList.map((movie) => ( 
                <SwiperSlide key={movie.code}>
                  <Link to={`/Detail?code=${movie.code}`}>
                    <MovieImage style={{ width:'auto', height:'100%'}} src={movie.image} alt={movie.name}/>
                  </Link>
                </SwiperSlide>
            ))}
            <br/>
            <br/>
          </Swiper>   
        </SwipePad>
      </SwipeDiv>
    
      {/* <BannerPad>
        <Swiper
            className="banner"
            spaceBetween={50}
            slidesPerView={1}
            
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }} 
            autoplay={{ delay: 3000 }}
            
            >
                <SwiperSlide> 
                  <div style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0)
                    39%,rgba(0,0,0,0)
                    41%,rgba(0,0,0,0.65)
                    100%),
                    url('https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'), #1c1c1c`,
                        height: '500px',
                        backgroundSize: '100%, cover',
                        backgroundPosition: 'center, center',
                        width: '100%',
                        position: 'relative',
                        marginTop: '50px'
                      }}>
                      <div>
                        <div style={{ position: 'absolute', maxWidth: '800px', bottom: '9rem', marginLeft: '20rem' }}>
                          <h2 style={{fontStyle: 'italic', fontSize:'30px', fontWeight: 'bold',color: 'white'}}> 무더운 여름 공기를 시원하게 해줄 공포영화를 원한다면? </h2>
                          <br/>
                          <p style={{ color: 'white', fontSize: '1rem' }}> 지금 바로 검색하러가기</p>
                          <SearchButton to="/Genre/4"><img src="https://beslow.co.kr/assets/img/arrow-foward.png" width="25px" alt=""/></SearchButton>
                        </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide> 
                  <div style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0)
                    39%,rgba(0,0,0,0)
                    41%,rgba(0,0,0,0.65)
                    100%),
                    url('https://images.unsplash.com/photo-1498747946579-bde604cb8f44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80'), #1c1c1c`,
                      height: '500px',
                      backgroundSize: '100%, cover',
                      backgroundPosition: 'center, center',
                      width: '100%',
                      position: 'relative',
                      marginTop: '50px'
                    }}>
                    <div>
                        <div style={{ position: 'absolute', maxWidth: '800px',  top: '50%', left: '50%', transform: 'translate( -50%, -50% )'  }}>
                            <h2 style={{  fontStyle: 'italic', fontSize:'30px', fontWeight: 'bold',color: 'white' }}> 장마를 잠시나마 잊게해줄<br/>  힐링영화를 원한다면? </h2>
                            <br/>
                            <p style={{ color: 'white', fontSize: '1rem' }}> 지금 바로 검색하러가기</p>
                            <SearchButton to="/Genre/6"><img src="https://beslow.co.kr/assets/img/arrow-foward.png" width="25px" alt=""/></SearchButton>
                          </div>
                      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide> 
                  <div style={{
                          background: `linear-gradient(to bottom, rgba(0,0,0,0)
                      39%,rgba(0,0,0,0)
                      41%,rgba(0,0,0,0.65)
                      100%),
                      url('https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80'), #1c1c1c`,
                          height: '500px',
                          backgroundSize: '100%, cover',
                          backgroundPosition: 'center, center',
                          width: '100%',
                          position: 'relative',
                          marginTop: '50px'
                      }}>
                    <div>
                      <div style={{ position: 'absolute', maxWidth: '800px', top: '50%', left: '50%', transform: 'translate( -50%, -50% )' }}>
                        <h2 style={{ fontStyle: 'italic', fontSize:'30px', fontWeight: 'bold', color: 'white' }}> 계속되는 폭염을 시원하게 날려줄<br/>  격투영화가 보고싶다면? </h2>
                        <br/>
                        <p style={{ color: 'white', fontSize: '1rem' }}> 지금 바로 검색하러가기</p>
                        <SearchButton to="/Genre/19"><img src="https://beslow.co.kr/assets/img/arrow-foward.png" width="25px" alt=""/></SearchButton>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
          </Swiper> 
        </BannerPad> */}
    </MainPage>
  );
};

export default MainPresenter;
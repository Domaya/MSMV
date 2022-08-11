# GladOS 졸업 팀 프로젝트 무슨무비 MSMV

네이버 영화 API로 영화 정보를 불러오고, 사용자 맞춤 영화 추천을 제공하는 웹 사이트





## 사용 기술
Back-end : Node.js + express, flask, MySQL

Front-end : React.js

```
pm2 start index.js        //server
npm run start             //client
```



### 메인페이지
![image](https://user-images.githubusercontent.com/51879052/184116437-81cc5d33-8367-47ba-8380-43f948fbca4c.png)
* 주간 검색 된 영화 Top 10 제공
* 박스오피스 개봉 영화 Top 10 제공
* 장르별 인기 영화 Top 10 제공

### 서치페이지
![image](https://user-images.githubusercontent.com/51879052/184116703-67dbbf03-b3b4-4022-b1c0-0a9aad82a2fd.png)
* 검색 결과 요약하여 나열
* 클릭 시 디테일 페이지로 이동

### 디테일페이지
![image](https://user-images.githubusercontent.com/51879052/184116918-c814bb8e-48f9-4c74-9936-ffbf2283cd79.png)
* 기본적인 영화 정보 제공
* 말뭉치 파싱으로 해당 영화와 비슷한 줄거리를 가진 영화 추천 목록 제공
* 유투브 해시태그 검색 링크
* 별점 및 리뷰 작성

### 개인추천페이지
![image](https://user-images.githubusercontent.com/51879052/184117099-b963fc70-c061-46ce-b2a7-2f540df090c4.png)
* 사용자로부터 영화 목록을 받아 유사도가 높은 추천 영화 반환

### OTT그룹찾기페이지
![image](https://user-images.githubusercontent.com/51879052/184117265-3ad2c84e-97aa-41fa-85a0-a34bbf322418.png)
* 플랫폼 별 그룹 찾기 기능 제공

### 마이페이지
![image](https://user-images.githubusercontent.com/51879052/184117374-c429bd74-5c3a-4d3c-b2ac-01fd83a698a2.png)
* 개인 정보 수정
* 내가 쓴 리뷰 모아보기



### 데이터베이스 구조
![Screenshot 2022-08-11 at 19 39 05](https://user-images.githubusercontent.com/51879052/184116208-c10f9d72-a78e-4fd2-aa8f-9a3800c22459.JPG)

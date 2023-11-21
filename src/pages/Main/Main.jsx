import React from 'react';
import { useQuery } from 'react-query';
import { getPapers } from '../../api/rollingPaper';
import { StMainSlider, StPaper, StPaperList, StName, StWrap } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

const Main = () => {
  const navigate = useNavigate();

  const {isLoading, isError, data} = useQuery("rollingPapers", getPapers);
  if (isLoading) return <div>로딩중...</div>
  if (isError) return <div>에러 오류</div>

  const myPageClick = (id) => {
    navigate(`/mypage/${id}`);
  }
  
  return (<>
    <StWrap>
      <StMainSlider>Main</StMainSlider>
      <StPaperList>
      {data?.map(rollingPaper => (
        <StPaper key={rollingPaper.id} onClick={() => myPageClick(rollingPaper.id)}>
          <p><StName>{rollingPaper.userName}</StName>님의 페이지</p>
          <p>{rollingPaper.bio}</p>
          </StPaper>
      ))}
      </StPaperList>
    </StWrap>
    </>
  );
};

export default Main;

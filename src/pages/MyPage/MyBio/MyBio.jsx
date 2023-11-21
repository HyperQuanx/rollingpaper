import React from 'react'
import { StBioWrap,StName,StBio } from './styles';


const MyBio = ({rollingPaper}) => {
  return (<StBioWrap>
    (MyBio 컴포넌트)
    <StName>(이름 or 사진) {rollingPaper?.userName} </StName>
    <StBio>(각자 자기소개) {rollingPaper?.bio} </StBio>
    </StBioWrap>
  )
}

export default MyBio
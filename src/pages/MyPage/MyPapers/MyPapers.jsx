import React, { useState } from 'react'
import { StInput, StPaperWrap,StPaper, StPaperBox } from './style'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addCmt } from '../../../api/rollingPaper';

const MyPapers = ({rollingPaper}) => {

  const [cmt, setCmt] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(addCmt, {
    onSuccess: () => {
      queryClient.invalidateQueries("rollingPapers");
    },
  });

const submitHandler = (event) => {
  event.preventDefault();

  // 빈칸 검사
  if (!cmt) {
    return alert("내용을 작성해주세요👼");
  }

  // 새로 추가하려는 newCmt
  // const newCmt = {
  //   ...rollingPaper,
  //     comments: [
  //       ...rollingPaper.comments,
  //       { comment: cmt }
  //     ],
  //   };
  const newCmt = {
    comments: cmt,
  };

    mutation.mutate(newCmt);

    setCmt('');
};


  return (<StPaperWrap>
    <div>MyPapers 컴포넌트</div>
    <form onSubmit={submitHandler}>
      <label>롤링페이퍼</label>
      <StInput label="comment" value={cmt} onChange={e => setCmt(e.target.value)}/>
      <button type="submit">작성</button>
    </form>
    <StPaperBox>{rollingPaper?.comments.map((item, index) => (
          <StPaper key={index}>{item.comment}</StPaper>
        ))}
    </StPaperBox>
    </StPaperWrap>
  )
}

export default MyPapers
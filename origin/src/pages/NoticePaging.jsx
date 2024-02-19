import React from 'react';

const NoticePaging = () => {
  return (
    <div className="paginate" id="board_paging">
      <a className='btn_prev_2 disable' href=""></a>
      <a className='btn_prev disable' href=""></a>
      <ol>
        <li><a href="" className='on'>1</a></li>
      </ol>
      <a className='btn_next disable' href=""></a>
      <a className='btn_next_2 disable' href=""></a>
    </div>
  );
};

export default NoticePaging;
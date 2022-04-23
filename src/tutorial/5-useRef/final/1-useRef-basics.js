import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // sử dụng refContainer sau khi đã gán ở bước useEffect
    // Ref -> Sử dụng gần giống như jQuery
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    // lấy DOM nodes mà đã đặt ref -> ở đây là thẻ input
    console.log(refContainer.current);
    // focus -> gán các thuộc tính của thẻ cho refContainer
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;

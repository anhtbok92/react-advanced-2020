import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // Khi bạn gọi các sự kiện cho một component như resize
    // Có thể gây leak-memory nếu không clean up
    // Ví dụ, bạn tạo 1 sự kiện scroll ở component A,
    // Sau đó nhảy qua component B mà chưa remove sự kiện ở component A,
    // Lúc này, sự kiện ở component A sẽ vẫn hoạt động và cộng dôn với sự kiện ở component B
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    // Chúng ta sẽ cần clean up nó khi navigate sang các component khác.
    // Tránh memory leak
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

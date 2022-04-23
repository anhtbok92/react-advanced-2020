// Viết kiểu này sẽ sinh ra lỗi -> vì truyền props nhưng không gọi trong element
// import React from "react";
// const Input = () => <input type="text" />;
// export default Input;

// Viết kiểu này sẽ sinh ra lỗi -> vì ko hiểu ref props lấy ở đâu
// import React from "react";
// const Input = () => <input type="text" ref={ref}/>;
// export default Input;

// Viết kiểu này thì OK vì sử dụng forwarRef
import React, { forwardRef } from "react";
const Input = (props, ref) => <input ref={ref} type="text" />;
export default forwardRef(Input);
/**
 * Ví dụ
 * Khi gõ input 3 lần thì sẽ hiển thị thông báo -> không đc click nữa
 * Sử dụng useRef để đếm số lần click vào button send
 * Khi click vào button send -> giá trị của sentMessage thay đổi -> nhưng ko làm re-render lại component
 */
import React, {useRef, useState} from 'react'
const UseRefNoRerender = () => {
    const [message, setMessage] = useState("")
    const sentMessage = useRef(0);

    const sendMessage = () => {
        if(sentMessage.current === 3){
            return alert("Message Limit Reached")
        }

        sentMessage.current += 1
        //code to handle sending message
    }

    return(
        <div>
            <input onChange = {(e) => setMessage(e.target.value)} value={message}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}
export default UseRefNoRerender
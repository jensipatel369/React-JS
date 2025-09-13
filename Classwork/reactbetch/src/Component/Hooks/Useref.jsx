import { useRef } from "react"

export default function Useref() {
    const userRef = useRef();
    const hanleClick = ()=>{
        console.log(userRef.current.value);
    }

  return (
    <div>
      <h1>useRef :- This is a hook used to create mutable reference with DOM elements and it does not cause re-render.</h1>
      <input type="text" placeholder="Enter your name" ref={userRef} name="" id="" />
      <button onClick={hanleClick}>Click</button>
    </div>
  )
}

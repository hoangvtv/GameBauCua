import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

//useTrail giúp định nghĩa nhiều spring nhưng spring đó giống nhau áp dụng cho tất cả phần tử , thực hiện nhièu animation nối tiếp nhau, tuần tự cho từng thằng
const items = [
  { title: "FrontEndOnline", content: "cyberlearn" },
  { title: "FrontEndOffline", content: "cybersoft" },
  { title: "FrontEndTuXa", content: "cybersoft" },
];

export default function Ex4UseTrail() {
  let [status, setStatus] = useState(true);
  const [propsUseTrail, set, stop] = useTrail(items.length, () => {
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 80 : 0,
      color: "red",
      from: { opacity: 0, x: 20, height: 0, color: "green" },
      config: {
        duration: 1000,
      },
    };
  });
  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 80 : 0,
    color: "red",
    from: { opacity: 0, x: 20, height: 0, color: "green" },
    config: {
      duration: 1000,
    },
  });
  return (
    <div>
      <button
        className="btn btn-primary mr-5"
        onClick={() => {
          setStatus(!status);
        }}
      >
        {status ? "Hide" : "Show"}
      </button>
      <button
        onClick={() => {
          console.log(propsUseTrail);

          //set này chỉ set lại animation chứ không render lại component
          set({ color: "pink" });
        }}
      >
        setColor
      </button>
      {propsUseTrail.map((propsUseSprings, index) => (
        <animated.div key={index} style={propsUseSprings}>
          <h1>{items[index].title}</h1>
          <p>{items[index].content}</p>
        </animated.div>
      ))}
    </div>
  );
}

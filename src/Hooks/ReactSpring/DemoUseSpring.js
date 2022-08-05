import React from "react";
import { useSpring, animated } from "react-spring";

export default function DemoUseSpring(props) {
  const propsAnim = useSpring({
    color_text: "red",
    from: { color_text: "green" },
    config: { duration: 1000 },
    // chuyển từ green sang red trong 1s
  });

  const propsAnimNumber = useSpring({
    number: 100, //lúc kết thúc
    color: "red",
    from: { number: 0, color: "black" }, //lúc bắt đầu
    config: { duration: 3000 },
  });

  const propsAnimScroll = useSpring({
    scroll: 100,
    from: { scroll: 0 },
    config: { duration: 3000 },
  });

  return (
    <div>
      <h1> Change Colertext </h1>
      <animated.div
        style={{
          color: propsAnim.color_text,
        }}
      >
        I will fade in
      </animated.div>
      <hr />

      <h1> Change Number </h1>
      <animated.div>
        <animated.p
          style={{
            fontSize: propsAnimNumber.number,
            color: propsAnimNumber.color,
          }}
        >
          {propsAnimNumber.number}
        </animated.p>
      </animated.div>

      <hr />
      <h1>Scroll</h1>
      <animated.div scrollTop={propsAnimScroll.scroll}>
        <h6>Scroll</h6>
        <h6>Scroll</h6>
        <h6>Scroll</h6>
        <h6>Scroll</h6>
        <h6>Scroll</h6>
        <h6>Scroll</h6>
        <h6>Scroll</h6>
      </animated.div>
    </div>
  );
}

import React, { useState, useMemo } from "react";
import ChildUseMemo from "./ChildUseMemo";

//useMemo là khi bạn muốn re-render lại không hay không với giá trị hoặc state
//useCallbacll là khi bạn muốn re-render lại hay không với hàm

//hàm trả về  giá trị có thể  dùng useMemo như ví dụ dưới
export default function DemoHooksUseMemo(props) {
  let [like, setLike] = useState(1);

  const renderCart = () => {
    let cart = [
      { id: 1, name: "iphone", price: 1000 },
      { id: 2, name: "htc phone", price: 2000 },
      { id: 3, name: "lg phone", price: 3000 },
    ];
    return cart;
  };

  //để [] thì khi render renderCart sẽ kh bị render lại, khi muốn có state nào thay đổi thì render lại ta cho vào []
  const cartMemo = useMemo(renderCart, []);

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <ChildUseMemo cart={cartMemo} />
    </div>
  );
}

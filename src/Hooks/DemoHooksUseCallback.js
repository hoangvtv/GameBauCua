import React, { useState, useCallback } from "react";
import ChildUseCallback from "./ChildUseCallback";

//useCallback là tình huống các bạn truyèn props là 1 hàm và muốn nó render hay không render lại, khi mà cái thuộc tính nào thay đổi thì bạn sẽ liệt kê trong dấu []

export default function DemoHooksUseCallback(props) {
  const [like, setLike] = useState(0);

  const renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };

  //không muốn nó render lại sử dụng  useCallback tham số đàu là đối tượng, tham số thứ 2 là state mà bạn muốn khi state thay đổi thì callback mới được gọi
  //   const callBackRenderNotify = useCallback(renderNotify, []);
  const callBackRenderNotify = useCallback(renderNotify, [like]);

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
      <small> {renderNotify()}</small>
      <br />
      <br />
      <ChildUseCallback renderNotify={callBackRenderNotify} />
    </div>
  );
}

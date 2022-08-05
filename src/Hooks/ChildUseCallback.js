import React, { memo } from "react";

function ChildUseCallback(props) {
  let title = "PTIT";
  let object = { id: 1, name: "Phạm Tấn Hoàng" };
  console.log("title: ", title);
  console.log("object: ", object);
  console.log("re-render");
  return (
    <div>
      <small>{props.renderNotify()}</small>
      <br />
      <textarea> </textarea>
      <br /> <br />
      <button className="btn btn-success"> Bình luận</button>
    </div>
  );
}
export default memo(ChildUseCallback);

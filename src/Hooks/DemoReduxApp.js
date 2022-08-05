import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addCommentAction } from "../redux/actions/FakeBookAppActions";
import { add_comment } from "../redux/types/FakeBookType";

export default function DemoReduxApp(props) {
  //useSelector: thay cho mapStateToProps
  const comments = useSelector((state) => state.FakeBookReducer.comments);

  //lấy hàm dispatch từ useDispatch
  const dispatch = useDispatch();

  const [userComment, setUserComment] = useState({
    name: "",
    content: "",
  });

  //lấy thông tin người dùng nhập vào
  const handleChange = (event) => {
    let { value, name } = event.target;
    setUserComment({ ...userComment, [name]: value });
  };

  const handleComment = (e) => {
    console.log("userComment", userComment);
    e.preventDefault();
    let usComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };
    dispatch(addCommentAction(usComment));
    setUserComment({ name: "", content: "" });
    console.log("dấdsadsad");
  };
  return (
    <div className="container mt-5">
      <h3> FakeBook App!</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => {
            return (
              <div className="row m-2" key={index}>
                <div className="col-2">
                  <img
                    src={comment.avatar}
                    alt="avatar"
                    style={{
                      height: "100px",
                    }}
                  />
                </div>
                <div
                  className="col-10 "
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <h6 className="text-danger"> {comment.name} </h6>
                  <p className="text-secondary"> {comment.content} </p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body" onSubmit={handleComment}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              value={userComment.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              type="text"
              name="content"
              placeholder="Content"
              value={userComment.content}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-secondary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     comments: state.FakeBookReducer.comments,
//   };
// };

// export default connect(mapStateToProps)(DemoReduxApp);

import React from "react";

const Comments = ({ comments }) => {
  return (
    <>
      <div className="h5 text-center fw-light   ">
        {comments
          ? comments.map((comment) => (
              <div key={comment.id} className="d-flex justify-content-center ">
                <div className="m-2">{comment.user} :</div>
                <div className="m-2">{comment.comment} </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Comments;

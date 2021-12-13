import React, { useEffect, useState } from "react";
import { Container, Table, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchComments, fetchOneWork } from "../../store/actions/artsActions";
import { FaLastfmSquare, FaRegHeart } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../service/firebase-config";
import { setUser } from "../../store/reducers/authReducer";
import "./DetailsOfArt.css";
import {
  FaRegStar,
  FaRegGem,
  FaGrin,
  FaDragon,
  FaEdit,
  FaComment,
  FaRegTrashAlt,
} from "react-icons/fa";
import NewsLetter from "../NewsLetter/NewsLetter";
import { createComment, deleteWork } from "../api/work";

import ModalEdit from "../Edit/ModalEdit";
import {
  setItemToFavorite,
  removeItemFromFavorites,
} from "../../store/reducers/favoriteReducer";
import Comments from "../Commets/Comments";
import { setComments } from "../../store/reducers/artsReducers";

const DetailsOfArt = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [itemFavorite, setItemFavorite] = useState(false);
  const comments = useSelector((state) => state.artsReducer.comments);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const onCloseModal = () => {
    setModalShow(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const work = useSelector((state) => state.artsReducer.work);
  //   console.log(work);

  const favoriteItem = () => {
    if (itemFavorite) {
      dispatch(removeItemFromFavorites(work.id));
      setItemFavorite(false);
    } else {
      dispatch(
        setItemToFavorite({
          [work.id]: {
            name: work.title,
            img: work.image,
          },
        })
      );
      setItemFavorite(true);
    }
  };

  useEffect(() => {
    dispatch(fetchOneWork(id));
  }, [id]);

  const handleDeleteWork = async () => {
    try {
      await deleteWork(id);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const user = useSelector((state) => state.authReducer.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
    });
  }, []);
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  const [comment, setComment] = useState({
    user: "",
    comment: "",
  });

  const handleChange = (e) => {
    const values = {
      ...comment,
      [e.target.name]: e.target.value,
    };
    setComment(values);
  };

  const onClickAddComment = async () => {
    await createComment(comment);

    setComment("");
    setShow(false);

    dispatch(fetchComments());
  };
  return (
    <>
      {work ? (
        <>
          <Container>
            <div className="row">
              <div className=" card border-0 details col-12 col-md-7 col-sm-12">
                <h1 className="text-uppercase  m-3 px-3">{work.title}</h1>
                <img
                  src={work.image}
                  className="image-card col-md-11 col-sm-12"
                />
                <div className="">
                  <button className="fav-details btn" onClick={favoriteItem}>
                    <FaRegHeart
                      style={{ color: !itemFavorite ? "white" : "red" }}
                    />
                  </button>
                </div>

                <br />
                <div className="icons-details">
                  <button className="btn " onClick={handleOpenModal}>
                    <FaEdit />
                  </button>
                  <ModalEdit show={modalShow} onHide={onCloseModal} />
                  <button className="btn " onClick={handleDeleteWork}>
                    <FaRegTrashAlt />
                  </button>

                  <FaDragon />
                  <button className="btn" onClick={handleShow}>
                    <FaComment />
                  </button>
                </div>
              </div>
              {user ? (
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>ADD A COMMENT</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <label for="user">
                      {" "}
                      <b>Enter your name</b>
                    </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={comment.user}
                      placeholder="user"
                      className="desc"
                      name="user"
                    />
                    <label for="comment">
                      {" "}
                      <b>Here you can add your comment</b>
                    </label>
                    <textarea
                      type="text"
                      onChange={handleChange}
                      value={comment.comment}
                      placeholder="comment"
                      className="desc"
                      name="comment"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="dark" onClick={onClickAddComment}>
                      Comment me
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>You should sign up to leave a comment</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}

              <div className=" col-12 col-md-5 mt-4 card border-0 rounded-0 mb-2">
                <span className="h3 font-weight-light mb-0 mt-5 ml-4 py-4">
                  Price {work.price} $
                </span>
                <br />
                <br />
                <br />
                <button className="btn btn-light w-100 py-3 " type="submit">
                  Add to cart
                </button>

                <br />
                <br />
                <span className="text-muted small mt-3">
                  <FaRegGem /> Artwork signed by the artist
                </span>

                <span className="text-muted small mt-3 ">
                  <FaRegStar /> Certificate of Authenticity included
                </span>

                <span className="text-muted small mt-3">
                  <FaDragon /> Delivery by kArt (Ships within 2 days)
                </span>

                <span className="text-muted small mt-3">
                  <FaGrin /> Returns Accepted 14 days
                </span>
              </div>
            </div>

            <div className="row" style={{ marginTop: "3rem" }}>
              <div class="col-12 col-md-7 col-xl-8">
                <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-end">
                  <h1 className="h4 font-weight-light mb-0 ">
                    <span class="text-uppercase text-break">{work.title}</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-8 mt-4 px-7 ">
                <Table>
                  <tbody>
                    <tr>
                      <td>Author</td>
                      <td>{work.author}</td>
                    </tr>

                    <tr>
                      <td>ArtWork Type</td>
                      <td>{work.type}</td>
                    </tr>
                    <tr>
                      <td>Dimensions</td>
                      <td>{work.dimensions}</td>
                    </tr>

                    <tr>
                      <td>Techniques</td>
                      <td>{work.techniques}</td>
                    </tr>
                  </tbody>
                </Table>
                <h3 className="mt-5 h6 text-secondary text-uppercase font-weight-normal">
                  About this artwork
                </h3>
                <div className="text-justify mt-4 px-2  h6 font-weight-normal">
                  <div className=" text-break">
                    <p> {work.description} </p>
                  </div>
                </div>
                <div className="p-4 mt-5 bg-light text-uppercase ">
                  <h5>About an artist</h5>

                  <p> {work.biography} </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="h4 text-center fw-light text-uppercase mt-4 p-4  ">
                Comments
              </div>
              {/* <div className="h4 text-center fw-light text-uppercase mt-1  mb-5 p-1  ">
                <FaComment />
              </div> */}
              <Comments comments={comments} />
            </div>
          </Container>
          <NewsLetter />
        </>
      ) : null}
    </>
  );
};

export default DetailsOfArt;

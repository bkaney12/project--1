import React, { useEffect, useState } from "react";

import "./CreateModal.css";

import Modal from "react-bootstrap/Modal";
import { createWork } from "../../components/api/work";
import { fetchWorks } from "../../store/actions/artsActions";
import { useDispatch } from "react-redux";

const CreateModal = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    author: "",
    biography: "",
    title: "",
    image: "",
    price: "",
    description: "",
    type: "",
    dimensions: "",
    techniques: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const values = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(values);
  };

  const onSubmit = async () => {
    console.log(form, "Submit Form");
    await createWork(form);
    props.onHide();
    setForm({
      author: "",
      biography: "",
      title: "",
      image: "",
      price: "",
      description: "",
      type: "",
      dimensions: "",
      techniques: "",
    });

    dispatch(fetchWorks());
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="title">
            ADD A PIECE OF ART
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper">
            <label for="author">
              {" "}
              <b>Author</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.author}
              placeholder="author"
              className="desc"
              name="author"
            />

            <label for="biography">
              {" "}
              <b>Author' s biography</b>
            </label>
            <textarea
              type="text"
              onChange={handleChange}
              value={form.biography}
              placeholder="biography"
              className="desc"
              name="biography"
            />
            <label for="title">
              {" "}
              <b>Title</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.title}
              placeholder="title"
              className="desc"
              name="title"
            />

            <label for="desc">
              {" "}
              <b>Description</b>
            </label>
            <textarea
              type="text"
              onChange={handleChange}
              value={form.description}
              placeholder="description"
              className="desc"
              name="description"
            />
            <label for="image">
              <b>Image</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.image}
              placeholder="image"
              className="image"
              name="image"
            />

            <label for="type">
              <b>Type</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.type}
              placeholder="type"
              className="image"
              name="type"
            />

            <label for="price">
              <b>Price</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.price}
              placeholder="price"
              className="image"
              name="price"
            />

            <label for="techniques">
              <b>Techniques</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.techniques}
              placeholder="techniques"
              className="image"
              name="techniques"
            />

            <label for="dimensions">
              <b>Dimensions</b>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={form.dimensions}
              placeholder="dimensions"
              className="image"
              name="dimensions"
            />

            <button className="submit" onClick={() => onSubmit()}>
              Create
              {/* {props.btnText} */}
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-outline-dark  px-4 mt-2 "
            onClick={props.onHide}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;

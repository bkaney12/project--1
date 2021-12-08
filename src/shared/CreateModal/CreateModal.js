import React from "react";

import "./CreateModal.css";

import Modal from "react-bootstrap/Modal";
import { createWork } from "../../components/api/work";
import { fetchWorks } from "../../store/actions/artsActions";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  author: yup.string().required(),
  biography: yup.string().min(2).required(),
  title: yup.string().required(),
  description: yup.string().required(),
  image: yup.string().required(),
  techniques: yup.string().required(),
  dimensions: yup.string().required(),
});

const CreateModal = (props) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(schema);

  //   const onSubmit = async (form) => {
  //     try {
  //       await createWork(form);
  //       props.onHide();

  //       dispatch(fetchWorks());
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  //   const onSubmit = async (data) => {
  //     await createWork({ ...data, like: false });
  //     props.onHide();
  //     reset();
  //     dispatch(fetchWorks());
  //   };

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
              {...register("author")}
              placeholder="author"
              className="desc"
            />
            <p className="error-msg">{errors?.author?.message}</p>
            <label for="biography">
              {" "}
              <b>Author' s biography</b>
            </label>
            <textarea
              type="text"
              {...register("biography")}
              placeholder="biography"
              className="desc"
            />
            <label for="title">
              {" "}
              <b>Title</b>
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="title"
              className="desc"
            />

            <label for="desc">
              {" "}
              <b>Description</b>
            </label>
            <textarea
              type="text"
              {...register("description")}
              placeholder="description"
              className="desc"
            />
            <label for="image">
              <b>Image</b>
            </label>
            <input
              type="text"
              {...register("image")}
              placeholder="image"
              className="image"
            />

            <label for="type">
              <b>Type</b>
            </label>
            <input
              type="text"
              {...register("type")}
              placeholder="type"
              className="image"
            />

            <label for="techniques">
              <b>Techniques</b>
            </label>
            <input
              type="text"
              {...register("techniques")}
              placeholder="techniques"
              className="image"
            />

            <label for="dimensions">
              <b>Dimensions</b>
            </label>
            <input
              type="text"
              {...register("dimensions")}
              placeholder="dimensions"
              className="image"
            />

            <button className="submit">Create</button>
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
      );
    </>
  );
};

export default CreateModal;

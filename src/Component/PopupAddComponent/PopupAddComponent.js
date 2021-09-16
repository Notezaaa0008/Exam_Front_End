import react, { useState } from "react";
import "./PopupAddComponent.css";
import { BsX } from "react-icons/bs";
import axios from "../../config/axios";

const PopupAddComponent = ({ setChange, addData, setAddData }) => {
  const [dataSubmit, setDataSubmit] = useState({ value: addData, synonyms: "" });

  const handleChange = e => {
    e.preventDefault();
    setDataSubmit({ ...dataSubmit, synonyms: e.target.value });
  };

  console.log(dataSubmit);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const res = await axios.post("/data/", { ...dataSubmit });
      setAddData("");
      setChange(change => !change);
    } catch (error) {}
  };

  const handleClose = e => {
    e.preventDefault();
    setAddData("");
  };

  return (
    <div className="popup-container">
      <div className="popup-inner-container">
        <div>
          <a className="close-popup" onClick={handleClose}>
            <BsX />
          </a>
        </div>
        <div className="popup-header">
          <h1>Add word</h1>
        </div>
        <div>
          <hr />
        </div>

        <form className="popup-form-container" onSubmit={handleSubmit}>
          <input className="popup-input-box" type="text" placeholder="Please enter a word" onChange={handleChange} />
          <button className="popup-button-box">
            <b>ADD</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupAddComponent;

import { useState } from "react";
import "./Section1.scss";
import Button from "../Button/Button";

function Section1() {
  const [inputValue, setInputValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <h1>
        Make your websites <br /> <span>Wonderful</span>{" "}
      </h1>
      <p className="pp">
        Our landing page template works on all devices, so you only have to{" "}
        <br /> set it up once, and get beautiful results forever.
      </p>

      <input
        type="text"
        placeholder="Your email..."
        value={inputValue}
        onChange={handleChange}
        className="input-field"
      />

      <div className="s1-btns">
        <Button name="Start free trial" onClick={handleOpenModal} />
        <Button name="Learn more" className="s1-btn" />
      </div>

      <div className="s1-video">
        <img className="video" src="./src/assets/images/s1-img.svg" alt="" />
        <img className="oval-1" src="./src/assets/icons/oval.svg" alt="" />
        <img
          className="oval-2"
          width={256}
          src="./src/assets/icons/oval.svg"
          alt=""
        />
      </div>
      <div className="watch-video">
        <img src="./src/assets/icons/play.svg" alt="" />
        <p>Watch the full video (2 min)</p>
      </div>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Free Trial Request</h2>
            <p className="modal-p">
              Email: <span className="email-user">{inputValue || "No email provided"}</span>
            </p>
            <button onClick={handleCloseModal} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section1;

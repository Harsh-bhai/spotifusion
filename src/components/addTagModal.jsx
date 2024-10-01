import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const AddTagModal = () => {
  const [tagName, setTagName] = useState("");

  const handleTagChange = (e) => {
    setTagName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to save the tag
    console.log("Tag Name Submitted:", tagName);
    setTagName(""); // Reset the input field after submission
    document.getElementById("TagModal").close(); // Close the modal after submission
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <IoIosAddCircle
        onClick={() => document.getElementById("TagModal").showModal()}
        className="text-3xl text-green-700 cursor-pointer"
      />
      <dialog id="TagModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add a New Tag</h3>
          <form onSubmit={handleSubmit} className="py-4">
            <input
              type="text"
              value={tagName}
              onChange={handleTagChange}
              placeholder="Enter tag name"
              className="input input-bordered w-full"
              required
            />
            <div className="modal-action">
              <button type="submit" className="btn">Add Tag</button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("TagModal").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddTagModal;

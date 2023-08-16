import React from "react";

function Model({ closeModal }){
  return (
    <div>
      <div className="modal-box">
        <div className="model-box-body">
          <button className="closeBtn" onClick={()=> closeModal(false)}> X </button>
          <h1>this is model box</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quibusdam enim molestiae magni, voluptatum beatae alias neque similique accusantium maxime, praesentium ratione possimus deleniti laboriosam minus iusto assumenda quasi quisquam.</p>
          <div className="model-box-footer">
            <button className="myBtn" onClick={()=> closeModal(false)}> Got it </button>
            <button className="myBtn"> Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;

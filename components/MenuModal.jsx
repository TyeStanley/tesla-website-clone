import React from "react";

export default function MenuModal() {
  return (
    <>
      <div className="modal">
        <button className="modal-close">&times;</button>
        <div className="modal-content">
          <h2>Menu</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Models</a>
            </li>
            <li>
              <a href="#">Energy</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

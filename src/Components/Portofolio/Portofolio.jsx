import React, { useState } from "react";
import style from "./Portofolio.module.css";

export default function Portofolio() {
  let myObj = [
    { path: "./images/cabin.png", title: "LOG CABIN" },
    { path: "./images/cake.png", title: "TASTY CAKE" },
    { path: "./images/circus.png", title: "CIRCUS TENT" },
    { path: "./images/game.png", title: "CONTROLLER" },
    { path: "./images/safe.png", title: "LOCKED SAFE" },
    { path: "./images/submarine.png", title: "SUBMARINE" },
  ];
  let [myImg, setImg] = useState(" ");
  let [myTitle, setTitle] = useState("");

  let getImg = (element) => {
    setImg(element.path);
    setTitle(element.title);
  };

  return (
    <>
      <div className={`${style.porto}`} id="poto">
        <div className="container">
          <h2>PORTFOLIO</h2>
          <span>
            <i className="fa-solid fa-star" />
          </span>
          <div className="row gy-3 p-5">
            {myObj.map((ele, index) => (
              <div className="col-lg-4 col-md-6 px-4 py-2" key={index}>
                <div
                  className={`${style.item}`}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => getImg(ele)}
                >
                  <img src={ele.path} alt="cabin" />
                  <div className={`${style.overlay}`}>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>

                <div
                  className={`${style.hmodaal} modal fade`}
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className={`${style.mymodalHead} modal-header `}>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <h2
                        className={`${style.myModal} modal-title fs-5`}
                        id="exampleModalLabel"
                      >
                        {myTitle}
                      </h2>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <div className="modal-body">
                        <img src={myImg} alt="cabin" className="w-50" />
                        <p className="p-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia neque assumenda ipsam nihil, molestias
                          magnam, recusandae quos quis inventore quisquam velit
                          asperiores, vitae? Reprehenderit soluta, eos quod
                          consequuntur itaque. Nam.
                        </p>
                      </div>
                      <div className={`${style.mymodlFotter} modal-footer`}>
                        <button
                          type="button"
                          className={`${style.myBtn} btn btn-secondary`}
                          data-bs-dismiss="modal"
                        >
                          <i className="fa fa-close"></i>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

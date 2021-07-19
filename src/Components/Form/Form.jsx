import React from "react";
import "./Form.css";
import Namaste from "../Form/Namaste2.png";
export default function Form() {
  return (
    <div className="mar">
      <div
        className="modal fade formodal modal-btn"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-dialog">
            <div className="modal-body">
              {/* form */}
              <form>
                <h3>Sign Up</h3>

                <div className="form-group ">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="First name"
                  />
                </div>

                <div className="form-group">
                  <label>Mobile No.</label>
                  <input
                    type="tel"
                    className="form-control custom-input"
                    placeholder="Mobile No."
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Suggestions</label>
                  <textarea
                    className="form-control custom-input"
                    placeholder="Suggestions"
                  />
                </div>
              </form>
              {/* form closed */}
            </div>
            <div className="md-ft">
              <button
                className="btn reg"
                data-toggle="modal"
                data-target=".jaihind"
                data-dismiss="modal"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade jaihind"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content custom-dialog">
            <div className="modal-header">
              <h3 className="Thanks">Thanks For Visiting Us!</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{ marginLeft: 0 }}
              >
                <i className="fa fa-times cross" aria-hidden="true"></i>
              </button>
            </div>

            <div className="modal-body flexingmodal">
              <img
                className="namasteimg"
                src="https://cdn.discordapp.com/attachments/866039655924891681/866561304801837066/Copy_of_Untitled_2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn icon-i"
        href="https"
        data-toggle="modal"
        data-target=".formodal"
        role="button"
      >
        {" "}
      </a>
    </div>
  );
}

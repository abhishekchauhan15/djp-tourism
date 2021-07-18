import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <div className="mar">
      <div
        class="modal fade formodal modal-btn"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              {/* form */}
              <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>

                <div className="form-group">
                  <label>Mobile No.</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile No."
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Suggestions</label>
                  <textarea
                    className="form-control"
                    placeholder="Suggestions"
                  />
                </div>
              </form>
              {/* form closed */}
            </div>
            <div className="md-ft">
              <button
                class="btn btn-primary reg"
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
        class="modal fade jaihind"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                Modal 2
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-dismiss="modal">
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn icon-i"
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

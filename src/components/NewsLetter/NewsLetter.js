import React from "react";

const NewsLetter = () => {
  return (
    <>
      <section id="block_newsletter" className="container-fluid">
        <div id="newsletter_subscribe" className="bg-light row mt-5">
          <div className="col-lg-6 col-12">
            <p className="fw-medium  large">kART</p>
            <p className="h2 fw-light newsletter-title text-uppercase mb-2">
              Newsletter
            </p>
            <div>Receive our newsletter for art lovers and collectors</div>
          </div>
          <div className="col-lg-6 col-12 mt-3 mt-lg-0 d-flex align-items-center">
            <form
              name="newsletter_subscribe"
              method="post"
              action="/newsletter/subscribe"
              id="newsletter_form"
              className="w-100 form-horizontal"
              novalidate="true"
            >
              <div className="d-flex row">
                <div className="col-8">
                  <input
                    type="email"
                    id="newsletter_subscribe_email"
                    name="newsletter_subscribe[email]"
                    required="required"
                    placeholder="Email"
                    className="newsletter-input border-0 form-control"
                    aria-describedby="validation_newsletter_feedback"
                  />
                  <div className="invalid-feedback"></div>

                  <div className="" id="validation_newsletter_feedback"></div>
                </div>
                <button
                  className="newsletter-button btn btn-dark col-4"
                  type="submit"
                >
                  Sign Up
                </button>
                {/* <input
                  type="text"
                  id="newsletter_subscribe_firstname"
                  name="newsletter_subscribe[firstname]"
                  class="hide-robot form-control"
                  list="autocompleteOff"
                  autocomplete="off"
                  tabindex="-1"
                /> */}
              </div>
              <input
                type="hidden"
                id="newsletter_subscribe__token"
                name="newsletter_subscribe[_token]"
                value="da29738d572cbb4062043bbf9.uNaollP_1EDGhRN2TrgIBBr_RbIzXprRxRUMYkQa8Ns._ZHPzDCM5Q-t7n8XIulDZ3Ond9dmEq7oskY8FnZMur3BsurgMseVNJ7XRg"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;

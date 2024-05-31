import React, { useState } from "react";
import {
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";
import { WhatsappIcon, EmailIcon, TelegramIcon } from "react-share";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          КОРЗИНА
                        </h1>
                        <h6 className="mb-0 text-muted">1 товар</h6>
                      </div>
                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://nosmag.ru/uploads/photos/166ba892f8dc07312f9c0813584bd4aa.JPG"
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Носки</h6>
                          <h6 className="text-black mb-0">Носки NASA</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick={() =>
                              handleQuantityChange( quantity - 1)
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={quantity}
                            type="number"
                            className="form-control form-control-sm"
                          />
                          <button
                            className="btn btn-link px-2"
                            onClick={() =>
                              handleQuantityChange( quantity + 1)
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">2000 ₽</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      {/* Другие товары */}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="/generator" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Вернуться к покупкам
                          </a>
                        </h6>
                        <div className="d-flex justify-content-end mt-4">
                          <WhatsappShareButton
                            url="https://example.com"
                            title="Check out this awesome shopping cart!"
                            separator=":: "
                            style={{ marginRight: "0.25rem" }}
                          >
                            <WhatsappIcon size={32} round />
                          </WhatsappShareButton>
                          <EmailShareButton
                            url="https://example.com"
                            subject="Check out this awesome shopping cart!"
                            body="Hey, check out this awesome shopping cart!"
                            style={{ marginRight: "0" }}
                          >
                            <EmailIcon size={32} round />
                          </EmailShareButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Сумма</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Носки</h5>
                        <h5>2000 ₽</h5>
                      </div>

                      

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">ВСЕГО</h5>
                        <h5>2000 ₽</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                      >
                        Купить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

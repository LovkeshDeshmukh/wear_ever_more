import React from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "react-grid-carousel";

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <Carousel cols={1} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              src="https://cdn.shopify.com/s/files/1/0535/5182/5079/files/swish_ethereal_desktop_1512x.jpg?v=1674584495"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              src="https://cdn.shopify.com/s/files/1/0535/5182/5079/files/co-ord_banner_d_1512x.jpg?v=1675786364"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Home_catalogue">
        <h2>NEW ARRIVAL</h2>
        <div className="Home_catalouge_map">
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt="catalouge"
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
        </div>
      </div>
      <div className="Home_catalogue">
        <h2>CHIKANKARI</h2>
        <div className="Home_catalouge_map">
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
        </div>
      </div>
      <div className="Home_catalogue">
        <h2>SUIT SETS</h2>
        <div className="Home_catalouge_map">
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
        </div>
      </div>
      <div className="Home_catalogue">
        <h2>KURTIS</h2>
        <div className="Home_catalouge_map">
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
        </div>
      </div>
      <div className="Home_catalogue">
        <h2>PASTEL</h2>
        <div className="Home_catalouge_map">
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
          <div className="Home_catalouge_last_div">
            <img
              className="Home_catalouge_image"
              src="https://firebasestorage.googleapis.com/v0/b/printbajar-3edba.appspot.com/o/images%2Fdress1.jpg?alt=media&token=b2a4d9e4-6142-4794-beaa-3c1deb3877c3"
              alt=""
            />
            <p>lulu</p>
            <h3>Rs.449</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_common_div">
        <div className="Footer_inner_common">
          <h3>MEASUREMENT</h3>
          <p>Size Chart</p>
        </div>
      </div>
      <div className="Footer_common_div">
        <div className="Footer_inner_common">
          <h3>ABOUT US</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Flagship Store</p>
          <p>Video Call Appointment</p>
        </div>
        <div className="Footer_inner_common">
          <h3>POLICIES</h3>
          <p>Terms & Conditions</p>
          <p>Shipping Policy</p>
          <p>Return Policy</p>
          <p>FAQs</p>
          <p>Customization Charges</p>
        </div>
      </div>
      <div className="Footer_common_div">
        <div className="Footer_inner_common">
          <h3>MY ACCOUNT</h3>
          <p>Login</p>
          <p>Shopping Bag</p>
          <p>Order History</p>
          <p>Order Tracking</p>
        </div>
      </div>
      <div className="Footer_common_div">
        <div className="Footer_inner_common_differ">
          <h3>FOLLOW US</h3>
          <div style={{marginLeft: "-6px"}}>
            <FacebookIcon style={{ fontSize: "50px", color: "#ffdaa9" }} />
            <PinterestIcon style={{ fontSize: "50px", color: "#ffdaa9" }} />
            <InstagramIcon style={{ fontSize: "50px", color: "#ffdaa9" }} />
          </div>
          <p>GET IN TOUCH</p>
          <p>+917566855928</p>
          <p>EMAIL US ON</p>
          <p>socially.ecomm@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

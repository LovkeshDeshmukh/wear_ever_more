import React, { useState } from "react";
import "./AdminHeader.css";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import LayersIcon from "@mui/icons-material/Layers";
import HailIcon from "@mui/icons-material/Hail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import logo from "../Images/logo.png";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TableViewIcon from "@mui/icons-material/TableView";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="AdminHeader_menu">
      <div className="AdminHeader_menu_image">
        <img style={{ width: "300px" }} src={logo} alt="logo" />
      </div>
      <div className="AdminHeader_menu_main_div">
        <div
          onClick={() => navigate("/Dashboard")}
          className="AdminHeader_menu_inner_div"
        >
          <div>
            <HomeIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
          </div>
          <span>Main Dashboard</span>
        </div>
        <div
          onClick={() => setshow(!show)}
          className="AdminHeader_menu_inner_div"
        >
          <div>
            <CategoryIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
          </div>
          <span>Products</span>
        </div>
        <div style={{ height: show ? 90 : 0, overflow: "hidden" }}>
          <div
            onClick={() => navigate("/AddProduct")}
            className="AdminHeader_menu_inner_subdiv"
          >
            <div>
              <AddBoxIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
            </div>
            <span>Add Product</span>
          </div>
          <div onClick={()=>navigate("/ProductDetails")} className="AdminHeader_menu_inner_subdiv">
            <div>
              <TableViewIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
            </div>
            <span>Product Details</span>
          </div>
        </div>
        <div className="AdminHeader_menu_inner_div">
          <div>
            <LayersIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
          </div>
          <span>Order</span>
        </div>
        <div className="AdminHeader_menu_inner_div">
          <div>
            <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
          </div>
          <span>Clients</span>
        </div>
        <div className="AdminHeader_menu_inner_div">
          <div>
            <ExitToAppIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
          </div>
          <span>Logout</span>
        </div>
        <div className="AdminHeader_menu_inner_div">
          <div>
            <AdminPanelSettingsIcon
              style={{ fontSize: "30px", color: "#ffdaa9" }}
            />
          </div>
          <span>Admin Management</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

import React, { useState } from "react";
import "./Dashboard.css";
import HailIcon from "@mui/icons-material/Hail";
import AdminHeader from "./AdminHeader";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const [showdiv, setShowdiv] = useState(1);
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="Dashboard">
    <AdminHeader/>
        <div className="Dashboard_display">
            <DashboardHeader/>
          <div className="Dashboard_display_div">
            <div className="Dashboard_display_small_div">
              <div className="Dashboard_display_small_div_content">
                <div className="Dashboard_display_small_div_icon">
                  <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
                </div>
                <div className="Dashboard_display_small_div_span">
                  <span style={{ fontWeight: "bold", color: "gray" }}>
                    TOTAL PRODUCTS
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    28
                  </span>
                </div>
              </div>
            </div>
            <div className="Dashboard_display_small_div">
              {" "}
              <div className="Dashboard_display_small_div_content">
                <div className="Dashboard_display_small_div_icon">
                  <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
                </div>
                <div className="Dashboard_display_small_div_span">
                  <span style={{ fontWeight: "bold", color: "gray" }}>
                    TOTAL SALES
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    28
                  </span>
                </div>
              </div>
            </div>
            <div className="Dashboard_display_small_div">
              {" "}
              <div className="Dashboard_display_small_div_content">
                <div className="Dashboard_display_small_div_icon">
                  <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
                </div>
                <div className="Dashboard_display_small_div_span">
                  <span style={{ fontWeight: "bold", color: "gray" }}>
                    TOTAL ORDERS
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    28
                  </span>
                </div>
              </div>
            </div>
            <div className="Dashboard_display_small_div">
              {" "}
              <div className="Dashboard_display_small_div_content">
                <div className="Dashboard_display_small_div_icon">
                  <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
                </div>
                <div className="Dashboard_display_small_div_span">
                  <span style={{ fontWeight: "bold", color: "gray" }}>
                    PENDING ORDERS
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    28
                  </span>
                </div>
              </div>
            </div>
            <div className="Dashboard_display_small_div">
              {" "}
              <div className="Dashboard_display_small_div_content">
                <div className="Dashboard_display_small_div_icon">
                  <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
                </div>
                <div className="Dashboard_display_small_div_span">
                  <span style={{ fontWeight: "bold", color: "gray" }}>
                    REVENUE
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    28
                  </span>
                </div>
              </div>
            </div>
            <div className="Dashboard_display_small_div">
              {" "}
              <div className="Dashboard_display_small_div_content">
                <div className="Dashboard_display_small_div_icon">
                  <HailIcon style={{ fontSize: "30px", color: "#ffdaa9" }} />
                </div>
                <div className="Dashboard_display_small_div_span">
                  <span style={{ fontWeight: "bold", color: "gray" }}>
                    TOTAL CLIENTS
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    28
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Dashboard_display_table">
            <table className="table">
              <thead className="table_head">
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Item</th>
                <th>Status</th>
              </thead>
              <tbody className="table_body">
                <tr>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                </tr>
                <tr>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                  <td>kdhbuf</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

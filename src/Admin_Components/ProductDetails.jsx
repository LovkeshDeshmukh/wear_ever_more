import React from "react";
import AdminHeader from "./AdminHeader";
import "./ProductDetails.css";
import DashboardHeader from "./DashboardHeader";

const ProductDetails = () => {
  return (
    <div className="ProductDetails">
      <AdminHeader />
      <div className="ProductDetails_content">
        <DashboardHeader />
        <div className="ProductDetails_content_table_div">
          <div>wrtyrhtger</div>
          <div>
            <table style={{width:"100%"}}>
                <thead>
                    <th>g</th>
                    <th>g</th>
                    <th>g</th>
                    <th>g</th>
                    <th>g</th>
                    <th>g</th>
                    <th>g</th>
                </thead>
                <tbody>
                    <tr>
                        <td>egeg</td>
                        <td>egeg</td>
                        <td>egeg</td>
                        <td>egeg</td>
                        <td>egeg</td>
                        <td>egeg</td>
                        <td>egeg</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

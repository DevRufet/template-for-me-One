import React from "react";
import { Link } from "react-router-dom";
import "./mainnavbar.scss";
function MainNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="item1">
            <span>Pulse.</span>
        </div>
        <div className="item2">
            <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/aboutus"}>About us</Link>
          <Link to={"/restaurant"}>Restaurant</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="item3">
          <span>Reservations</span><i class="fa-solid fa-phone"></i><p> 652-345 3222 11</p>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;

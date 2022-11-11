import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import RightStart from "./RightStart";
import styles from "../../styles/Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../Redux/Product Reducer/action";
import { Badge } from "@mui/material";

const Wrapper = styled.div`
  position: relative;
  .logoutOpt {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    left: 0;
    padding: 10px;
    background-color: #ffffff;
    top: 40px;
  }

  &:hover {
    .logoutOpt {
      visibility: ${(props) => (props.username ? "visible" : "hidden")};
      opacity: ${(props) => (props.username ? 1 : 0)};
      cursor: pointer;
    }
  }
`;

function Navbar() {
  const username = useSelector((state) => state.products.username);
  const badge = useSelector((state) => state.cartreducer.carts);

  console.log(badge, badge.length, "badge");
  // const [username, setUserName] = useState("");
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);

  const [flag3, setFlag3] = useState(false);

  const handlerChange = () => {
    console.log(flag);
    setFlag(!flag);
    setFlag1(false);
    setFlag2(false);
    setFlag3(false);
  };
  const handlerChange1 = () => {
    console.log(flag);
    setFlag1(!flag1);
    setFlag(false);
    setFlag2(false);
    setFlag3(false);
  };
  const handlerChange2 = () => {
    console.log(flag);
    setFlag2(!flag2);
    setFlag1(false);
    setFlag(false);
    setFlag3(false);
  };
  const handlerChange3 = () => {
    console.log(flag);
    setFlag3(!flag3);
    setFlag1(false);
    setFlag2(false);
    setFlag(false);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0%",
        backgroundColor: "#ffffff",
        zIndex: "15",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          backgroundColor: "rgb(0,70,190)",
          justifyContent: "end",
        }}
      >
        <div>
          <a
            className="anchortag"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
            }}
            href=""
          >
            Order Status
          </a>
        </div>
        <div>
          <a
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
            }}
            href=""
          >
            BLog
          </a>
        </div>
        <div>
          <a
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
            }}
            href=""
          >
            Best Buy Business
          </a>
        </div>
        <div>
          <a
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "16px",
              paddingRight: "138px",
            }}
            href=""
          >
            Francais
          </a>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#0046be", width: "100%", height: "100px" }}
      >
        <div
          style={{
            display: "flex",

            justifyContent: "space-around",
          }}
        >
          <div style={{ textAlign: "end", width: "15%" }}>
            <img
              onClick={() => navigate("/")}
              style={{ marginRight:"20px", borderRadius:"80px", height: "90px", width: "40%", cursor: "pointer" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtr8pWUF-wHmeJMGfjphHEjTfn31hT4Eryw&usqp=CAU"
              alt=""
            />
          </div>
          <div style={{ textAlign: "start", width: "38%" }}>
            {" "}
            <div
              style={{
                display: "flex",
                marginTop: "22px",
                width: "80%",
                height: "40px",
                backgroundColor: "white",
                justifyContent: "space-between",
              }}
            >
              <div>
                <input
                  style={{
                    padding: "0px",
                    marginTop: "12px",
                    outline: "none",
                    border: "none",
                    width: "100%",
                  }}
                  placeholder="Search Best Buy"
                  type="text"
                />
              </div>{" "}
              <div>
                {" "}
                <SearchIcon color="secondary" style={{ marginTop: "8px" }} />
              </div>
            </div>{" "}
          </div>
          <div style={{ width: "46%" }}>
            <div
              style={{
                display: "flex",
                marginTop: "27px",
                width: "80%",
                height: "40px",
                justifyContent: "end",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <StoreMallDirectoryIcon style={{ fill: "#ffffff" }} />

                <div>
                  {" "}
                  <label style={{ color: "white", fontSize: "15px" }}>
                    Stores
                  </label>
                </div>
              </div>
              <Wrapper
                username={username}
                style={{ display: "flex" }}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <AccountCircleIcon style={{ fill: "#ffffff" }} />

                <div>
                  {" "}
                  <label
                    style={{
                      color: "white",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    {username ? username : "Account"}
                  </label>
                  <div
                    className="logoutOpt"
                    onClick={() => {
                      dispatch(Logout());
                    }}
                  >
                    Logout
                  </div>
                </div>
              </Wrapper>
              <Link to="/cart">
                <div style={{ display: "flex" }}>
                  <Badge badgeContent={badge.length} color="primary">
                    <ShoppingCartIcon style={{ fill: "#ffffff" }} />
                  </Badge>

                  <div>
                    {" "}
                    <label style={{ color: "white", fontSize: "15px" }}>
                      Cart
                    </label>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#003da6",
          display: "flex",
          gap: "20px",
          height: "40px",
        }}
      >
        <div style={{ marginLeft: "9%", marginTop: "5px", cursor: "pointer" }}>
          <div
            style={{
              backgroundColor: "#003da6",
              color: "white",
              position: "relative",
            }}
            onClick={handlerChange}
          >
            {" "}
            Shop{" "}
            {flag ? (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://pngroyale.com/wp-content/uploads/2022/03/Up-Arrow-PNG-Image-with-Transparent-Background-.png"
              />
            ) : (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  fill: "white",
                  backgroundColor: "#003da6",
                }}
                src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/black-arrow-down-icon-png-16.png"
              />
            )}{" "}
          </div>
          {flag ? (
            <div
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "320px",
                overflowX: "hidden",
                overflowY: "scroll",
                position: "absolute",
                paddingTop: "9px",
                textAlign: "left",
                lineHeight: "2",
                fontWeight: "300",
                paddingLeft: "9px",
              }}
            >
              <b style={{ fontSize: "12px" }}> Shop by Category</b>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <div
                  style={{ lineHeight: "1.3", cursor: "pointer" }}

                  onClick={() => navigate("products/ACER")}

                >
                  Computers, Tablets, & Accessories{" "}
                </div>{" "}
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <div style={{ lineHeight: "1.3", cursor: "pointer" }}>
                  Cell Phones and Accessories
                </div>{" "}
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Office Supplies & Ink</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>TV & Home Theatre</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>
                  Headphones, Speakers ,& Audio
                </div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Cameras & Camcorders</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Car Tech and GPS</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Appliances</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Smart Home</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Home Living</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Baby & Maternity</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Video Games & VR</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Wearable Technology</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Health & Fitness</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>
                  Sports, Recreation, & Transportation
                </div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Movies & Music</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
            </div>
          ) : null}
        </div>

        <div style={{ marginTop: "5px", cursor: "pointer" }}>
          <div
            style={{
              backgroundColor: "#003da6",
              color: "white",
              position: "relative",
            }}
            onClick={handlerChange1}
          >
            {" "}
            Brands{" "}
            {flag1 ? (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://pngroyale.com/wp-content/uploads/2022/03/Up-Arrow-PNG-Image-with-Transparent-Background-.png"
              />
            ) : (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/black-arrow-down-icon-png-16.png"
              />
            )}{" "}
          </div>
          {flag1 ? (
            <div
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "320px",
                overflowX: "hidden",
                overflowY: "scroll",
                position: "absolute",
                paddingTop: "9px",
                textAlign: "left",
                lineHeight: "2",
                fontWeight: "300",
                paddingLeft: "9px",
              }}
            >
              <b style={{ fontSize: "12px" }}>Popular Brands</b>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <div style={{ lineHeight: "1.3" }}>Acer </div>{" "}
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <div style={{ lineHeight: "1.3" }}>Amazon</div>{" "}
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Apple</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Asus</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Beats By Dr.Dre</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Bose</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Breville</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Canon</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Dell</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Dyson</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Fitbit</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>GE</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Google</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>GoPro</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>HP</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Insignia</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Instant Pot</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>JBL</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>KitchenAid</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Lenovo</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>LG</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Logitech</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Microsoft</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Nintendo</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>NVIDIA</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",
                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Panasonic</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Philips</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>PlayStation</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Samsung</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Seagate</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Sharp</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Sony</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Toshiba</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Ultimates Ears</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>WhirlPool</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ lineHeight: "1.3" }}>Xbox</div>
                <img
                  style={{
                    width: "15px",
                    height: "16px",

                    marginTop: "8px",
                  }}
                  src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
                />{" "}
              </div>
            </div>
          ) : null}
        </div>
        <div style={{ marginTop: "5px", cursor: "pointer" }}>
          <div
            style={{
              backgroundColor: "#003da6",
              color: "white",
              position: "relative",
            }}
            onClick={handlerChange2}
          >
            {" "}
            Deals{" "}
            {flag2 ? (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://pngroyale.com/wp-content/uploads/2022/03/Up-Arrow-PNG-Image-with-Transparent-Background-.png"
              />
            ) : (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/black-arrow-down-icon-png-16.png"
              />
            )}{" "}
          </div>
          {flag2 ? (
            <div
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "120px",
                overflowX: "hidden",
                overflowY: "scroll",
                position: "absolute",
                paddingTop: "9px",
                textAlign: "left",
                lineHeight: "2",
                fontWeight: "300",
                paddingLeft: "9px",
                cursor: "pointer",
              }}
            >
              <div
                onClick={() => {
                  navigate("/products/topdeals");
                  setFlag(false);
                }}
              >
                Top Deals{" "}
              </div>
              <div>Best Buys Outlet </div>
            </div>
          ) : null}
        </div>

        <div style={{ marginTop: "5px", cursor: "pointer" }}>
          <div
            style={{
              backgroundColor: "#003da6",
              color: "white",
              position: "relative",
            }}
            onClick={handlerChange3}
          >
            {" "}
            Services{" "}
            {flag3 ? (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://pngroyale.com/wp-content/uploads/2022/03/Up-Arrow-PNG-Image-with-Transparent-Background-.png"
              />
            ) : (
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  margin: "-3px",
                  backgroundColor: "#003da6",
                }}
                src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/black-arrow-down-icon-png-16.png"
              />
            )}{" "}
          </div>
          {flag3 ? (
            <div
              style={{
                backgroundColor: "white",
                width: "200px",
                height: "120px",
                overflowX: "hidden",
                overflowY: "scroll",
                position: "absolute",
                paddingTop: "9px",
                textAlign: "left",
                lineHeight: "2",
                fontWeight: "300",
                paddingLeft: "9px",
                cursor: "pointer",
              }}
            >
              <div onClick={() => navigate("/geeksquad")}>
                Geek Squad Services{" "}
              </div>
              <div>In-Home Advisor </div>
              <div>Best Buy Business</div>
              <div>Best Buy Health</div>
              <div>Trade-In Program</div>
              <div>Electronics Recycling</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

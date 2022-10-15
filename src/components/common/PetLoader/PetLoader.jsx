import React from "react";
import ReactDOM from "react-dom";
import { Box } from "@mui/material";
import "./petLoader.css";

const PerLoader = () => {
  return ReactDOM.createPortal(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        minHeight: "100vh",
      }}
    >
      <div className="🐕">
        <div className="torso">
          <div className="fur">
            <div className="spot"></div>
          </div>
          <div className="neck">
            <div className="fur"></div>
            <div className="head">
              <div className="fur">
                <div className="snout"></div>
              </div>
              <div className="ears">
                <div className="ear">
                  <div className="fur"></div>
                </div>
                <div className="ear">
                  <div className="fur"></div>
                </div>
              </div>
              <div className="eye"></div>
            </div>
            <div className="collar"></div>
          </div>
          <div className="legs">
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
            <div className="leg">
              <div className="fur"></div>
              <div className="leg-inner">
                <div className="fur"></div>
              </div>
            </div>
          </div>
          <div className="tail">
            <div className="tail">
              <div className="tail">
                <div className="tail -end">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail">
                        <div className="tail"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>,
    document.body
  );
};

export default PerLoader;

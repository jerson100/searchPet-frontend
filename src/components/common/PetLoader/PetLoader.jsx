import { Box } from "@mui/material";
import React from "react";
import "./petLoader.css";

const PerLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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
    </Box>
  );
};

export default PerLoader;

import React from "react";
import ReactDOM from "react-dom";
import { Box } from "@mui/material";
import "./catLoader.css";

const CatLoader = () => {
  return ReactDOM.createPortal(
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#1F1F3C",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: (theme) => {
          return theme.zIndex.tooltip + 1;
        },
      }}
    >
      <div className="all-wrap">
        <div className="all">
          <div className="yarn"></div>
          <div className="cat-wrap">
            <div className="cat">
              <div className="cat-upper">
                <div className="cat-leg"></div>
                <div className="cat-leg"></div>
                <div className="cat-head">
                  <div className="cat-ears">
                    <div className="cat-ear"></div>
                    <div className="cat-ear"></div>
                  </div>
                  <div className="cat-face">
                    <div className="cat-eyes"></div>
                    <div className="cat-mouth"></div>
                    <div className="cat-whiskers"></div>
                  </div>
                </div>
              </div>
              <div className="cat-lower-wrap">
                <div className="cat-lower">
                  <div className="cat-leg">
                    <div className="cat-leg">
                      <div className="cat-leg">
                        <div className="cat-leg">
                          <div className="cat-leg">
                            <div className="cat-leg">
                              <div className="cat-leg">
                                <div className="cat-leg">
                                  <div className="cat-leg">
                                    <div className="cat-leg">
                                      <div className="cat-leg">
                                        <div className="cat-leg">
                                          <div className="cat-leg">
                                            <div className="cat-leg">
                                              <div className="cat-leg">
                                                <div className="cat-leg">
                                                  <div className="cat-paw"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cat-leg">
                    <div className="cat-leg">
                      <div className="cat-leg">
                        <div className="cat-leg">
                          <div className="cat-leg">
                            <div className="cat-leg">
                              <div className="cat-leg">
                                <div className="cat-leg">
                                  <div className="cat-leg">
                                    <div className="cat-leg">
                                      <div className="cat-leg">
                                        <div className="cat-leg">
                                          <div className="cat-leg">
                                            <div className="cat-leg">
                                              <div className="cat-leg">
                                                <div className="cat-leg">
                                                  <div className="cat-paw"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cat-tail">
                    <div className="cat-tail">
                      <div className="cat-tail">
                        <div className="cat-tail">
                          <div className="cat-tail">
                            <div className="cat-tail">
                              <div className="cat-tail">
                                <div className="cat-tail">
                                  <div className="cat-tail">
                                    <div className="cat-tail">
                                      <div className="cat-tail">
                                        <div className="cat-tail">
                                          <div className="cat-tail">
                                            <div className="cat-tail">
                                              <div className="cat-tail">
                                                <div className="cat-tail -end"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
    window.document.body
  );
};

export default CatLoader;

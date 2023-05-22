import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Slide1 from "../../../Assets/images/slide-1.png";
import Slide2 from "../../../Assets/images/slide-2.png";
import Slide3 from "../../../Assets/images/slide-3.png";
import LeftChevron from "../../../Assets/icons/left-chevron.svg";
import RightChevron from "../../../Assets/icons/right-chevron.svg";
import "swiper/swiper.min.css";
import { Box, Button, Typography } from "@mui/material";

SwiperCore.use([Autoplay]);

const SliderControls = ({ swiperRef }) => (
  <Box
    sx={{
      width: "95%",
      marginX: "auto",
      position: "relative",
      zIndex: "10",
      top: "40%",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Box
      sx={(theme) => ({
        cursor: "pointer",
        borderRadius: "100%",
        backgroundColor: "white",
        width: "32px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          width: "40px",
          height: "40px",
        },
      })}
      onClick={() => swiperRef.current.swiper.slidePrev()}
    >
      <img src={LeftChevron} alt="" />
    </Box>
    <Box
      sx={(theme) => ({
        cursor: "pointer",
        borderRadius: "100%",
        backgroundColor: "white",
        width: "32px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
          width: "40px",
          height: "40px",
        },
      })}
      onClick={() => swiperRef.current.swiper.slideNext()}
    >
      <img src={RightChevron} alt="" />
    </Box>
  </Box>
);

const Slider = () => {
  const swiperRef = useRef();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "700px",
        backgroundImage: 'url("/home-hero-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SliderControls swiperRef={swiperRef} />
      <Swiper ref={swiperRef} slidesPerView={1} modules={[Autoplay]}>
        <SwiperSlide>
          <Box
            sx={(theme) => ({
              marginTop: "112px",
              width: "80%",
              marginX: "auto",
              paddingX: "16px",
              [theme.breakpoints.up("lg")]: {
                marginTop: "160px",
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                marginTop: "40px",
                marginBottom: "32px",
                textAlign:"center",
                [theme.breakpoints.up("lg")]: {
                textAlign:"left",
                  marginBottom: "0px",
                  width: "50%",
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                Turnkey Industrial{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                IoT solutions that meets your{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                sustainable{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                goals and{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                accelerate{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                your{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                digital transformation{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                process{" "}
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection:"column",
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.up("lg")]: {
                  display: "block",
                  width: "40%",
                },
              })}
            >

            <Box>
              <img width="100%" src={Slide1} alt="" />
            </Box>
            <Typography
              sx={(theme) => ({
                textAlign: "center",
                marginTop: "16px",
                fontSize: "14px",
                color: "#FAFAFA",
                [theme.breakpoints.up("lg")]: {
                  textAlign: "left",
                },
              })}
            >
              Control and Monitoring System for Air Conditioning Manufacturers
            </Typography>
            <Button
              sx={{
                marginTop: "12px",
                paddingY: "8px",
                paddingX: "32px",
                border: "2px solid #EEEEEE",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#EEEEEE",
              }}
            >
              Learn More
            </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={(theme) => ({
              marginTop: "112px",
              width: "80%",
              marginX: "auto",
              paddingX: "16px",
              [theme.breakpoints.up("lg")]: {
                marginTop: "160px",
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                marginTop: "40px",
                marginBottom: "32px",
                textAlign:"center",
                [theme.breakpoints.up("lg")]: {
                textAlign:"left",
                  marginBottom: "0px",
                  width: "50%",
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                Turnkey Industrial{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                IoT solutions that meets your{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                sustainable{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                goals and{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                accelerate{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                your{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                digital transformation{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                process{" "}
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection:"column",
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.up("lg")]: {
                  display: "block",
                  width: "40%",
                },
              })}
            >

            <Box>
              <img width="100%" src={Slide2} alt="" />
            </Box>
            <Typography
              sx={(theme) => ({
                textAlign: "center",
                marginTop: "16px",
                fontSize: "14px",
                color: "#FAFAFA",
                [theme.breakpoints.up("lg")]: {
                  textAlign: "left",
                },
              })}
            >
              Intelligent Power Loggers
            </Typography>
            <Button
              sx={{
                marginTop: "12px",
                paddingY: "8px",
                paddingX: "32px",
                border: "2px solid #EEEEEE",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#EEEEEE",
              }}
            >
              Learn More
            </Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={(theme) => ({
              marginTop: "112px",
              width: "80%",
              marginX: "auto",
              paddingX: "16px",
              [theme.breakpoints.up("lg")]: {
                marginTop: "160px",
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                marginTop: "40px",
                marginBottom: "32px",
                textAlign:"center",
                [theme.breakpoints.up("lg")]: {
                textAlign:"left",
                  marginBottom: "0px",
                  width: "50%",
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                Turnkey Industrial{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                IoT solutions that meets your{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                sustainable{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                goals and{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                accelerate{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                your{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  lineHeight: "150%",
                  color: "#0BEAA1",
                  fontWeight: "600",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                digital transformation{" "}
              </Typography>
              <Typography
                sx={(theme) => ({
                  display:'inline',
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                process{" "}
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection:"column",
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.up("lg")]: {
                  display: "block",
                  width: "40%",
                },
              })}
            >

            <Box>
              <img width="100%" src={Slide3} alt="" />
            </Box>
            <Typography
              sx={(theme) => ({
                textAlign: "center",
                marginTop: "16px",
                fontSize: "14px",
                color: "#FAFAFA",
                [theme.breakpoints.up("lg")]: {
                  textAlign: "left",
                },
              })}
            >
              IoT Development for OEMs
            </Typography>
            <Button
              sx={{
                marginTop: "12px",
                paddingY: "8px",
                paddingX: "32px",
                border: "2px solid #EEEEEE",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#EEEEEE",
              }}
            >
              Learn More
            </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;

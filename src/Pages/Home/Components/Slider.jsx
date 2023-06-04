import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Slide1 from "../../../Assets/images/Picture1.png";
import Slide2 from "../../../Assets/images/Picture2.png";
import Slide3 from "../../../Assets/images/Picture16.png";
import LeftChevron from "../../../Assets/icons/left-chevron.svg";
import RightChevron from "../../../Assets/icons/right-chevron.svg";
import "swiper/swiper.min.css";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const SliderControls = ({ swiperRef }) => (
  <Box
    sx={{
      width: "100%",
      position: "absolute",
      zIndex: "10",
      top: "40%",
    }}
  >
    <Box
      sx={{
        width: "95%",
        marginX: "auto",
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
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        paddingBottom: "50px",
        backgroundImage: 'url("/home-hero-bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        [theme.breakpoints.up("lg")]: {
          height: "700px",
        },
      })}
    >
      <SliderControls swiperRef={swiperRef} />
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Box
            sx={(theme) => ({
              marginTop: "112px",
              width: "70%",
              marginX: "auto",
              paddingX: "16px",
              [theme.breakpoints.up("lg")]: {
                marginTop: "200px",
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                marginBottom: "32px",
                textAlign: "center",
                [theme.breakpoints.up("lg")]: {
                  textAlign: "left",
                  marginBottom: "0px",
                  width: "50%",
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  display: "inline",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                IEL-300 series, intelligent energy and power loggers with
                integrated IoT are made for a variety of uses and applications
                including energy audits, solar system monitoring, telecom site
                monitoring, street light monitoring and control, and general
                power monitoring applications.
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.up("lg")]: {
                  display: "block",
                  width: "40%",
                },
              })}
            >
              <Box sx={{maxWidth:"600px"}}>
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
                Intelligent Power Loggers
              </Typography>
              <Link to="intelligent-power-loggers">
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
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={(theme) => ({
              marginTop: "112px",
              width: "70%",
              marginX: "auto",
              paddingX: "16px",
              [theme.breakpoints.up("lg")]: {
                marginTop: "200px",
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                marginBottom: "32px",
                textAlign: "center",
                [theme.breakpoints.up("lg")]: {
                  textAlign: "left",
                  marginBottom: "0px",
                  width: "50%",
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  display: "inline",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                The PUC-xxx Series is intended for Packaged Units Air
                Conditioning OEMs who desire an advanced, yet user-friendly
                control board with built-in sequence control, user interface
                customization, and Internet of Things connectivity.
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.up("lg")]: {
                  display: "block",
                  width: "40%",
                },
              })}
            >
              <Box sx={{maxWidth:"600px"}}>
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
                Control and Monitoring System for Air Conditioning Manufacturers
              </Typography>
              <Link to="control-and-monitoring-system-for-air-conditioning-manufacturers">
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
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={(theme) => ({
              marginTop: "112px",
              width: "70%",
              marginX: "auto",
              paddingX: "16px",
              [theme.breakpoints.up("lg")]: {
                marginTop: "200px",
                display: "flex",
                justifyContent: "space-between",
                width: "83%",
              },
            })}
          >
            <Box
              sx={(theme) => ({
                marginBottom: "32px",
                textAlign: "center",
                [theme.breakpoints.up("lg")]: {
                  textAlign: "left",
                  marginBottom: "0px",
                  width: "50%",
                },
              })}
            >
              <Typography
                sx={(theme) => ({
                  display: "inline",
                  fontSize: "20px",
                  fontWeight: "500",
                  lineHeight: "150%",
                  color: "#FAFAFA",
                  [theme.breakpoints.up("lg")]: {
                    textAlign: "left",
                    fontSize: "30px",
                  },
                })}
              >
                Turnkey Industrial IoT solutions that meets your sustainable
                goals and accelerate your digital transformation process.
              </Typography>
            </Box>
            <Box
              sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                [theme.breakpoints.up("lg")]: {
                  display: "block",
                  width: "40%",
                },
              })}
            >
              <Box sx={{maxWidth:"600px"}}>
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
                IoT Development for OEMs
              </Typography>
              <Link to="iot-development-for-oems-&-prototyping">
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
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Slider;

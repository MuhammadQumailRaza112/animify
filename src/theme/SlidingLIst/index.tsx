import { Box } from "@mui/material";
import React, { useRef} from "react";

const HorizontalScrollView = ({ children }: {children: React.ReactNode}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);



  return (
    <Box sx={{ position: "relative", 
      width: '50%',
    overflow: "hidden" }}>
      {/* Left Fade */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: 100,
            background: "linear-gradient(to right, #010101, rgba(0,0,0,0))",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        className="content-wrapper"
        sx={{
          display: "flex",
          gap: 20,
          margin: 'auto',
          marginTop: '20px',
          alignSelf:'center',
          overflowX: "auto",
          scrollBehavior: "smooth",
          paddingX: 2,
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar in WebKit browsers
          msOverflowStyle: "none", // Hide scrollbar in IE
          scrollbarWidth: "none", // Hide scrollbar in Firefox
        }}
      >
        {children}
      </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 100,
            background: "linear-gradient(to left, #010101, rgba(255,255,255,0))",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
    </Box>
  );
};

export default HorizontalScrollView;

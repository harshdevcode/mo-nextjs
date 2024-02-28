import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import miniorangeIcon from "../../../public/mO-icon.webp";

const SignUpSuccess = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center mb-4">
        <Image
          src={miniorangeIcon}
          width={150}
          height={150}
          alt="Customer Image"
        />
      </div>
      <Typography variant="h3" align="center" gutterBottom>
        Thank you for your interest in miniOrange
      </Typography>
      <Typography
        className="mt-5"
        variant="h5"
        align="center"
        style={{ fontSize: "28px" }}
      >
        Kindly check your inbox to activate your account. You will also receive
        login credentials and instructions via email.
      </Typography>
      <Typography
        className="mt-5"
        variant="h6"
        align="center"
        style={{ fontSize: "18px" }}
      >
        Feel free to reach out to us regarding your use-case on{" "}
        <span style={{ color: "#eb5424" }}>info@xecurify.com</span>
      </Typography>
    </Container>
  );
};

export default SignUpSuccess;

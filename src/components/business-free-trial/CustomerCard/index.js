import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/variables.module.scss";

const CustomerCard = ({ imageSrc, quote, visible, name, designation, width }) => {
  return (
    <div
      style={{ display: visible ? "block" : "none" }}
      className={styles["customer-card-margin"]}
    >
      <Card className={`ms-2 ${styles["customer-card"]}`} sx={{
          width: { xs: "auto", md: "580px" },
          height: { xs: "auto", md: "580px" }, 
        }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {/* <div style={{ width: "100%", height: "50px", display: "flex" }}> */}
              <Image
                src={imageSrc}
                width={width}
                height={45}
                className="mt-4 ms-2"
                alt="Customer Image"
              />
            {/* </div> */}
          </Typography>
          <div>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className={`${styles["left-quote-icon"]}`}
            />
            <Typography
              className={`${styles["customer-detail-text"]}`}
              variant="h6"
              component="div"
            >
              {quote}
            </Typography>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className={`${styles["right-quote-icon"]}`}
            />
          </div>
          <div style={{ float: "right" }}>
            <Typography variant="h6" style={{ color: "#fff", fontFamily:"Sora-Regular" }}>
              {name}
            </Typography>
            <Typography variant="h6" style={{ color: "#eb5424", fontFamily:"Sora-Regular" }}>
              {designation}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerCard;

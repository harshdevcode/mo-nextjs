import variables from "../../styles/variables.module.scss";
import Image from "next/image";
import BusinessFreeTrialForm from "@/components/business-free-trial/BusinessFreeTrialForm";
import CustomerCard from "@/components/business-free-trial/CustomerCard";
import { Typography } from "@mui/material";
import miniorangeLogo from "../../../public/miniorange-logo.svg";
import { customerData } from "../../../utils/customer-data";
import { useEffect, useState } from "react";
import styles from "../../styles/variables.module.scss";

export default function BusinessFreeTrial() {
  const [isVisible, setIsVisible] = useState(false); // State variable to control visibility

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === customerData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Clear the interval when the component unmounts or when the current card index changes
    return () => clearInterval(interval);
  }, [currentCardIndex]); // Add currentCardIndex as a dependency

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-start">
          <div
            className={`col-md-6 ${variables.title} ${styles["custom-background"]} ${styles["custom-background-with-image"]}`}
          >
            <div className="d-flex flex-column ms-1">
              <Image
                className="ms-5"
                src={miniorangeLogo}
                width={200}
                height={200}
                alt="miniOrange Logo"
              />
              <div className="row ms-5">
                <Typography
                  className={`${styles["text-style"]}`}
                  variant="h3"
                  sx={{fontFamily:"Sora-Regular", fontWeight:"600", fontSize:"52px", lineHeight:"77.48px"}}
                  gutterBottom
                >
                  We will take care of all your IAM needs for you!
                </Typography>
              </div>
              <div className={`${styles["customer-card-position"]}`}>
                {customerData.map((customer, index) => (
                  <CustomerCard
                    key={index}
                    imageSrc={customer.imageSrc}
                    quote={customer.quote}
                    name={customer.name}
                    width={customer.width}
                    designation={customer.designation}
                    visible={index === currentCardIndex}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-5">
            <div className="mt-5"></div>
            <div className="container">
              <div className="row ms-5">
                <Typography className="bft-heading" variant="h4" gutterBottom sx={{fontFamily:"Sora-Regular"}}>
                  Start your Free Trial Now!
                </Typography>
              </div>
              <div className="ms-5">
                <BusinessFreeTrialForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

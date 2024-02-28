// // import variables from '../../styles/variables.module.scss'
// // import { useFormik, Field, Form, FieldArray } from 'formik';
// // import * as yup from 'yup';
// // import BusinessFreeTrialForm from './BusinessFreeTrialForm';
// // import CustomerCard from './CustomerCard';

// // export default function BusinessFreeTrial() {

// //   return (
// //     <>
// //       <div className="container-fluid">
// //         <div className="row justify-content-start">
// //           <div className={`col-md-5 ${variables.title}`}>

// //             <div className="d-flex flex-column">
// //               <img alt="miniorange logo" loading="lazy" width="250" height="55" src="https://www.miniorange.com/images/logo/miniorange-logo.webp"/>
// //               <div style={{ marginTop: '9rem', marginLeft: '3rem', marginRight: '3rem'}}>
// //                 <CustomerCard />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-7">
// //             <div className='mt-5'></div>
// //             <div className='ms-5'>
// //               <BusinessFreeTrialForm/>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //     </>
// //   )
// // }


// import React, { useState } from "react";
// import Image from "next/image";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import {
//   Button,
//   FormHelperText,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Grid,
//   Typography,
// } from "@mui/material";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import axios from "axios";
// import { aoi } from "../../../../utils/area-of-interest-options";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import moSuccess from "../moSuccess"

// const style = { textAlign: "start" };
// const formStyle = { marginBottom: "10px" };

// export default function BusinessFreeTrialForm() {
//   const [subOptions, setSubOptions] = useState([]);
//   const [phone, setPhoneNumber] = useState("");
//   const [valid, setValid] = useState(true);
//   const [hasError, setHasError] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       fname: "",
//       lname: "",
//       aoi: "",
//       areaOfInterest: "",
//       phone: "",
//     },
//     onSubmit: async (values, { setSubmitting }) => {
//       console.log(values);
//       var response = null;
//       try {
//         response = await axios.post(
//           "https://test.miniorange.in/moas/savedemocustomer",
//           values,
//           {
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//             maxRedirects: 0, // Disable redirection
//           }
//         );

//         const location = response.headers.location; // Accessing the Location header
//         const status = response.status; // Accessing the status code

//         console.log("Redirect URL:", location);
//         console.log("Status Code:", status);
//         console.log("response", response.data);
//       } catch (error) {
//         console.log("Errorresponse:", response);
//         console.error("Error:", error);
//         setHasError(true);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//     validationSchema: yup.object({
//       fname: yup.string().trim().required("First Name is required"),
//       lname: yup.string().trim().required("Last Name is required"),
//       username: yup
//         .string()
//         .email("Must be a valid email")
//         .required("Email is required"),
//     }),
//   });

//   const handleAreaOfInterestChange = (event) => {
//     const selectedAreaOfInterest = event.target.value;
//     const selectedAoi = aoi.find((c) => c.value === selectedAreaOfInterest);
//     setSubOptions(selectedAoi.subOptions);
//     formik.setFieldValue("aoi", selectedAreaOfInterest);
//   };

//   const handlePhoneInputChange = (value) => {
//     setPhoneNumber(value);
//     setValid(validatePhoneNumber(value));
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
//     return phoneNumberPattern.test(phoneNumber);
//   };

//   return (
//     <div className="vh-100 d-flex flex-column mt-4 ms-2">
//       {!hasError ?(
//       <form className="w-100" onSubmit={formik.handleSubmit}>
//         <div style={formStyle}>
//           <InputLabel htmlFor="aoi" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
//             Select Area Of Interest <span style={{ color: "red" }}> *</span>
//           </InputLabel>
//           <Select
//             className="mt-2"
//             defaultValue="IdP"
//             name="aoi"
//             fullWidth
//             size="large"
//             value={formik.values.aoi}
//             onChange={handleAreaOfInterestChange}
//             onBlur={formik.handleBlur}
//             sx={{
//               width: "93%",
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   border: "1.33px solid rgba(219, 219, 219, 1)",
//                 },
//                 "&:hover fieldset": {
//                   border: "1.33px solid rgba(219, 219, 219, 1)",
//                 },
//                 "&.Mui-focused fieldset": {
//                   border: "1.33px solid rgba(219, 219, 219, 1)",
//                 },
//               },
//             }}
//             error={formik.touched.aoi && Boolean(formik.errors.aoi)}
//             displayEmpty
//           >
//             <MenuItem value="" disabled>
//               Select what are you looking for!
//             </MenuItem>
//             {aoi.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//           {formik.touched.aoi && formik.errors.aoi && (
//             <FormHelperText sx={{ color: "red" }}>
//               {formik.errors.aoi}
//             </FormHelperText>
//           )}
//         </div>

//         {subOptions.length > 0 && (
//           <div className="mt-4">
//             <InputLabel sx={style}>Product Category</InputLabel>
//             <Select
//               defaultValue="Single Sign-On Solution"
//               name="areaOfInterest"
//               fullWidth
//               size="large"
//               className="mt-2"
//               sx={{
//                 width: "93%",
//                 "& input::placeholder": {
//                   color: "rgba(0, 0, 0, 0.54)",
//                 },
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&:hover fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&.Mui-focused fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                 },
//               }}
//               value={formik.values.areaOfInterest}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.areaOfInterest &&
//                 Boolean(formik.errors.areaOfInterest)
//               }
//               displayEmpty
//             >
//               <MenuItem value="" disabled>
//                 Select Product Category {/* Placeholder text */}
//               </MenuItem>
//               {subOptions.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </Select>

//             {formik.touched.areaOfInterest && formik.errors.areaOfInterest && (
//               <FormHelperText sx={{ color: "red" }}>
//                 {formik.errors.areaOfInterest}
//               </FormHelperText>
//             )}
//           </div>
//         )}

//         <Grid container spacing={2} alignItems="center" className="mt-3">
//           <Grid item xs={6}>
//             <InputLabel
//               htmlFor="username"
//               style={{ color: "rgba(0, 0, 0, 0.54)" }}
//             >
//               Work Email <span style={{ color: "red" }}> *</span>
//             </InputLabel>
//             <TextField
//               className="mt-2"
//               type="text"
//               defaultValue="harsh.raj@xecurify.com"
//               name="username"
//               variant="outlined"
//               placeholder="Email"
//               size="large"
//               sx={{
//                 width: "85%",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&:hover fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&.Mui-focused fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                 },
//               }}
//               value={formik.values.username}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.username && Boolean(formik.errors.username)}
//               helperText={formik.touched.username && formik.errors.username}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={6} className="mt-4">
//             <PhoneInput
//               className="mt-2"
//               country={"in"}
//               value={phone}
//               onChange={handlePhoneInputChange}
//               inputProps={{ required: true }}
//               inputStyle={{
//                 width: "85%",
//                 height: "56px",
//                 fontSize: "16px",
//                 border: "1.33px solid rgba(219, 219, 219, 1)",
//                 borderRadius: "4px",
//                 paddingLeft: "2.5rem",
//               }}
//               dropdownStyle={{
//                 width: "250px",
//                 top: "56px",
//                 fontSize: "16px",
//                 border: "1.33px solid rgba(219, 219, 219, 1)",
//                 borderRadius: "4px",
//               }}
//             />
//             {!valid && (
//               <FormHelperText sx={{ color: "red" }}>
//                 Please enter a valid phone number.
//               </FormHelperText>
//             )}
//           </Grid>
//         </Grid>

//         <Grid container spacing={2} alignItems="center" className="mt-1">
//           <Grid item xs={6} style={formStyle}>
//             {" "}
//             {/* Adjusted from xs={6} to xs={5} */}
//             <InputLabel
//               htmlFor="fname"
//               style={{ color: "rgba(0, 0, 0, 0.54)" }}
//             >
//               Enter your name <span style={{ color: "red" }}> *</span>
//             </InputLabel>
//             <TextField
//               className="mt-2"
//               type="text"
//               variant="outlined"
//               defaultValue="harsh"
//               name="fname"
//               placeholder="First Name"
//               size="large"
//               sx={{
//                 width: "85%",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&:hover fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&.Mui-focused fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                 },
//               }}
//               value={formik.values.fname}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.fname && Boolean(formik.errors.fname)}
//               helperText={formik.touched.fname && formik.errors.fname}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={6} style={formStyle}>
//             {" "}
//             {/* Adjusted from xs={6} to xs={5} */}
//             <InputLabel
//               htmlFor="lname"
//               style={{ color: "rgba(0, 0, 0, 0.54)" }}
//             >
//               Last Name <span style={{ color: "red" }}> *</span>
//             </InputLabel>
//             <TextField
//               className="mt-2"
//               type="text"
//               variant="outlined"
//               defaultValue="raj"
//               name="lname"
//               placeholder="Last Name"
//               size="large"
//               sx={{
//                 width: "85%",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&:hover fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                   "&.Mui-focused fieldset": {
//                     border: "1.33px solid rgba(219, 219, 219, 1)",
//                   },
//                 },
//               }}
//               value={formik.values.lname}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.lname && Boolean(formik.errors.lname)}
//               helperText={formik.touched.lname && formik.errors.lname}
//               fullWidth
//             />
//           </Grid>
//         </Grid>

//         <div className="mb-3 mt-3">
//           <InputLabel htmlFor="query" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
//             Write your Query
//           </InputLabel>
//           <TextField
//             className="mt-2"
//             type="text"
//             variant="outlined"
//             defaultValue="jdkdkdk"
//             name="query"
//             placeholder="Query"
//             size="large"
//             sx={{
//               width: "93%",
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   border: "1.33px solid rgba(219, 219, 219, 1)",
//                 },
//                 "&:hover fieldset": {
//                   border: "1.33px solid rgba(219, 219, 219, 1)",
//                 },
//                 "&.Mui-focused fieldset": {
//                   border: "1.33px solid rgba(219, 219, 219, 1)",
//                 },
//               },
//             }}
//             value={formik.values.query}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.query && Boolean(formik.errors.query)}
//             helperText={formik.touched.query && formik.errors.query}
//             fullWidth
//           />
//         </div>
//         <Typography
//           variant="body1"
//           className="mt-2"
//           style={{ color: "rgba(158, 158, 158, 1)" }}
//         >
//           By clicking Sign up Now, you agree to our{" "}
//           <span style={{ color: "rgba(68, 68, 68, 1)" }}>
//             <u>Privacy Policy</u>
//           </span>{" "}
//           and{" "}
//           <span style={{ color: "rgba(68, 68, 68, 1)" }}>
//             <u>User Agreement</u>
//           </span>
//         </Typography>


//         <Button
//           type="submit"
//           variant="contained"
//           size="large" // Change size to 'large' for a larger button
//           className="mt-5"
//           sx={{
//             width: "22%",
//             maxWidth: "400px",
//             background: "#eb5424",
//             color: "#fff",
//             height: "50px",
//             borderRadius: "8px",
//           }}
//         >
//           Sign Up{" "}
//           <span className="ms-2">
//             <FontAwesomeIcon icon={faArrowRight} />
//           </span>
//         </Button>
//       </form>
//       ):<moSuccess/>}
//     </div>
//   );
// }

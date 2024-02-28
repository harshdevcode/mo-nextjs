import React, { useState } from 'react'
import axios from 'axios';

export default function Support() {
  const [ccode, setCcode] = useState("");
  const [timeZoneVal, setTimeZoneVal] = useState("");
  const [parts, setParts] = useState("");
  const [email, setEmail] = useState("");
  const [checkInVal, setCheckInVal] = useState("");
  const [c, setC] = useState("");
  const [look, setLook] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if ($("#request_demo_form").attr("id") === "request_demo_form") {
      setCcode($(".country-codes-format").val());
      setTimeZoneVal($("#dropdownTimeZone").val());
      setParts($(".country-codes-format").val());
      setEmail($("#request_demo_email").val());
      const query = isValidEmail(email) ? `Demo Timeframe Zone: ${checkInVal} ${timeZoneVal}` : "";
      setC($("#request_demo_phone").val());
      setLook("Schedule A Demo[Form]");
      // Now you can use the state variables (ccode, timeZoneVal, parts, email, c, look) for form submission
    }
    else if (formId !== 'mo_external_contact_form') {
      setEmail($("#person_email").val());
      setCcode($("#countryCodes").val());
      setParts(ccode);
      if (parts.length > 1) setCcode(parts);
      setC($("#person_phone").val());
      setQuery($("#person_query").val());
      setLook($(".what_you_looking_for").val() + (desc_type ? `(${desc_type})` : ''));
    }
  };
  return (
    <div>support</div>
  )
}




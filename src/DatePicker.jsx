import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function InlineDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      {/* <DatePicker
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <DatePicker
        disableToolbar
        variant="inline"
        label="Only calendar"
        helperText="No year selection"
        value={selectedDate}
        onChange={handleDateChange}
      /> */}
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="With keyboard"

        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={date => handleDateChange(date)}
      />
    </Fragment>
  );
}

export default InlineDatePicker;

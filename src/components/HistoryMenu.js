import React from "react";
import { Button } from "reactstrap";

const HistoryMenu = ({ changeDate, date, currentDate }) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <div>
      <Button
        color="primary"
        tag="input"
        type="button"
        value="Yesterday"
        onClick={() => changeDate(yesterday.toJSON().slice(0, 10))}
      />
      <Button
        color="primary"
        tag="input"
        type="button"
        value="Today"
        onClick={() => changeDate(currentDate)}
      />
    </div>
  );
};

export default HistoryMenu;

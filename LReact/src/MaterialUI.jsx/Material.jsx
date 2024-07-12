import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import style from "../components/styles.module.css";

const initialValue = dayjs("2024-07-12");

export function Material() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar className={style.bgColor} defaultValue={initialValue} />
    </LocalizationProvider>
  );
}

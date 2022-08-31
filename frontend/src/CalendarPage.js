import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "./css/CalendarPage.css";
import CalendarNav from "./components/CalendarNav";

const CalendarPage = ({ checked_date }) => {
  const [value, onChange] = useState(new Date());
  const refinedDate = [];
  for (const value of checked_date) {
    console.dir(value);
  }

  return (
    <div className="calendar_page">
     <CalendarNav></CalendarNav>
      <div className="calendar_page_main">
        <header className="calendar_page_header">
          <p className="calendar_page_title">제로웨이스트 캘린더</p>
          <div className="calender_page_title_sub">
            <p className="calender_page_title_sub_title">
              제로웨이스트 일기 또는 커뮤니티에 글을 작성해서 캘린더에 스탬프를
              모아보세요
            </p>
          </div>
        </header>
        <section className="calendar_page_contents">
          <div className="calendar_page_goto_other">
            <a className="calendar_page_goto_edit" href="#goto">
              일기 쓰러 가기 -&gt;
            </a>
            <a className="calendar_page_goto_edit" href="goto">
              글 쓰러 가기 -&gt;
            </a>
          </div>
          <div className="calendar_page_my_calendar">
            <Calendar
              onChange={onChange}
              value={value}
              onClickDay={(value, event) =>
                window.location.assign(`/${moment(value).format("YYYY-MM-DD")}`)
              }
              calendarType="US"
              formatDay={(locale, date) => moment(date).format("D")}
              formatShortWeekday={(locale, date) => moment(date).format("ddd")}
              formatMonthYear={(locale, date) => moment(date).format("YYYY.MM")}
              showNeighboringMonth={false}
              next2Label={null}
              prev2Label={null}
              tileClassName={({ date, view }) => {
                if (
                  checked_date.find(
                    (x) => x === moment(date).format("YYYY-MM-DD")
                  )
                ) {
                  return "calendar_page_highlight";
                }
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CalendarPage;
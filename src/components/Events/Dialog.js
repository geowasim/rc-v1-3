// import React from "react";
// import "./style.css";
// import { useState, useRef } from "react";
// import dayjs from "dayjs";
// import DateRange from "./DateRange";

// function Dialog({
//   setAddEvent,
//   addEvent,
//   selectedDate,
//   eventsArray,
//   setEventsArray,
//   setCreateEvent,
//   calendarEvent,
//   setSelectedDate,
//   setCalendarEvent,
//   description,
// }) {
//   const [addTitle, setAddTitle] = useState("");
//   const [startDate, setStartDate] = useState(selectedDate.toDate());
//   const [endDate, setEndDate] = useState(selectedDate.toDate());

//   function handleChange(e) {
//     setAddTitle(e.target.value);
//   }

//   const handleSubmit = (e)=> {
//     const newEventsArray = {
//       id: new Date().valueOf(),
//       date: dayjs(dayjs(selectedDate).format("YYYY MM DD")),
//       startDate: startDate,
//       endDate: endDate,
//       title: `${addTitle}`,
//       color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
//       background: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
//       message: description,
//     };
//     e.preventDefault();
//     setEventsArray([...eventsArray, newEventsArray]);
//     setAddTitle("");
//     setAddEvent(!addEvent);
//     setSelectedDate("");
//     setCreateEvent(null);
//     setCalendarEvent(null);
//   }

//   const handleDelete = (id) => {
//     const newEventsArray = eventsArray.filter((e) => e.id !== id);
//     setEventsArray(newEventsArray);
//     setAddEvent(false);
//     setCreateEvent(null);
//     setCalendarEvent(null);
//   };

//   const handleCancel = () => {
//     setAddEvent(false);
//     setCreateEvent(null);
//     setCalendarEvent(null);
//   };

//   const inputEventRef = useRef();

//   return (
//     <div className="dialog-container">
//       <div className="box">
//         <div className="dialog-box">
//           <h3>Event</h3>
//           {calendarEvent ? <p>Edit {calendarEvent.title}</p> : <p>Add Event</p>}
//           <form onSubmit={(e) => handleSubmit(e)}>
//             <input
//               className="mm-popup__input"
//               ref={inputEventRef}
//               type="text"
//               name="title"
//               value={addTitle}
//               onChange={(e) => handleChange(e)}
//               required
//             />
//             <button
//               type="submit"
//               onClick={() => {
//                 // setCurrentEvent(null);
//               }}
//               className="yes"
//             >
//               Save
//             </button>
//             {/* Date_range----- */}
//             <DateRange
//               startDate={startDate}
//               endDate={endDate}
//               setStartDate={setStartDate}
//               setEndDate={setEndDate}
//             />
//           </form>
//           <div className="action">
//             <button onClick={() => handleCancel()} className="no">
//               Cancel{" "}
//             </button>
//             {calendarEvent && (
//               <button
//                 onClick={() => {
//                   handleDelete(calendarEvent.id);
//                 }}
//               >
//                 {" "}
//                 Delete{" "}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Dialog;

// /**
//  *  {addEvent && ( //show events onClick on event
//         <div className="test_dialog">
//           <p>{calendarEvent.id}</p>
//           <p>{`${
//             calendarEvent.title
//               ? "Edit " + calendarEvent.title
//               : "Add new event"
//           }`}</p>

//           <button
//             onClick={() => {
//               setAddEvent(!addEvent);
//               // setCalendarEvent("");
//             }}
//           >
//             mmmm
//           </button>
//  */

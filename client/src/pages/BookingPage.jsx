import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

// Define myEventsList with sample events
const myEventsList = [
  {
    title: "Event 1",
    start: new Date(2024, 3, 1),
    end: new Date(2024, 3, 3),
  },
  {
    title: "Event 2",
    start: new Date(2024, 3, 5),
    end: new Date(2024, 3, 7),
  },
  // Add more events as needed
];

export default function BookingPage() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

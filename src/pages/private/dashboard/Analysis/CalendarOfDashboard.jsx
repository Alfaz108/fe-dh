import { Calendar, Badge } from "rsuite";

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: "10:30 am", title: "Meeting" },
        { time: "12:00 pm", title: "Lunch" },
        { time: "09:30 pm", title: "Lunch" },

        { time: "12:00 pm", title: "Lunch" },

        { time: "12:00 pm", title: "Lunch" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ];
    default:
      return [];
  }
}

const CalendarOfDashboard = () => {
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }
  return (
    <div
      className="card mb-3"
      style={{ width: "100%", height: "350px", border: "none" }}>
      <Calendar compact renderCell={renderCell} />{" "}
    </div>
  );
};
// ReactDOM.render(<App />, document.getElementById("root"));

export default CalendarOfDashboard;

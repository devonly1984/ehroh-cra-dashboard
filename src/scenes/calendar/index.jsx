import { useState } from "react";
import FullCalendar, { CalendarApi, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Calendar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [currentEvents, setCurrentEvents] = useState([]);
	const handleDateClick = (selected) => {
		const title = prompt("Please enter a new title for your event");
		const calenderApi = selected.view.calendar;
		calenderApi.unselect();
		if (title) {
			CalendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};
	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure want to delete the event? ${selected.event.title}`
			)
		) {
			selected.event.remove();
		}
	};
	return (
		<Box m="20px">
			<Header title="Calendar" subtitle="Full Calendar Interactive Page" />
			<Box display="flex" justifyContent="space-between"></Box>
		</Box>
	);
};

export default Calendar;

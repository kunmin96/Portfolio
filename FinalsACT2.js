document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: 600,
      events: [
        { title: 'Due: 1984 Return', start: '2025-05-22' },
        { title: 'Meeting with Donor', start: '2025-05-25' },
      ]
    });
    calendar.render();
  }
});

import React, { useState } from 'react';

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Investor Meeting',
      date: new Date(2025, 0, 15, 10, 0),
      endDate: new Date(2025, 0, 15, 11, 30),
      description: 'Meeting with Sequoia Capital',
      location: 'Virtual',
      type: 'meeting'
    },
    {
      id: 2,
      title: 'Pitch Deck Review',
      date: new Date(2025, 0, 17, 14, 0),
      endDate: new Date(2025, 0, 17, 15, 0),
      description: 'Internal review of the pitch deck',
      location: 'Office',
      type: 'internal'
    },
    {
      id: 3,
      title: 'Product Demo',
      date: new Date(2025, 0, 20, 13, 0),
      endDate: new Date(2025, 0, 20, 14, 0),
      description: 'Demo of the new product features',
      location: 'Client Office',
      type: 'demo'
    }
  ]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    endTime: '',
    description: '',
    location: '',
    type: 'meeting'
  });
  const [showEventForm, setShowEventForm] = useState(false);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
      
      // Check if there are events on this day
      const dayEvents = events.filter(event => 
        event.date.getDate() === day && 
        event.date.getMonth() === month && 
        event.date.getFullYear() === year
      );
      
      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${dayEvents.length > 0 ? 'has-events' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <div className="day-number">{day}</div>
          {dayEvents.length > 0 && (
            <div className="day-events">
              {dayEvents.slice(0, 2).map(event => (
                <div key={event.id} className={`event-indicator ${event.type}`}>
                  {event.title}
                </div>
              ))}
              {dayEvents.length > 2 && (
                <div className="more-events">+{dayEvents.length - 2} more</div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleNewEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    
    const [year, month, day] = newEvent.date.split('-').map(Number);
    const [hours, minutes] = newEvent.time.split(':').map(Number);
    const [endHours, endMinutes] = newEvent.endTime.split(':').map(Number);
    
    const eventDate = new Date(year, month - 1, day, hours, minutes);
    const eventEndDate = new Date(year, month - 1, day, endHours, endMinutes);
    
    const event = {
      id: events.length + 1,
      title: newEvent.title,
      date: eventDate,
      endDate: eventEndDate,
      description: newEvent.description,
      location: newEvent.location,
      type: newEvent.type
    };
    
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      time: '',
      endTime: '',
      description: '',
      location: '',
      type: 'meeting'
    });
    setShowEventForm(false);
  };

  const getSelectedDateEvents = () => {
    if (!selectedDate) return [];
    
    return events.filter(event => 
      event.date.getDate() === selectedDate.getDate() && 
      event.date.getMonth() === selectedDate.getMonth() && 
      event.date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <div className="calendar-navigation">
          <button onClick={handlePrevMonth} className="nav-button">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h2>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h2>
          <button onClick={handleNextMonth} className="nav-button">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <button 
          className="add-event-button"
          onClick={() => setShowEventForm(true)}
        >
          Add Event
        </button>
      </div>
      
      <div className="calendar-container">
        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">
          {renderCalendar()}
        </div>
      </div>
      
      {selectedDate && (
        <div className="selected-date-events">
          <h3>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
          
          {getSelectedDateEvents().length > 0 ? (
            <div className="events-list">
              {getSelectedDateEvents().map(event => (
                <div key={event.id} className={`event-card ${event.type}`}>
                  <div className="event-time">
                    {formatTime(event.date)} - {formatTime(event.endDate)}
                  </div>
                  <div className="event-details">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <div className="event-location">
                      <span className="material-symbols-outlined">location_on</span>
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-events">No events scheduled for this day.</p>
          )}
        </div>
      )}
      
      {showEventForm && (
        <div className="event-form-overlay">
          <div className="event-form">
            <div className="form-header">
              <h3>Add New Event</h3>
              <button 
                className="close-button"
                onClick={() => setShowEventForm(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddEvent}>
              <div className="form-group">
                <label htmlFor="title">Event Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newEvent.title}
                  onChange={handleNewEventChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleNewEventChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Start Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleNewEventChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="endTime">End Time</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={newEvent.endTime}
                    onChange={handleNewEventChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newEvent.description}
                  onChange={handleNewEventChange}
                  rows="3"
                ></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newEvent.location}
                    onChange={handleNewEventChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="type">Event Type</label>
                  <select
                    id="type"
                    name="type"
                    value={newEvent.type}
                    onChange={handleNewEventChange}
                  >
                    <option value="meeting">Meeting</option>
                    <option value="internal">Internal</option>
                    <option value="demo">Demo</option>
                    <option value="deadline">Deadline</option>
                  </select>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setShowEventForm(false)} className="cancel-button">
                  Cancel
                </button>
                <button type="submit" className="save-button">
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
const e=`# AUTOKING — Detailing Studio Bot\r
\r
## Project Description\r
\r
AUTOKING is a Telegram bot for a detailing studio. Clients book services through the bot: they choose a service, date and time, and leave their name and phone number. The bot maintains a service catalog with price lists by vehicle class, integrates with Google Calendar and Google Sheets, and sends short SMS reminders 24 hours and 2 hours before the visit. The admin panel is implemented with buttons: view and manage bookings, block time slots.\r
\r
## Core Features\r
\r
### 1. Service Booking\r
\r
- Choose a service from the list (paint protection film, tinting, polishing/ceramic/cleaning, antichrome, colored PPF, vehicle branding, etc.).\r
- For some services — select a subcategory (e.g. interior cleaning: full, ceiling, seats, etc.) with prices by vehicle class (sedan, SUV, jeep/minivan).\r
- Select a date from available days (up to 5 days ahead) and time from free slots (business hours 10:00–20:00, 1-hour slots).\r
- Enter name and phone; optionally agree to SMS reminder.\r
- Confirm booking; create event in Google Calendar and row in Google Sheet.\r
\r
### 2. My Booking\r
\r
View the user’s current booking: service, date and time; option to cancel (with calendar event removal).\r
\r
### 3. Services and Prices\r
\r
- Category catalog: paint protection film, tinting, polishing/ceramic/cleaning, antichrome, colored PPF, branding, interior cleaning (price list), comprehensive wash (price list).\r
- Descriptions with indicative prices; for price lists — select vehicle class and see a price table (split into parts for long content to fit Telegram limits).\r
\r
### 4. Contacts and Maps\r
\r
Studio address, phone, buttons with links for directions: Google Maps, Yandex Maps, 2GIS.\r
\r
### 5. Admin Panel\r
\r
- Access by list of administrator Telegram IDs.\r
- View bookings, cancel appointments (with calendar event removal).\r
- Create a booking on behalf of a client (name, phone, service, date/time).\r
- Block slots by date and time (separate blocked_slots table).\r
\r
### 6. SMS Reminders\r
\r
- APScheduler: check upcoming visits.\r
- 24 hours and 2 hours before the visit — send a short SMS (≤40 characters) via SMS.Ru with the booking date and time.\r
\r
## Technical Solutions\r
\r
### Stack\r
\r
- **Python** — main language.\r
- **aiogram 3.x** — Telegram Bot API, FSM, keyboards.\r
- **SQLite** — storage for bookings and blocked slots (WAL, indexes, column migrations).\r
- **Google Sheets API** — append booking to a sheet (created at, name, phone, service, visit date/time, TG ID).\r
- **Google Calendar API** — create and delete booking events (1-hour slot, local timezone).\r
- **APScheduler** — scheduled tasks for SMS reminders.\r
- **SMS.Ru** (requests) — sending SMS.\r
\r
### Database\r
\r
**bookings** — bookings:\r
- id, user_id, service, datetime_text, visit_at_machine, client_name, phone, notify_sms, created_by_admin, calendar_event_id, created_at, canceled, reminded_24h, reminded_2h.\r
\r
**blocked_slots** — blocked slots:\r
- date_iso, time_hm (UNIQUE).\r
\r
Indexes on frequently used columns (canceled, visit_at_machine; user_id, canceled; date_iso, time_hm). When new columns are added in the schema, migration is performed via PRAGMA table_info and ALTER TABLE.\r
\r
### FSM\r
\r
- **BookingForm** — booking flow states: select service (and if needed category/price list item), date, time, name, phone, reminder channel.\r
- **AdminBlock** — blocking slots (date input).\r
\r
### Integrations\r
\r
- On booking creation: write to SQLite, create Google Calendar event, append row to Google Sheet.\r
- On cancel: update/flag in DB, delete calendar event.\r
- Reminders: query upcoming visits from DB, send SMS, set reminded_24h / reminded_2h flags.\r
\r
## Implementation Features\r
\r
1. **Short SMS**: text up to 40 characters for compatibility with SMS.Ru rules and tariffs.\r
2. **Local time**: all slots and reminders in the studio’s timezone (configurable).\r
3. **Free slots**: consider existing bookings and blocked slots; for the current day — only future hours.\r
4. **Button-based admin panel**: no separate web UI, all management inside Telegram.\r
\r
## Results\r
\r
- Booking automation for detailing services without phone calls.\r
- Fewer no-shows thanks to 24h and 2h reminders.\r
- Single calendar and bookings sheet for the studio.\r
- 8+ service categories, 3 external integrations (Calendar, Sheets, SMS).\r
`;export{e as default};

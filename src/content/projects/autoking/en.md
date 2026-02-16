# AUTOKING — Detailing Studio Bot

## Project Description

AUTOKING is a Telegram bot for a detailing studio. Clients book services through the bot: they choose a service, date and time, and leave their name and phone number. The bot maintains a service catalog with price lists by vehicle class, integrates with Google Calendar and Google Sheets, and sends short SMS reminders 24 hours and 2 hours before the visit. The admin panel is implemented with buttons: view and manage bookings, block time slots.

## Core Features

### 1. Service Booking

- Choose a service from the list (paint protection film, tinting, polishing/ceramic/cleaning, antichrome, colored PPF, vehicle branding, etc.).
- For some services — select a subcategory (e.g. interior cleaning: full, ceiling, seats, etc.) with prices by vehicle class (sedan, SUV, jeep/minivan).
- Select a date from available days (up to 5 days ahead) and time from free slots (business hours 10:00–20:00, 1-hour slots).
- Enter name and phone; optionally agree to SMS reminder.
- Confirm booking; create event in Google Calendar and row in Google Sheet.

### 2. My Booking

View the user’s current booking: service, date and time; option to cancel (with calendar event removal).

### 3. Services and Prices

- Category catalog: paint protection film, tinting, polishing/ceramic/cleaning, antichrome, colored PPF, branding, interior cleaning (price list), comprehensive wash (price list).
- Descriptions with indicative prices; for price lists — select vehicle class and see a price table (split into parts for long content to fit Telegram limits).

### 4. Contacts and Maps

Studio address, phone, buttons with links for directions: Google Maps, Yandex Maps, 2GIS.

### 5. Admin Panel

- Access by list of administrator Telegram IDs.
- View bookings, cancel appointments (with calendar event removal).
- Create a booking on behalf of a client (name, phone, service, date/time).
- Block slots by date and time (separate blocked_slots table).

### 6. SMS Reminders

- APScheduler: check upcoming visits.
- 24 hours and 2 hours before the visit — send a short SMS (≤40 characters) via SMS.Ru with the booking date and time.

## Technical Solutions

### Stack

- **Python** — main language.
- **aiogram 3.x** — Telegram Bot API, FSM, keyboards.
- **SQLite** — storage for bookings and blocked slots (WAL, indexes, column migrations).
- **Google Sheets API** — append booking to a sheet (created at, name, phone, service, visit date/time, TG ID).
- **Google Calendar API** — create and delete booking events (1-hour slot, local timezone).
- **APScheduler** — scheduled tasks for SMS reminders.
- **SMS.Ru** (requests) — sending SMS.

### Database

**bookings** — bookings:
- id, user_id, service, datetime_text, visit_at_machine, client_name, phone, notify_sms, created_by_admin, calendar_event_id, created_at, canceled, reminded_24h, reminded_2h.

**blocked_slots** — blocked slots:
- date_iso, time_hm (UNIQUE).

Indexes on frequently used columns (canceled, visit_at_machine; user_id, canceled; date_iso, time_hm). When new columns are added in the schema, migration is performed via PRAGMA table_info and ALTER TABLE.

### FSM

- **BookingForm** — booking flow states: select service (and if needed category/price list item), date, time, name, phone, reminder channel.
- **AdminBlock** — blocking slots (date input).

### Integrations

- On booking creation: write to SQLite, create Google Calendar event, append row to Google Sheet.
- On cancel: update/flag in DB, delete calendar event.
- Reminders: query upcoming visits from DB, send SMS, set reminded_24h / reminded_2h flags.

## Implementation Features

1. **Short SMS**: text up to 40 characters for compatibility with SMS.Ru rules and tariffs.
2. **Local time**: all slots and reminders in the studio’s timezone (configurable).
3. **Free slots**: consider existing bookings and blocked slots; for the current day — only future hours.
4. **Button-based admin panel**: no separate web UI, all management inside Telegram.

## Results

- Booking automation for detailing services without phone calls.
- Fewer no-shows thanks to 24h and 2h reminders.
- Single calendar and bookings sheet for the studio.
- 8+ service categories, 3 external integrations (Calendar, Sheets, SMS).

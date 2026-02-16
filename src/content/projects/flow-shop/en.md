# Flow — E-commerce Store (Telegram Bot)

## Project Description

Flow is a full-featured Telegram bot for an e-commerce store specializing in computer peripherals and ordering goods from Chinese platforms (Poizon, TaoBao, 1688). The bot automates the process of price calculation, order tracking, and customer interaction.

## Core Features

### 1. Price Calculation

Automatic price calculation system for goods from China, taking into account:
- Yuan to ruble exchange rate (configurable by administrator)
- Dollar exchange rate for shipping calculation
- Product weight (with hints for standard weights)
- Store commission (progressive scale depending on product price)
- Shipping cost ($7 per kilogram)

Users enter the product price in yuan and weight, then receive a detailed calculation with breakdown of product cost, shipping, and total amount.

### 2. Order Tracking

Tracking system with 7 statuses:
- In Processing
- Purchased
- At Warehouse in China
- On the Way to Customs
- Customs
- At Warehouse in Moscow
- Delivered

Each status has its own color in Google Sheets for visual control. Users can track their orders by track number, seeing complete product information including photos (up to 5 photos per product).

### 3. Loyalty Program

Points accrual system for completing tasks:
- Leave a review with photo (333 points)
- Leave a video review (500 points)
- Invite three friends (300 points)
- Order any three products (500 points)
- Total order amount 10,000₽ (500 points)

Administrator can configure individual task lists for users. Each point equals 1 ruble and can be used when paying for orders.

### 4. Keyboard Modding Services

Service catalog with descriptions and prices:
- Switch lubing (37₽ per unit)
- Deep keyboard cleaning (1390₽)
- Case sound dampening (990₽)
- Comprehensive stabilizer tuning (1290₽)
- Full custom build (2990₽)

Each service has a description, photo, and the ability to place an order directly from the bot.

### 5. Admin Panel

Full-featured admin panel for store management:
- Order management: adding, editing statuses, changing amounts
- Product management: adding products with photos, editing, deleting
- Currency rate management: configuring yuan and dollar rates
- Bot statistics: number of users, active in 24 hours, orders
- Broadcasts: mass messaging to all users
- Sending messages to specific users by @username
- Loyalty program management: accruing/deducting points, configuring tasks

## Technical Solutions

### Architecture

The bot is built on an asynchronous architecture using:
- **aiogram 3.22.0** — modern framework for Telegram bots
- **aiosqlite 0.21.0** — asynchronous SQLite database operations
- **gspread 6.2.1** — Google Sheets API integration

### Database

SQLite database with the following structure:

**users** — user information:
- user_id (PRIMARY KEY)
- username, first_name, last_name
- joined_at (registration date)

**tracks** — orders:
- id (PRIMARY KEY)
- track_number (UNIQUE)
- status (order status)
- total_price (order amount)
- user_id (FOREIGN KEY → users)

**items** — products in orders:
- id (PRIMARY KEY)
- track_id (FOREIGN KEY → tracks, CASCADE DELETE)
- name (product name)
- description (specifications)

**item_photos** — product photos:
- id (PRIMARY KEY)
- item_id (FOREIGN KEY → items, CASCADE DELETE)
- file_id (Telegram file_id, up to 5 photos per product)

**user_loyalty** — loyalty program:
- user_id (PRIMARY KEY)
- points (points balance)
- tasks_text (individual task list)

**settings** — system settings:
- key (PRIMARY KEY)
- value (exchange rates, etc.)

**settings_loyalty** — loyalty settings:
- key (PRIMARY KEY)
- value (default task list)

### Google Sheets Integration

Automatic synchronization of order data with Google Sheets:
- When order status changes, data is automatically updated in the sheet
- Color-coded status indicators for convenient visual control
- Columns: Track Number, Status, Amount, User ID, Username, Update Date
- Support for adding new orders and updating existing ones

### State Machine (FSM)

Using finite state machine for dialog management:
- CalculateState — price calculation process
- TrackOrderState — order tracking
- AdminSettings — administrator settings
- AdminAddItem — adding products
- AdminEditItem — editing products
- AdminTrack — editing orders
- LoyaltyAdmin — loyalty management

### Security

- Administrator rights verification before executing admin commands
- Input validation (exchange rates, amounts, quantities)
- SQL injection protection through parameterized queries
- Error handling and logging

## Implementation Features

1. **Asynchrony**: All database and API operations are performed asynchronously for high performance
2. **Cascade Deletion**: When an order is deleted, all related products and photos are automatically deleted
3. **Flexible Task System**: Administrator can configure individual task lists for users
4. **Visual Feedback**: Color-coded status indicators in Google Sheets
5. **Scalability**: Easy to add new statuses, services, tasks

## Results

- 400+ satisfied customers
- 200+ reviews
- Complete automation of ordering and tracking process
- Google Sheets integration for convenient order management
- Loyalty program increases customer engagement

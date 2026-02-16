const r=`# Flow — E-commerce Store (Telegram Bot)\r
\r
## Project Description\r
\r
Flow is a full-featured Telegram bot for an e-commerce store specializing in computer peripherals and ordering goods from Chinese platforms (Poizon, TaoBao, 1688). The bot automates the process of price calculation, order tracking, and customer interaction.\r
\r
## Core Features\r
\r
### 1. Price Calculation\r
\r
Automatic price calculation system for goods from China, taking into account:\r
- Yuan to ruble exchange rate (configurable by administrator)\r
- Dollar exchange rate for shipping calculation\r
- Product weight (with hints for standard weights)\r
- Store commission (progressive scale depending on product price)\r
- Shipping cost ($7 per kilogram)\r
\r
Users enter the product price in yuan and weight, then receive a detailed calculation with breakdown of product cost, shipping, and total amount.\r
\r
### 2. Order Tracking\r
\r
Tracking system with 7 statuses:\r
- In Processing\r
- Purchased\r
- At Warehouse in China\r
- On the Way to Customs\r
- Customs\r
- At Warehouse in Moscow\r
- Delivered\r
\r
Each status has its own color in Google Sheets for visual control. Users can track their orders by track number, seeing complete product information including photos (up to 5 photos per product).\r
\r
### 3. Loyalty Program\r
\r
Points accrual system for completing tasks:\r
- Leave a review with photo (333 points)\r
- Leave a video review (500 points)\r
- Invite three friends (300 points)\r
- Order any three products (500 points)\r
- Total order amount 10,000₽ (500 points)\r
\r
Administrator can configure individual task lists for users. Each point equals 1 ruble and can be used when paying for orders.\r
\r
### 4. Keyboard Modding Services\r
\r
Service catalog with descriptions and prices:\r
- Switch lubing (37₽ per unit)\r
- Deep keyboard cleaning (1390₽)\r
- Case sound dampening (990₽)\r
- Comprehensive stabilizer tuning (1290₽)\r
- Full custom build (2990₽)\r
\r
Each service has a description, photo, and the ability to place an order directly from the bot.\r
\r
### 5. Admin Panel\r
\r
Full-featured admin panel for store management:\r
- Order management: adding, editing statuses, changing amounts\r
- Product management: adding products with photos, editing, deleting\r
- Currency rate management: configuring yuan and dollar rates\r
- Bot statistics: number of users, active in 24 hours, orders\r
- Broadcasts: mass messaging to all users\r
- Sending messages to specific users by @username\r
- Loyalty program management: accruing/deducting points, configuring tasks\r
\r
## Technical Solutions\r
\r
### Architecture\r
\r
The bot is built on an asynchronous architecture using:\r
- **aiogram 3.22.0** — modern framework for Telegram bots\r
- **aiosqlite 0.21.0** — asynchronous SQLite database operations\r
- **gspread 6.2.1** — Google Sheets API integration\r
\r
### Database\r
\r
SQLite database with the following structure:\r
\r
**users** — user information:\r
- user_id (PRIMARY KEY)\r
- username, first_name, last_name\r
- joined_at (registration date)\r
\r
**tracks** — orders:\r
- id (PRIMARY KEY)\r
- track_number (UNIQUE)\r
- status (order status)\r
- total_price (order amount)\r
- user_id (FOREIGN KEY → users)\r
\r
**items** — products in orders:\r
- id (PRIMARY KEY)\r
- track_id (FOREIGN KEY → tracks, CASCADE DELETE)\r
- name (product name)\r
- description (specifications)\r
\r
**item_photos** — product photos:\r
- id (PRIMARY KEY)\r
- item_id (FOREIGN KEY → items, CASCADE DELETE)\r
- file_id (Telegram file_id, up to 5 photos per product)\r
\r
**user_loyalty** — loyalty program:\r
- user_id (PRIMARY KEY)\r
- points (points balance)\r
- tasks_text (individual task list)\r
\r
**settings** — system settings:\r
- key (PRIMARY KEY)\r
- value (exchange rates, etc.)\r
\r
**settings_loyalty** — loyalty settings:\r
- key (PRIMARY KEY)\r
- value (default task list)\r
\r
### Google Sheets Integration\r
\r
Automatic synchronization of order data with Google Sheets:\r
- When order status changes, data is automatically updated in the sheet\r
- Color-coded status indicators for convenient visual control\r
- Columns: Track Number, Status, Amount, User ID, Username, Update Date\r
- Support for adding new orders and updating existing ones\r
\r
### State Machine (FSM)\r
\r
Using finite state machine for dialog management:\r
- CalculateState — price calculation process\r
- TrackOrderState — order tracking\r
- AdminSettings — administrator settings\r
- AdminAddItem — adding products\r
- AdminEditItem — editing products\r
- AdminTrack — editing orders\r
- LoyaltyAdmin — loyalty management\r
\r
### Security\r
\r
- Administrator rights verification before executing admin commands\r
- Input validation (exchange rates, amounts, quantities)\r
- SQL injection protection through parameterized queries\r
- Error handling and logging\r
\r
## Implementation Features\r
\r
1. **Asynchrony**: All database and API operations are performed asynchronously for high performance\r
2. **Cascade Deletion**: When an order is deleted, all related products and photos are automatically deleted\r
3. **Flexible Task System**: Administrator can configure individual task lists for users\r
4. **Visual Feedback**: Color-coded status indicators in Google Sheets\r
5. **Scalability**: Easy to add new statuses, services, tasks\r
\r
## Results\r
\r
- 400+ satisfied customers\r
- 200+ reviews\r
- Complete automation of ordering and tracking process\r
- Google Sheets integration for convenient order management\r
- Loyalty program increases customer engagement\r
`;export{r as default};

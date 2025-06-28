📝 Daily Plan App – Frontend

A simple task management web application built with React.

Users can add, edit, and delete daily tasks.

This frontend communicates with a backend API hosted at Render.

DEMO




🚀 Features
Add a new daily task

Edit existing tasks

Delete tasks

Real-time UI updates

Clean and minimalistic design

🛠 Tech Stack
React (with Hooks)

Axios (for HTTP requests)

React Icons

CSS Modules

📁 Project Structure
bash
Kopieren
Bearbeiten
src/
├── App.css             # Styling for the app
├── App.js              # Main component
├── FetchTask.js        # Axios API calls (GET, POST)
├── MyTask.js           # Task card component with edit/delete icons
⚙️ Installation & Usage
1. Clone the repository:
bash
Kopieren
Bearbeiten
git clone https://github.com/your-username/daily-plan-frontend.git
cd daily-plan-frontend
2. Install dependencies:
bash
Kopieren
Bearbeiten
npm install
3. Start the development server:
bash
Kopieren
Bearbeiten
npm start
The app will run at http://localhost:3000

🌐 Backend API Endpoints Used
Make sure your backend (Node.js + Express) is running or deployed at:

bash
Kopieren
Bearbeiten
https://daily-planning-waeo.onrender.com
Endpoints:

GET / – Get all tasks

POST /saveDay – Add a task

POST /editDay – Edit a task

POST /deleteDay – Delete a task (Note: points to http://localhost:4000, make sure it's updated if deployed)

📸 UI Preview

(Optional: insert screenshot of app interface)

# 💑 Coupling

**Coupling** is my first project and a beginner-friendly mobile app built with React Native (Expo) and a Java servlet backend. It helps couples remember important details about each other — birthdays, names, relationship status — so they can be more mindful, considerate, and plan for each other.

---

## ✨ Features

- 📋 Register couple profiles with name, email, birthday, and status
- 📲 Mobile frontend built with Expo and React Native
- 🧠 Backend powered by Java servlets and MySQL Workbench
- 🖥️ Local testing with Tomcat server
- 🔐 Privacy-conscious design — no cloud storage required

---

## 🛠️ Tech Stack

| Layer        | Technology              |
|--------------|--------------------     |
| Frontend     | React Native (Expo)     |
| Backend      | Java Servlet (IntelliJ) |
| Database     | MySQL                   |
| Server       | Apache Tomcat           |
| IDE          | Visual Studio Code      |

---
### 🔧 Important: Update Backend IP Address

This app connects to a Java servlet backend running on your local machine. To make it work:

1. Find your local IP address (e.g., `192.168.1.5`)
2. Open `register.js` under app and (tabs) 
3. Replace the backend URL with your IP:
...fetch('http://<your-ip-address>:8081/coupleapp-1.0-SNAPSHOT/register', ...)

## 🚀 Getting Started
Step 1: clone the repo
git clone https://github.com/yourusername/coupling.git
cd coupling
Step 2: Set Up the Mobile Frontend (Expo)
2.1 Install Node.js and npm
If you don’t have them yet, download and install from nodejs.org
2.2 Install Expo CLI (optional but helpful)
2.3 Install project dependencies
2.4 Start the Expo development server
: npx expo start
2.5 Run the app on your phone
- Install Expo Go from the App Store or Google Play
- Scan the QR code from your browser window
- Your app will launch instantly
Make sure your phone and computer are on the same Wi-Fi network
Step 3: Set Up the Java Backend
3.1 Install Apache Tomcat
3.2 Build the WAR file
3.3 Deploy to Tomcat
- Copy the WAR file into Tomcat’s webapps/ folder
- Start Tomcat using startup.bat (Windows) or startup.sh (Mac/Linux)

Go to my Java Backend Project for more details regarding project progression.

### 🔧 Important: Update Backend IP Address

This app connects to a Java servlet backend running on your local machine. To make it work:

1. Find your local IP address (e.g., `192.168.1.5`)
2. Open `register.js` under app and (tabs) 
3. Replace the backend URL with your IP:
...fetch('http://<your-ip-address>:8081/coupleapp-1.0-SNAPSHOT/register', ...)
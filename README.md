# Express JSON State API

A lightweight RESTful API built with **Node.js + Express** that allows setting and retrieving simple in-memory state values. Ideal for prototyping, bot management, control panels, or temporary key-value storage.

---

## 🚀 Features

- Set and get variables through HTTP endpoints
- Simple in-memory storage (no database)
- Clean and reusable route structure
- Fast, flexible, and extendable

---

## 🛠 Setup

### 1. Clone or Download

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

shell
Копировать
Редактировать

### 2. Install Dependencies

npm install

shell
Копировать
Редактировать

### 3. Start Server

node server.js

arduino
Копировать
Редактировать

Server will run by default at:  
http://localhost:3000

vbnet
Копировать
Редактировать

Or set a custom port:
PORT=5000 node server.js

yaml
Копировать
Редактировать

---

## 📡 API Endpoints

### 🔍 GET Endpoints

| Endpoint         | Description                                           |
|------------------|--------------------------------------------------------|
| `/all`           | Returns all stored variables                          |
| `/vars`          | Returns `var1`, `var2`                                 |
| `/kicksbans`     | Returns kick/ban data                                 |
| `/j`             | Returns `juser`, `jlenght`, `jtype`                   |
| `/spy`           | Returns `suser`                                       |
| `/mute`          | Returns `muser`, `mlenght`                            |

---

### ✏️ POST Endpoints

Send requests with a JSON body like:

```json
{
  "value": "your_value_here"
}
Endpoint	Sets Variable	Accepted Types
/setVar1	var1	string
/setVar2	var2	string
/setUserkick	userkick	string / number
/setUserkickreason	userkickreason	string
/setUserban	userban	string / number
/setUserbanreason	userbanreason	string
/setUserbantime	userbantime	string / number
/setjuser	juser	string
/setjlenght	jlenght	string / number
/setjtype	jtype	string / number
/setspy	suser	string / number
/setmuser	muser	string / number
/setmlenght	mlenght	string / number

📦 Notes
Data is stored in memory only – restarting the server will reset everything.

Code is modular and easy to expand with new routes and variables.

🙏 Attribution Required
If you use this project in any form (commercial or non-commercial), you must credit the original author:

Created by izibrizi798

Please keep this notice in your README or documentation when distributing.

📜 License
MIT — Free to use, modify, and share, with credit required.

yaml
Копировать
Редактировать

---

You can copy-paste that into your `README.md` file, or I can generate a downloadable file version for you if needed.

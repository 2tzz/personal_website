
---

# 🧑‍💻 Personal Blog — Flask Web Application

Welcome to the source code repository for my **Flask-based blog website**, a minimal and clean personal blog platform built to demonstrate dynamic routing, template inheritance, and REST API integration. This project serves as a foundational template for creating content-driven websites using Flask and Jinja2.

---

## 📸 Preview

![Home](images/home.png)
![Post](redme/post.png)
![About](redme/about.png)
![Contact](redme/contact.png)



## 🚀 Live Website

👉 [click - me !](https://your-deployment-url.com)

---

## 🛠️ Technologies Used

The app is structured to highlight both design and backend functionality using:

### 🧩 Backend
- **Flask** – Lightweight web framework in Python.
- **Jinja2** – Template engine for Python (built into Flask).
- **Requests** – Used to fetch blog content dynamically from a JSON API.

### 🎨 Frontend
- **HTML5 + CSS3**
- **Bootstrap 5** – Responsive components and layout grid.
- **Google Fonts** – Lora and Open Sans for elegant typography.
- **Font Awesome** – Icon set for UI enhancement.

### 📦 API
- [NPoint](https://api.npoint.io/) – Hosting external JSON data for blog posts.

---

## ✨ Features

✅ Dynamic blog post routing  
✅ Responsive design with Bootstrap  
✅ Static file management (CSS, JS, images, favicon)  
✅ Modular HTML templates (`header.html`, `footer.html`)  
✅ About & Contact pages  
✅ External API integration for blog content  

---

## 📁 Project Structure

```

personal\_website/
│
├── app.py                          # Flask app entry point
├── static/                         # Static assets
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   ├── assets/
│       ├── favicon.ico
│       └── img/
│           └── post-bg.jpg
│
├── templates/                      # HTML templates
│   ├── index.html
│   ├── post.html
│   ├── about.html
│   ├── contact.html
│   ├── header.html
│   └── footer.html
│
└── README.md

````

---

## 🔧 Sample Code Snippets

### ➤ Fetching Blog Posts from an API

```python
import requests

response = requests.get('https://api.npoint.io/1df9a2e468e2408de0fc')
all_posts = response.json()
````

---

### ➤ Flask Dynamic Routing

```python
@app.route('/blog/<int:num>')
def get_blogs(num):
    return render_template("post.html", posts=all_posts, number=num)
```

---

### ➤ Jinja2 Template Loop

```jinja
{% for blog_post in posts %}
    {% if blog_post["id"] == number %}
        <h1>{{ blog_post["title"] }}</h1>
        <p>{{ blog_post["body"] }}</p>
    {% endif %}
{% endfor %}
```

---

## 🧑‍💼 About Me

I’m **Thilakshana Thilakshana**, a 23-year-old Python developer and creative designer based in Sri Lanka. I specialize in developing full-stack applications, building REST APIs, and designing beautiful user interfaces.

* **Email**: [tthiyura1@gmail.com](mailto:tthiyura1@gmail.com)
* **Phone**: (+94) 712 835 711
* **Website**: [thilakshana.vip](https://thilakshana.vip)
* **Freelance**: Available

---

## 🔗 Related Projects

### 🧠 [StudyBuddy - Developer Chatroom](https://studybuddev.herokuapp.com/)

A live chat platform built for developer collaboration and discussion.

> Stack: Django, SQLite, WebSockets

### 🛒 E-Commerce API (JWT Auth)

A secure, scalable backend API for e-commerce platforms.

> Stack: Django REST Framework, PostgreSQL

---

## 📬 Contact

For project inquiries, freelance work, or collaborations:

* **Email**: [tthiyura1@gmail.com](mailto:tthiyura1@gmail.com)
* **Phone**: (+94) 712 835 711
* **GitHub**: [2tzz](https://github.com/2tzz)

---


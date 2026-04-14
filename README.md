# **Workshop Booking**

> This website is for coordinators to book a workshop(s), they can book a workshop based on instructors posts or can propose a workshop date based on their convenience.

### Features
* Statistics
    1. Instructors Only
        * Monthly Workshop Count
        * Instructor/Coordinator Profile stats
        * Upcoming Workshops
        * View/Post comments on Coordinator's Profile
    2. Open to All
        * Workshops taken over Map of India
        * Pie chart based on Total Workshops taken to Type of Workshops.

* Workshop Related Features
    > Instructors can Accept, Reject or Delete workshops based on their preference, also they can postpone a workshop based on coordinators request.

## Setup Instructions

### Backend (Django)
1. Clone this repository.
2. Create a virtual environment and install all the required packages: 
   ```bash
   pip install -r requirements.txt
   ```
3. Copy `.sampleenv` to `.env` and fill in necessary database configurations.
4. Run migrations to initialize the database: 
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Create a superuser for admin access:
   ```bash
   python manage.py createsuperuser
   ```
6. Start the server: 
   ```bash
   python manage.py runserver
   ```
7. Access the application at `http://localhost:8000`.

### Frontend (React + Vite)
If you wish to work on the UI components interactively:
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the frontend dev server: `npm run dev`

---

## App Redesign and Implementation Details

### 1. What design principles guided your improvements?

I wanted to make the website easy for students to use.
The User-Centric Design was important to us. I made sure the website is simple to navigate and does not confuse students.
I also thought about Simplicity And Clarity.
I removed a lot of things that people do not need to see.
We used space and words in a way so people can understand what they are looking at.
We made sure that everything on the website looks the same.
We did this so the website feels like one thing.
We used words that're relatable  and made sure there is enough difference, between colors.
We thought about the Visual Hierarchy too.

### 2. How did you make sure the application works well on all devices?

To make the application work well on all devices we did a things.
We used a first approach. This means we designed the layouts for bigger device first and then made them work for smaller devices.
We also used Flexbox and Grid. These are tools that help make the layouts flexible and work well on devices.
We used units to measure things. Of using fixed numbers we used things like percentage and relative units like rem and vw/vh.
We tested the application, on different devices. We used tools to see how it would look on different screens and we also tried it on real devices to make sure it worked well.
We did all this to make sure the application is responsive. This means it works well on the application no matter what device people use to access it

### 3. What trade-offs did you make between design and performance?

Balancing visual fidelity and speed required a few key choices:
* We prioritized CSS-based stylistic enhancements (like glassmorphism) to simulate a premium feel without heavily leaning on bloated JavaScript animation libraries.
* While adding immersive full-screen dynamic backgrounds for dashboards, we heavily optimized them so they wouldn't overly drain the battery or processor of mobile devices. Lower fidelity options handle graceful degradation automatically.

### 4. What was the challenging part of the task and how did you approach it?

The challenging part was balancing a modern UI with performance constraints. This was especially hard because most users are students who use devices.
And converting from bigger screen to smaller screen


## Previous Website Screenshots

<details>
<summary>Click to view screenshots of the previous design</summary>

### 1. Login Screen
![Login Screen](https://drive.google.com/file/d/13cUExnt95dGQVwI6gtoYVL3PxWyj4Rx3/view?usp=sharing)

### 2. Coordinator Registration
![Coordinator Registration](https://drive.google.com/file/d/1wCdIF6tQBi9GiI5_DpyWVQrBmPP563ur/view?usp=sharing)

### 3. Dashboard Welcome
![Dashboard Welcome](https://drive.google.com/file/d/1SazuJs1E3oiFcbzVK_vE_YGlPacjONLI/view?usp=sharing)

### 4. Dashboard Filters
![Dashboard Filters](https://drive.google.com/file/d/1Mig51877WYejC9Ux08GMp-AXohENdGWE/view?usp=sharing)

### 5. Django Administration
![Django Admin](https://drive.google.com/file/d/1sLxhGCpW3p6dNc8HmzMqQmsVMPhmcBlF/view?usp=sharing)

</details>

## Preview Video

Get a quick walkthrough of the Workshop Booking application features:

[![Watch the preview](https://drive.google.com/file/d/15cHvXst_XvmGyyUFE1GM6UGgco2YuYrf/view?usp=sharing)

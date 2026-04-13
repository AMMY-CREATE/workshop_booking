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

The redesign was driven by the following core philosophies to improve the user experience:
* **User-Centric Design:** The primary focus was creating a website that is simple to navigate and prevents user confusion.
* **Simplicity and Clarity:** We strategically removed visual clutter that people do not need to see.
* **Whitespace and Typography:** Space and words were used intentionally so users instantly understand what they are looking at.
* **Consistency:** We ensured that every page on the website shares the same theme so the application feels unified.
* **Accessibility:** We utilized relatable phrasing and ensured there is substantial contrast between colors.
* **Visual Hierarchy:** Important interactive elements are visually prioritized so users know exactly where to click.

### 2. How did you make sure the application works well on all devices?

To make the application reliably responsive on all devices, we took a systematic approach:
* **Systematic Scaling:** We designed expansive layouts for bigger devices first, then adapted and structured them carefully down for smaller screens.
* **Modern CSS Tools:** Extensive use of CSS Flexbox and Grid was made to construct inherently flexible UI elements that reflow seamlessly.
* **Relative Units:** Instead of heavily using fixed pixel dimensions, we relied on percentages and relative units like `rem`, `vw`, and `vh`.
* **Testing:** Using comprehensive browser tooling alongside real-device tests, we verified that layouts scaled appropriately and usability wasn't compromised on narrow phone screens.

### 3. What trade-offs did you make between design and performance?

Balancing visual fidelity and speed required a few key choices:
* We prioritized CSS-based stylistic enhancements (like glassmorphism) to simulate a premium feel without heavily leaning on bloated JavaScript animation libraries.
* While adding immersive full-screen dynamic backgrounds for dashboards, we heavily optimized them so they wouldn't overly drain the battery or processor of mobile devices. Lower fidelity options handle graceful degradation automatically.

### 4. What was the challenging part of the task and how did you approach it?

The most challenging part of the task was balancing a modern, highly interactive UI with performance constraints. This was particularly demanding considering our primary demographic consists of students who often rely on lower-end devices or mobile connections. 

Additionally, cleanly translating complex data views from a larger desktop viewport to a smaller mobile screen was tricky. We solved this by creating highly modular, flex-based components that stack intuitively and remove non-essential decorative elements when the screen size is restricted.

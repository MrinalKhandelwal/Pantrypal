# 🍳 PantryPal

> **Tell us what you have. We'll tell you what to cook.**

PantryPal is a React-based recipe finder application developed by **Mrinal Khandelwal**. It helps users discover recipes based on the ingredients they already have available in their kitchen.

Instead of searching for a recipe first, users enter their available ingredients. PantryPal uses the **TheMealDB API** to find relevant recipes, calculates how well the user's ingredients match each recipe, highlights missing ingredients, and provides complete recipe details.

---

## 📂 Repository Structure

This repository contains two separate parts of the PantryPal project:

```text
Pantrypal/
│
├── 📁 Project/
│   ├── 📁 public/
│   ├── 📁 src/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── ...
│
├── 📁 Presentation/
│   ├── 📁 src/
│   ├── 📁 assets/
│   ├── package.json
│   ├── index.html
│   └── ...
│
└── 📄 README.md
```

### 🖥️ Project

The `Project` folder contains the actual PantryPal web application developed by me.

### 🎨 Presentation

The `Presentation` folder contains the interactive presentation created using **Google AI Studio** to explain and demonstrate the PantryPal project.

> **Important:** PantryPal itself was developed by me. Google AI Studio was used specifically to create the project presentation.

---

## ✨ Features

- 🥕 Add multiple ingredients available in your kitchen
- ❌ Remove ingredients from the list
- 🔎 Search for recipes using the entered ingredients
- 🎯 Calculate an ingredient match percentage
- ⚠️ Identify ingredients missing from a recipe
- 🍽️ Display recipe cards with images and match scores
- 📖 View complete recipe details
- 🧂 Display ingredient quantities and measurements
- 📋 Show cooking instructions
- 🔗 Navigate between the home page and individual recipe pages
- 📱 Responsive interface using Bootstrap

---

## 🧠 How PantryPal Works

The application follows a simple workflow:

```text
User enters ingredients
        ↓
PantryPal sends ingredient-based requests
        ↓
TheMealDB API returns matching recipes
        ↓
Duplicate recipes are removed
        ↓
Full recipe details are retrieved
        ↓
Ingredients are compared
        ↓
Match percentage is calculated
        ↓
Recipes are sorted by match percentage
        ↓
User views the most relevant recipes
```

### 🎯 Ingredient Matching

PantryPal compares the ingredients entered by the user with the ingredients required by each recipe.

For example:

```text
Available:
✓ Chicken
✓ Tomato
✓ Onion

Recipe requires:
✓ Chicken
✓ Tomato
✓ Onion
✗ Garlic
✗ Pepper

Match: 100% of user's available ingredients
Missing:
- Garlic
- Pepper
```

The application also identifies missing recipe ingredients so users can quickly see what they may need to purchase.

---

## 🔌 API Integration

PantryPal uses the **TheMealDB API** for recipe data.

The application uses the API to:

- Search for meals based on ingredients
- Retrieve complete recipe information
- Retrieve recipe images
- Retrieve ingredient names and measurements
- Retrieve cooking instructions

The application first searches for recipes using the ingredients entered by the user and then retrieves detailed information for the selected recipes.

---

## 🛠️ Technology Stack

### PantryPal Application

| Technology | Purpose |
|---|---|
| **React** | Building the user interface |
| **JavaScript / JSX** | Application logic and React components |
| **React Router DOM** | Navigation and recipe detail routes |
| **Bootstrap 5** | Styling and responsive layout |
| **Vite** | Development server and build tool |
| **TheMealDB API** | Recipe data and recipe information |
| **HTML5** | Page structure |
| **CSS3** | Custom styling |

### Project Presentation

The presentation is a separate React/Vite project created with **Google AI Studio**. It uses technologies included in the generated presentation project, including:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion
- Canvas Confetti
- Google GenAI package

---

## 🗺️ Application Routes

The PantryPal application currently contains two main routes:

```text
/                → Home page
/recipe/:id      → Recipe details page
```

The recipe ID is passed through the URL to retrieve the corresponding recipe from TheMealDB.

---

## 🚀 Running the PantryPal Project

### 1. Clone the repository

```bash
git clone https://github.com/MrinalKhandelwal/Pantrypal.git
```

### 2. Move into the application folder

```bash
cd Pantrypal/Project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### 5. Create a production build

```bash
npm run build
```

---

## 🎨 Running the Presentation

To run the Google AI Studio presentation locally:

```bash
cd Pantrypal/Presentation
npm install
npm run dev
```

The presentation project has its own dependencies and configuration separate from the PantryPal application.

---

## 👨‍💻 Developer

### Mrinal Khandelwal

**Project:** PantryPal  
**Role:** Developer

PantryPal was developed as a practical React project focused on API integration, component-based UI development, routing, state management, and ingredient-based recipe discovery.

### 🎓 Trainer

**Gagandeep Singh**

---

## 🙏 Acknowledgements

- **TheMealDB** for providing the recipe API and meal data.
- **React** for the frontend framework.
- **Vite** for the development and build environment.
- **Bootstrap** for responsive UI components and styling.
- **Google AI Studio** for assisting with the creation of the project presentation.

---

## 📌 Project & Presentation Disclaimer

This repository intentionally keeps the application and presentation separate:

```text
Project/
    ↓
PantryPal application
Developed by Mrinal Khandelwal

Presentation/
    ↓
Project presentation
Created using Google AI Studio
```

The Google AI Studio presentation is included as documentation and demonstration material for the PantryPal project. It should not be confused with the core application source code.

---

## 🌟 Future Improvements

Possible future enhancements include:

- 🔐 User authentication
- ❤️ Save favorite recipes
- 💾 Persistent ingredient lists
- 🛒 Automatic shopping lists for missing ingredients
- 🧠 More advanced ingredient matching
- 🔍 Recipe filtering and sorting
- 🌙 Improved theme support
- 📱 Further mobile UI improvements
- ☁️ Deployment and hosted demo

---

## 📄 License

This project is intended primarily for educational and portfolio purposes.

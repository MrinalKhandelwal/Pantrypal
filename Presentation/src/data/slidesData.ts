import { PresenterInfo, SlideData, RecipeMock } from '../types/presentation';

export const PRESENTER_INFO: PresenterInfo = {
  project: 'PantryPal',
  tagline: "Tell us what you have. We'll tell you what to cook.",
  presenter: 'Mrinal Khandelwal',
  trainer: 'Gagandeep Singh',
};

export const SLIDES_LIST: SlideData[] = [
  {
    id: 1,
    slug: 'title',
    title: 'PantryPal: Smart Recipe Finder',
    subtitle: "Tell us what you have. We'll tell you what to cook.",
    category: 'Overview',
    speakerNotes: [
      "Good morning/afternoon, Respected Trainer Gagandeep Singh Sir and fellow evaluators.",
      "My name is Mrinal Khandelwal, and today I am excited to present PantryPal — a dynamic recipe recommendation engine that transforms everyday kitchen ingredients into curated meals.",
      "The core tagline is: 'Tell us what you have. We'll tell you what to cook.'",
      "Let's dive into the problem that inspired this application and how modern web architecture delivers the solution."
    ],
    keyPoints: [
      'Project: PantryPal (Kitchen Ingredient-Based Recipe Engine)',
      'Presented by: Mrinal Khandelwal',
      'Trainer: Gagandeep Singh',
      'Architecture: React 18, React Router, TheMealDB REST API, Bootstrap 5'
    ]
  },
  {
    id: 2,
    slug: 'introduction',
    title: 'Project Introduction',
    subtitle: 'Bridging the gap between available pantry items and ready-to-cook recipes',
    category: 'Overview',
    speakerNotes: [
      "PantryPal is a web-based culinary assistant designed to solve a universal daily challenge: deciding what to cook with whatever groceries you already have.",
      "Instead of requiring users to buy specific ingredients for predetermined recipes, PantryPal flips the paradigm: you enter your on-hand ingredients (like potato, tomato, onion), and the system discovers what you can cook right now.",
      "It calculates exact ingredient match percentages, highlights missing items, and provides complete cooking instructions seamlessly."
    ],
    keyPoints: [
      'What it is: An intelligent, pantry-first recipe recommendation application.',
      'Main Idea: Input on-hand pantry ingredients and instantly receive matching recipes sorted by compatibility score.',
      'Core Value: Eliminates mealtime decision fatigue and reduces household food spoilage.',
      'User Benefit: Saves grocery expenses and encourages spontaneous home cooking.'
    ]
  },
  {
    id: 3,
    slug: 'problem-statement',
    title: 'Problem Statement & Motivation',
    subtitle: 'Why standard recipe platforms fail everyday home cooks',
    category: 'Problem & Goals',
    speakerNotes: [
      "Let's examine the core pain point. Traditional recipe sites operate from recipe-to-ingredients: you find a recipe, and then discover you lack 6 of the 8 required items.",
      "This leads to grocery waste, where items like potatoes, tomatoes, and herbs rot in the fridge.",
      "Furthermore, decision paralysis strikes daily after busy work hours. PantryPal solves this by working backwards from your pantry inventory."
    ],
    keyPoints: [
      'Recipe-First vs. Ingredient-First Mismatch: Traditional apps require extensive shopping lists.',
      'Household Grocery Waste: Over 30% of perishable kitchen produce is discarded due to lack of recipe inspiration.',
      'Decision Fatigue: Daily cognitive friction in planning meals with disjointed pantry items.',
      'Solution Imperative: A reverse search engine that maps N available ingredients to matching culinary dishes.'
    ]
  },
  {
    id: 4,
    slug: 'objectives',
    title: 'Project Objectives & Goals',
    subtitle: 'Four core design and technical pillars guiding PantryPal',
    category: 'Problem & Goals',
    speakerNotes: [
      "To address these challenges, we established four clear project goals:",
      "First, zero-friction ingredient input with interactive keyboard and tag controls.",
      "Second, multi-ingredient REST orchestration using parallel network requests.",
      "Third, a smart match-scoring algorithm that accurately computes compatibility percentages.",
      "Fourth, a transparent recipe discovery experience detailing exact missing ingredients and step-by-step cooking guides."
    ],
    keyPoints: [
      'Pillar 1: Zero-Friction Tagging — Rapid ingredient addition via Enter key, dynamic badge chips, and one-click removal.',
      'Pillar 2: Parallel API Aggregation — Querying TheMealDB endpoints concurrently via Promise.all with in-memory deduplication.',
      'Pillar 3: Match Percentage Algorithm — Dynamically cross-referencing user pantry items against up to 20 recipe ingredient slots.',
      'Pillar 4: Actionable Recipe Transparency — Highlighting missing grocery items and providing full measurement/instruction breakdowns.'
    ]
  },
  {
    id: 5,
    slug: 'technologies',
    title: 'Technologies & Tools Used',
    subtitle: 'Modern frontend ecosystem powering fast and responsive meal discovery',
    category: 'Technical',
    speakerNotes: [
      "Here is the technology stack derived directly from the project codebase.",
      "We utilized React 18 for declarative UI and state management using hooks like useState and useEffect.",
      "React Router DOM handles client-side routing between the home view and detailed recipe pages.",
      "TheMealDB REST API acts as the data provider, using filter and lookup endpoints.",
      "Bootstrap 5 and custom CSS deliver a high-contrast dark kitchen theme with yellow and green culinary accents."
    ],
    keyPoints: [
      'React 18: Component-based architecture, state management (useState, useEffect), and efficient reconciliation.',
      'React Router DOM: Dynamic URL routing (/ and /recipe/:id) with useParams hook.',
      'TheMealDB REST API: Public culinary endpoints (filter.php?i= for ingredient queries, lookup.php?i= for 20-slot ingredient details).',
      'JavaScript ES6+: Async/Await, Promise.all concurrent fetching, Array.flatMap, Map-based deduplication.',
      'Bootstrap 5 & Custom Dark CSS: Responsive grid system, badges, alerts, and custom #1e1e1e charcoal styling.',
      'Vite & Build Tooling: High-performance development server and optimized bundle generation.'
    ]
  },
  {
    id: 6,
    slug: 'architecture',
    title: 'System & Workflow Architecture',
    subtitle: 'End-to-end data pipeline from user input to scoring and rendering',
    category: 'Technical',
    speakerNotes: [
      "This slide illustrates the high-level architecture and data flow of PantryPal.",
      "When the user inputs ingredients, state is captured in the ingredients array.",
      "On clicking 'Find Recipes', Promise.all fires parallel requests to TheMealDB's filter endpoint for each ingredient.",
      "The system aggregates meals, eliminates duplicates using a JavaScript Map, fetches full details for top meals, runs the custom calculateMatch function, sorts by match percentage, and updates the UI state."
    ],
    keyPoints: [
      'Client Input Layer: User adds items (e.g. potato, tomato, onion) -> captured in React state.',
      'Parallel Request Dispatcher: Promise.all sends concurrent queries to filter.php?i={cleanIngredient}.',
      'Aggregation & Deduplication: flatMap combines results; new Map(idMeal) eliminates redundant records.',
      'Batch Detail Fetcher: Fetches full 20-ingredient schemas for top candidates via lookup.php?i={idMeal}.',
      'Match & Scoring Engine: calculateMatch computes match % and detects missing ingredients list.',
      'View Layer: Renders sorted RecipeCard grid on Home, and full instructions on /recipe/:id via React Router.'
    ]
  },
  {
    id: 7,
    slug: 'key-features',
    title: 'Key Project Features',
    subtitle: 'Core capabilities implemented in the application',
    category: 'Features & Demo',
    speakerNotes: [
      "Let's look at the six primary features implemented in PantryPal:",
      "1. Dynamic Ingredient Tagging with keyboard support and badge dismissal.",
      "2. Concurrent Multi-Ingredient Querying for multi-item pantries.",
      "3. Smart Match Percentage Ranking placing 100% matches at the top.",
      "4. Missing Ingredient Alerts showing cooks what items they need to purchase.",
      "5. Detailed Recipe View with dynamic measurement parsing.",
      "6. High-Contrast Kitchen Dark Mode for clean readability."
    ],
    keyPoints: [
      '1. Dynamic Ingredient Management: Add tags via input or Enter key; removable chip badges with instant state filtering.',
      '2. Parallel Multi-Query Aggregation: Overcomes single-ingredient API constraints by executing concurrent fetch calls.',
      '3. Match Percentage Algorithm: Compares user input against up to 20 recipe ingredient fields with case-insensitive substring matching.',
      '4. Missing Ingredients Breakdown: Clear visual alert showing top missing ingredients for each suggested dish.',
      '5. Comprehensive Recipe Inspector: Dynamic route rendering dish thumbnail, measurements, and full preparation steps.',
      '6. Polished Culinary UI: Dark charcoal background (#1e1e1e) paired with golden amber badges and emerald success indicators.'
    ]
  },
  {
    id: 8,
    slug: 'demo-working',
    title: 'Project Demo & User Journey',
    subtitle: 'Step-by-step walkthrough of the working application workflow',
    category: 'Features & Demo',
    speakerNotes: [
      "In our demo video, we observe the exact user journey:",
      "Step 1: The user types 'potato' and clicks Add. Then adds 'tomato' and 'onion'. Three badges appear.",
      "Step 2: The user clicks the 'Find Recipes' button. The button switches to a loading state.",
      "Step 3: The grid populates with sorted recipe cards — like 'Balchi di Pisca' and 'Bengali Chicken Curry' at 100% match, and 'Beef Empanadas' at 67% match.",
      "Step 4: The user clicks 'View Recipe' to navigate to /recipe/:id and inspect complete instructions."
    ],
    keyPoints: [
      "Step 1: Input & Tagging — User enters 'potato', 'tomato', 'onion'; chips appear dynamically.",
      'Step 2: Trigger Search — Clicking Find Recipes triggers parallel API fetching with loading indicator.',
      'Step 3: Ranked Results — Recipes appear sorted from 100% match down to 33% with missing ingredient cards.',
      'Step 4: Recipe Inspection — Clicking View Recipe routes to /recipe/:id to display full ingredients & cooking steps.'
    ]
  },
  {
    id: 9,
    slug: 'challenges-solutions',
    title: 'Challenges, Solutions & Future Scope',
    subtitle: 'Technical hurdles overcome during development and future roadmap',
    category: 'Wrap-up',
    speakerNotes: [
      "During development, we tackled specific engineering hurdles:",
      "Challenge 1: TheMealDB API only filters by one ingredient per request. Solution: We mapped over ingredients using Promise.all to fetch concurrently.",
      "Challenge 2: Multi-query requests returned duplicate meals. Solution: Deduplicated via Map keyed by idMeal.",
      "Challenge 3: The API splits ingredients across 20 un-indexed properties. Solution: Iterative loop over strIngredient1..20.",
      "For Future Scope, we plan dietary filters (vegetarian, halal), pantry expiration tracking, and smart ingredient substitution suggestions."
    ],
    keyPoints: [
      'Challenge 1: Single-ingredient API limitation -> Solved via concurrent Promise.all queries.',
      'Challenge 2: Duplicate recipe results -> Solved via JavaScript Map(idMeal) memory deduplication.',
      'Challenge 3: 20 un-indexed ingredient fields -> Solved via dynamic strIngredient[i] string normalization loop.',
      'Future Scope: Dietary & allergen filters (Vegan, Gluten-Free), pantry expiry alerts, ingredient substitution AI, and offline saved favorites.'
    ]
  },
  {
    id: 10,
    slug: 'conclusion',
    title: 'Conclusion & Summary',
    subtitle: 'Delivering smart, sustainable cooking through modern web technologies',
    category: 'Wrap-up',
    speakerNotes: [
      "To conclude, PantryPal demonstrates how focused algorithmic matching and clean UI design can solve a genuine everyday problem.",
      "By connecting available pantry ingredients with a vast culinary database, the app minimizes kitchen waste and sparks cooking creativity.",
      "Thank you, Respected Trainer Gagandeep Singh Sir, for your guidance and mentorship throughout this project.",
      "I am now open to any questions or feedback."
    ],
    keyPoints: [
      'Project Outcome: A fully responsive, pantry-first recipe recommendation engine built with React and REST APIs.',
      'Key Impact: Reduces food waste, simplifies meal planning, and maximizes utility of existing groceries.',
      'Technical Mastery: Demonstrated async data pipelines, algorithmic matching, deduplication, and dynamic routing.',
      'Thank You! Presented by Mrinal Khandelwal | Trainer: Gagandeep Singh'
    ]
  }
];

export const DEMO_SAMPLE_RECIPES: RecipeMock[] = [
  {
    idMeal: '52882',
    strMeal: 'Balchi di Pisca',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wqqvyv1511179850.jpg',
    matchPercentage: 100,
    matchedIngredients: ['potato', 'tomato', 'onion'],
    missingIngredients: ['salt cod', 'green pepper', 'garlic', 'tobasco sauce', 'nutmeg'],
    strCategory: 'Seafood',
    strArea: 'Portuguese',
    strInstructions: 'Soak the salted codfish in water overnight. Boil the potatoes and mash with codfish, tomato, onion, green pepper, garlic, and spices. Shape into balls and deep fry until golden brown.',
    ingredientsList: [
      { ingredient: 'Salt cod', measure: '500g' },
      { ingredient: 'Potatoes', measure: '3 large' },
      { ingredient: 'Tomatoes', measure: '2 chopped' },
      { ingredient: 'Onions', measure: '1 diced' },
      { ingredient: 'Green pepper', measure: '1 diced' },
      { ingredient: 'Garlic', measure: '2 cloves' },
      { ingredient: 'Tobasco sauce', measure: '1 tsp' },
      { ingredient: 'Nutmeg', measure: '1/2 tsp' }
    ]
  },
  {
    idMeal: '52934',
    strMeal: 'Bengali Chicken Curry with Potatoes',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/7vsvtt1742469493.jpg',
    matchPercentage: 100,
    matchedIngredients: ['potato', 'tomato', 'onion'],
    missingIngredients: ['olive oil', 'ginger garlic paste', 'cayenne pepper', 'curry powder', 'garam masala'],
    strCategory: 'Chicken',
    strArea: 'Indian',
    strInstructions: 'Heat oil in a heavy pot. Brown the cubed potatoes and set aside. Sauté sliced onions and tomatoes with ginger-garlic paste. Add chicken pieces and simmer with turmeric, cumin, and garam masala until tender and fragrant.',
    ingredientsList: [
      { ingredient: 'Chicken', measure: '800g' },
      { ingredient: 'Potatoes', measure: '2 peeled & halved' },
      { ingredient: 'Onions', measure: '2 sliced' },
      { ingredient: 'Tomatoes', measure: '2 pureed' },
      { ingredient: 'Ginger garlic paste', measure: '2 tbsp' },
      { ingredient: 'Curry powder', measure: '1 tbsp' },
      { ingredient: 'Garam masala', measure: '1 tsp' },
      { ingredient: 'Olive oil', measure: '3 tbsp' }
    ]
  },
  {
    idMeal: '52824',
    strMeal: 'Beef Empanadas',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/4w10fs1583441494.jpg',
    matchPercentage: 67,
    matchedIngredients: ['onion', 'tomato'],
    missingIngredients: ['lard', 'water', 'salt', 'all purpose flour', 'garlic'],
    strCategory: 'Beef',
    strArea: 'Argentinian',
    strInstructions: 'Prepare the dough using flour, lard, and water. Sauté ground beef with diced onions, tomatoes, and garlic. Fill dough circles with the beef mixture, fold and crimp edges, then bake at 200°C until golden.',
    ingredientsList: [
      { ingredient: 'Minced Beef', measure: '500g' },
      { ingredient: 'Onions', measure: '2 finely chopped' },
      { ingredient: 'Tomatoes', measure: '1 chopped' },
      { ingredient: 'All purpose flour', measure: '400g' },
      { ingredient: 'Lard', measure: '100g' },
      { ingredient: 'Garlic', measure: '2 cloves' },
      { ingredient: 'Salt', measure: '1 tsp' }
    ]
  },
  {
    idMeal: '52952',
    strMeal: 'BEEF LOK LAK (Lok Lak Sach Ko)',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    matchPercentage: 67,
    matchedIngredients: ['tomato', 'onion'],
    missingIngredients: ['beef tenderloin', 'garlic', 'oil', 'palm sugar', 'sea salt'],
    strCategory: 'Beef',
    strArea: 'Cambodian',
    strInstructions: 'Marinate sliced beef tenderloin with soy sauce, palm sugar, and garlic. Stir fry on high heat. Serve over a bed of fresh sliced tomatoes, onions, and crispy lettuce with lime black pepper dipping sauce.'
  },
  {
    idMeal: '52975',
    strMeal: 'Beef Mandi',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/7j09ch1742468307.jpg',
    matchPercentage: 67,
    matchedIngredients: ['onion', 'tomato'],
    missingIngredients: ['basmati rice', 'beef stock', 'garlic', 'green chilli', 'salt'],
    strCategory: 'Beef',
    strArea: 'Yemeni',
    strInstructions: 'Slow cook seasoned beef with traditional mandi spices. Cook basmati rice in the fragrant beef stock infused with fried onions, tomatoes, and dried lime until fluffy.'
  },
  {
    idMeal: '52940',
    strMeal: 'Brown Stew Chicken',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/sypxsv1511296990.jpg',
    matchPercentage: 67,
    matchedIngredients: ['onion', 'tomato'],
    missingIngredients: ['chicken', 'garlic clove', 'red pepper', 'carrots', 'lime'],
    strCategory: 'Chicken',
    strArea: 'Jamaican',
    strInstructions: 'Caramelize brown sugar in oil, add seasoned chicken pieces, sliced onions, tomatoes, and scotch bonnet peppers. Simmer until a rich, dark gravy coats the chicken.'
  }
];

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Globe, Code2, Database, Layout, Sparkles, Terminal } from 'lucide-react';

export const Slide5Technologies: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<number>(0);

  const techStack = [
    {
      id: 0,
      name: 'React 18+',
      category: 'Frontend Framework',
      icon: <Code2 className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Core UI & State',
      description: 'Declarative component-driven UI library. Powers state handling via useState for dynamic ingredient arrays and recipes, and useEffect for asynchronous lifecycle data fetching in recipe details.',
      codeSnippet: 'const [ingredients, setIngredients] = useState([]);\nconst [recipes, setRecipes] = useState([]);\nuseEffect(() => { fetchRecipe(); }, [id]);'
    },
    {
      id: 1,
      name: 'React Router DOM',
      category: 'Client-Side Routing',
      icon: <Globe className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Navigation Engine',
      description: 'Enables seamless single-page application (SPA) multi-page navigation between Home (/) and dynamic Recipe Details (/recipe/:id) without reloading the browser window.',
      codeSnippet: '<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/recipe/:id" element={<RecipeDetails />} />\n</Routes>'
    },
    {
      id: 2,
      name: 'TheMealDB REST API',
      category: 'External Data Source',
      icon: <Database className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Public Food DB',
      description: 'Provides free public endpoints: filter.php?i={ingredient} for fetching meals by ingredient and lookup.php?i={idMeal} for pulling 20 ingredients, measurements, images, and cooking instructions.',
      codeSnippet: 'fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanIngredient}`)\nfetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`)'
    },
    {
      id: 3,
      name: 'JavaScript ES6+ (Async/Await)',
      category: 'Asynchronous Logic',
      icon: <Terminal className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Async Pipelines',
      description: 'Leverages Promise.all for parallel multi-ingredient fetching, flatMap for merging meal arrays, and JavaScript Map for in-memory recipe deduplication by idMeal.',
      codeSnippet: 'const responses = await Promise.all(requests);\nconst uniqueRecipes = Array.from(new Map(allRecipes.map(r => [r.idMeal, r])).values());'
    },
    {
      id: 4,
      name: 'Bootstrap 5 & Dark CSS',
      category: 'UI Styling & Grid',
      icon: <Layout className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Responsive Grid',
      description: 'Utilizes Bootstrap 5 grid layout (container-fluid, row, col-md-6, col-lg-4), cards, badges, and alerts customized on top of a dark kitchen aesthetic (#1e1e1e canvas, yellow & green accents).',
      codeSnippet: '<div className="card h-100 shadow-sm border-0 rounded-4 p-3">\n  <p className="badge text-bg-success">🎯 {recipe.matchPercentage}% Match</p>'
    },
    {
      id: 5,
      name: 'Vite & Bundler Tooling',
      category: 'Build Environment',
      icon: <Sparkles className="w-4 h-4 text-[#3b82f6]" />,
      badge: 'Build System',
      description: 'Lightning-fast ES module development server and Rollup/esbuild-based production bundler ensuring optimal code splitting and rapid dev iteration.',
      codeSnippet: 'npm run dev  // Runs Vite Dev Server on port 3000\nnpm run build // Generates production static assets in dist/'
    }
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-[#050505] text-[#e5e5e5] select-none">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-start justify-between border-b border-[#222] pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#3b82f6] font-bold tracking-[0.25em] mb-1">
            <span>Slide 05 / 10</span>
            <span className="text-[#444]">•</span>
            <span>Technology Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white font-display">
            Technologies & <span className="font-serif italic text-[#ccc]">Tools</span> Used
          </h2>
          <p className="text-xs md:text-sm text-[#888] mt-1 font-light">
            Verified technologies identified directly from the PantryPal codebase
          </p>
        </div>
        <div className="hidden sm:flex p-2.5 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6]">
          <Cpu className="w-5 h-5" />
        </div>
      </div>

      {/* Main Tech Stack Grid & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-2 items-stretch">
        {/* Left: 6 Tech Stack Cards (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {techStack.map((tech) => (
            <motion.div
              key={tech.id}
              onClick={() => setSelectedTech(tech.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                selectedTech === tech.id
                  ? 'bg-[#0d0d0d] border-[#3b82f6] shadow-md shadow-[#3b82f6]/10'
                  : 'bg-[#0d0d0d] border-[#1a1a1a] hover:border-[#333]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-[#050505] border border-[#222]">
                    {tech.icon}
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{tech.name}</h3>
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#60a5fa]">
                  {tech.badge}
                </span>
              </div>
              <p className="text-[11px] text-[#888] line-clamp-2 leading-relaxed font-light">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Code Inspector Detail for Selected Tech (5 cols) */}
        <motion.div
          key={selectedTech}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-5 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] p-4 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-2.5 mb-3">
              <div>
                <span className="text-[9px] font-mono uppercase text-[#3b82f6] font-bold tracking-widest">
                  {techStack[selectedTech].category}
                </span>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {techStack[selectedTech].name} Implementation
                </h4>
              </div>
              <div className="p-1.5 rounded bg-[#050505] border border-[#222]">
                {techStack[selectedTech].icon}
              </div>
            </div>

            <p className="text-xs text-[#aaa] leading-relaxed mb-3 font-light">
              {techStack[selectedTech].description}
            </p>

            <div className="rounded bg-[#050505] border border-[#222] p-3 font-mono text-[11px] text-[#93c5fd] overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between text-[9px] text-[#666] border-b border-[#1a1a1a] pb-1 mb-2 font-mono uppercase tracking-wider">
                <span>Code Excerpt (Source Project)</span>
                <span>JSX / TS</span>
              </div>
              <pre className="whitespace-pre leading-relaxed text-[10px]">{techStack[selectedTech].codeSnippet}</pre>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#1a1a1a] text-[10px] font-mono text-[#666] flex items-center justify-between">
            <span>Dependencies Checked</span>
            <span className="text-[#3b82f6] font-semibold uppercase tracking-wider">Verified Implementation</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#1a1a1a] text-xs text-[#666] flex items-center justify-between font-mono text-[11px]">
        <span>Click any technology card to view actual codebase implementation</span>
        <span className="text-[#3b82f6] font-bold uppercase tracking-wider text-[10px]">React 18 • Bootstrap 5 • TheMealDB</span>
      </div>
    </div>
  );
};

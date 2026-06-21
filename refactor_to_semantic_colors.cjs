const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    let fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Clean up previous dark mode additions to avoid conflicts
  content = content.replace(/ dark:bg-slate-900/g, '');
  content = content.replace(/ dark:bg-slate-800/g, '');
  content = content.replace(/ dark:bg-slate-950/g, '');
  content = content.replace(/ dark:bg-gray-950/g, '');
  content = content.replace(/ dark:bg-gray-900/g, '');
  content = content.replace(/ dark:text-slate-100/g, '');
  content = content.replace(/ dark:text-slate-200/g, '');
  content = content.replace(/ dark:text-slate-300/g, '');
  content = content.replace(/ dark:text-white/g, '');
  content = content.replace(/ dark:border-slate-700/g, '');

  // Map to semantic variables
  // Backgrounds
  content = content.replace(/\bbg-white\b/g, 'bg-surface');
  content = content.replace(/\bbg-soft\b/g, 'bg-background');
  content = content.replace(/\bbg-navy-dark\b/g, 'bg-primary-dark');
  content = content.replace(/\bbg-navy\b/g, 'bg-primary');
  
  // Texts
  content = content.replace(/\btext-navy-dark\b/g, 'text-primary-dark');
  content = content.replace(/\btext-navy\b/g, 'text-primary');
  content = content.replace(/\btext-silver\b/g, 'text-muted');
  
  // Slate texts that might be causing issues
  content = content.replace(/\btext-slate-[678]00\b/g, 'text-text-main');
  content = content.replace(/\btext-gray-[5678]00\b/g, 'text-text-main');
  
  // Borders
  // border-slate-200, border-white/20, etc. remain tailwind standard but let's map border-border
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log('Semantic color refactoring complete!');

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

  // Undo semantic mappings
  content = content.replace(/\bbg-surface\b/g, 'bg-white dark:bg-black');
  content = content.replace(/\bbg-background\b/g, 'bg-soft dark:bg-black');
  content = content.replace(/\bbg-primary-dark\b/g, 'bg-navy-dark dark:bg-black');
  content = content.replace(/\bbg-primary\b/g, 'bg-navy dark:bg-black');
  
  content = content.replace(/\btext-primary-dark\b/g, 'text-navy-dark dark:text-white');
  content = content.replace(/\btext-primary\b/g, 'text-navy dark:text-white');
  content = content.replace(/\btext-muted\b/g, 'text-silver dark:text-gray-300');
  
  content = content.replace(/\btext-text-main\b/g, 'text-slate-700 dark:text-white');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Restored ${file}`);
  }
});
console.log('Restoration complete!');

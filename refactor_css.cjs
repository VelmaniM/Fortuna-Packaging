const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.css') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace utility classes intelligently
  content = content.replace(/\bbg-white(?! dark:bg-slate-900)\b/g, 'bg-white dark:bg-slate-900');
  content = content.replace(/\bbg-soft(?! dark:bg-slate-800)\b/g, 'bg-soft dark:bg-slate-800');
  content = content.replace(/\btext-navy(?! dark:text-slate-100)\b/g, 'text-navy dark:text-slate-100');
  content = content.replace(/\bbg-navy(?!(-dark)? dark:bg-slate-950)\b/g, 'bg-navy dark:bg-slate-950');
  content = content.replace(/\bbg-navy-dark(?! dark:bg-slate-950)\b/g, 'bg-navy-dark dark:bg-slate-950');
  content = content.replace(/\btext-silver(?! dark:text-slate-300)\b/g, 'text-silver dark:text-slate-300');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log('Done!');

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== STEP 1: Update _astro/bracket-data.js with site_settings.json data ===');
const siteSettingsRaw = fs.readFileSync('site_settings.json', 'utf8');
const bracketDataPath = path.join('_astro', 'bracket-data.js');
let bracketDataContent = fs.readFileSync(bracketDataPath, 'utf8');

const siteSettingsScript = `\nwindow.__SITE_SETTINGS = ${siteSettingsRaw.trim()};\n`;
if (!bracketDataContent.includes('window.__SITE_SETTINGS')) {
  bracketDataContent += siteSettingsScript;
  fs.writeFileSync(bracketDataPath, bracketDataContent, 'utf8');
  console.log('Added window.__SITE_SETTINGS to _astro/bracket-data.js');
} else {
  bracketDataContent = bracketDataContent.replace(/\nwindow\.__SITE_SETTINGS = [\s\S]*?;\n/, siteSettingsScript);
  fs.writeFileSync(bracketDataPath, bracketDataContent, 'utf8');
  console.log('Updated window.__SITE_SETTINGS in _astro/bracket-data.js');
}

console.log('=== STEP 2: Ensure site-settings.CKBpDEDM.js supports window.__SITE_SETTINGS fallback ===');
const siteSettingsModulePath = path.join('_astro', 'site-settings.CKBpDEDM.js');
let siteSettingsMod = fs.readFileSync(siteSettingsModulePath, 'utf8');

if (!siteSettingsMod.includes('window.__SITE_SETTINGS')) {
  const cacheReturnTarget = 'return!l(n)||!l(n.data)||typeof n.fetchedAt!="number"?null:{data:h(n.data),fetchedAt:n.fetchedAt}}catch{return null}}';
  const cacheReturnReplacement = 'return!l(n)||!l(n.data)||typeof n.fetchedAt!="number"?null:{data:h(n.data),fetchedAt:n.fetchedAt}}catch{return null}if(typeof window!="undefined"&&window.__SITE_SETTINGS)return{data:h(window.__SITE_SETTINGS),fetchedAt:Date.now()};return null}';
  if (siteSettingsMod.includes(cacheReturnTarget)) {
    siteSettingsMod = siteSettingsMod.replace(cacheReturnTarget, cacheReturnReplacement);
  }

  const fetchNotOkTarget = 'if(!c.ok){if(o)return u(o.data),{settings:o.data,fromCache:!0,fetchedAt:o.fetchedAt};throw new Error(`Failed to load site settings: ${c.status}`)}';
  const fetchNotOkReplacement = 'if(!c.ok){if(o)return u(o.data),{settings:o.data,fromCache:!0,fetchedAt:o.fetchedAt};if(typeof window!="undefined"&&window.__SITE_SETTINGS){const m=h(window.__SITE_SETTINGS);return u(m),{settings:m,fromCache:!0,fetchedAt:Date.now()}}throw new Error(`Failed to load site settings: ${c.status}`)}';
  if (siteSettingsMod.includes(fetchNotOkTarget)) {
    siteSettingsMod = siteSettingsMod.replace(fetchNotOkTarget, fetchNotOkReplacement);
  }

  const fetchCallTarget = 'const T=b(e.apiBaseUrl),c=await fetch(`${T}${n}`,{headers:{Accept:"application/json"},signal:e.signal});';
  const fetchCallReplacement = 'const T=b(e.apiBaseUrl);let c;try{c=await fetch(`${T}${n}`,{headers:{Accept:"application/json"},signal:e.signal});}catch(err){if(o)return u(o.data),{settings:o.data,fromCache:!0,fetchedAt:o.fetchedAt};if(typeof window!="undefined"&&window.__SITE_SETTINGS){const m=h(window.__SITE_SETTINGS);return u(m),{settings:m,fromCache:!0,fetchedAt:Date.now()}}throw err;}';
  if (siteSettingsMod.includes(fetchCallTarget)) {
    siteSettingsMod = siteSettingsMod.replace(fetchCallTarget, fetchCallReplacement);
  }

  fs.writeFileSync(siteSettingsModulePath, siteSettingsMod, 'utf8');
  console.log('Injected fallback into _astro/site-settings.CKBpDEDM.js');
}

console.log('=== STEP 3: Create temporary entry files and bundle with esbuild ===');
const entryIndex = path.join('_astro', '_entry_index.js');
fs.writeFileSync(entryIndex, `
import "./Winners.astro_astro_type_script_index_0_lang.9ape3wy-.js";
import "./Bracket.astro_astro_type_script_index_0_lang.By8uBWsx.js";
import "./Sponsors.astro_astro_type_script_index_0_lang.kMc95YVg.js";
import "./About.astro_astro_type_script_index_0_lang.DRiQXxsm.js";
import "./Rounds.astro_astro_type_script_index_0_lang.DyZ9KqsY.js";
import "./SpecialThanks.astro_astro_type_script_index_0_lang.C9B1wXl3.js";
import "./VsScreenModal.astro_astro_type_script_index_0_lang.BXoPRkcZ.js";
import "./index.astro_astro_type_script_index_0_lang.Cv9zphZG.js";
`, 'utf8');

const entryNgc = path.join('_astro', '_entry_ngc.js');
fs.writeFileSync(entryNgc, `
import "./NgcResultsShowcase.astro_astro_type_script_index_0_lang.BAW-JUi9.js";
import "./ngc.astro_astro_type_script_index_0_lang.Lo47_M4U.js";
`, 'utf8');

const entryJudge = path.join('_astro', '_entry_judge.js');
fs.writeFileSync(entryJudge, `
import "./judge.astro_astro_type_script_index_0_lang.CaRAhbzU.js";
`, 'utf8');

execSync(`npx esbuild "${entryIndex}" --bundle --format=iife --outfile=_astro/bundle.index.js`, { stdio: 'inherit' });
execSync(`npx esbuild "${entryNgc}" --bundle --format=iife --outfile=_astro/bundle.ngc.js`, { stdio: 'inherit' });
execSync(`npx esbuild "${entryJudge}" --bundle --format=iife --outfile=_astro/bundle.judge.js`, { stdio: 'inherit' });

fs.unlinkSync(entryIndex);
fs.unlinkSync(entryNgc);
fs.unlinkSync(entryJudge);

console.log('=== STEP 4: Update HTML files to use classic scripts instead of type="module" ===');

// --- index.html ---
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Remove individual module script tags
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/Winners\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/Bracket\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/Sponsors\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/About\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/Rounds\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/SpecialThanks\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/VsScreenModal\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
indexHtml = indexHtml.replace(/<script type="module" src="_astro\/index\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');

// Ensure bracket-data.js is present
if (!indexHtml.includes('_astro/bracket-data.js')) {
  indexHtml = indexHtml.replace('</head>', '<script src="_astro/bracket-data.js"></script></head>');
}

// Add bundle.index.js right before </main>
if (!indexHtml.includes('_astro/bundle.index.js')) {
  indexHtml = indexHtml.replace('</main>', '<script src="_astro/bundle.index.js"></script></main>');
}

// Fix typo
indexHtml = indexHtml.replace(/index\.html#bracker/g, 'index.html#bracket');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html to use _astro/bundle.index.js and _astro/bracket-data.js');

// --- ngc/index.html ---
let ngcHtml = fs.readFileSync(path.join('ngc', 'index.html'), 'utf8');
ngcHtml = ngcHtml.replace(/<script type="module" src="\.\.\/_astro\/NgcResultsShowcase\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');
ngcHtml = ngcHtml.replace(/<script type="module" src="\.\.\/_astro\/ngc\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');

if (!ngcHtml.includes('_astro/bracket-data.js')) {
  ngcHtml = ngcHtml.replace('</head>', '<script src="../_astro/bracket-data.js"></script></head>');
}
if (!ngcHtml.includes('_astro/bundle.ngc.js')) {
  ngcHtml = ngcHtml.replace('</main>', '<script src="../_astro/bundle.ngc.js"></script></main>');
}
// If </main> not found, insert before </body> or </html>
if (!ngcHtml.includes('_astro/bundle.ngc.js')) {
  ngcHtml = ngcHtml.replace('</body>', '<script src="../_astro/bundle.ngc.js"></script></body>');
}
if (!ngcHtml.includes('_astro/bundle.ngc.js')) {
  ngcHtml = ngcHtml.replace('</html>', '<script src="../_astro/bundle.ngc.js"></script></html>');
}
ngcHtml = ngcHtml.replace(/index\.html#bracker/g, 'index.html#bracket');
fs.writeFileSync(path.join('ngc', 'index.html'), ngcHtml, 'utf8');
console.log('Updated ngc/index.html to use _astro/bundle.ngc.js');

// --- judge/index.html ---
let judgeHtml = fs.readFileSync(path.join('judge', 'index.html'), 'utf8');
judgeHtml = judgeHtml.replace(/<script type="module" src="\.\.\/_astro\/judge\.astro_astro_type_script_index_0_lang\.[^"]+"><\/script>/g, '');

if (!judgeHtml.includes('_astro/bracket-data.js')) {
  judgeHtml = judgeHtml.replace('</head>', '<script src="../_astro/bracket-data.js"></script></head>');
}
if (!judgeHtml.includes('_astro/bundle.judge.js')) {
  judgeHtml = judgeHtml.replace('</main>', '<script src="../_astro/bundle.judge.js"></script></main>');
}
if (!judgeHtml.includes('_astro/bundle.judge.js')) {
  judgeHtml = judgeHtml.replace('</body>', '<script src="../_astro/bundle.judge.js"></script></body>');
}
if (!judgeHtml.includes('_astro/bundle.judge.js')) {
  judgeHtml = judgeHtml.replace('</html>', '<script src="../_astro/bundle.judge.js"></script></html>');
}
judgeHtml = judgeHtml.replace(/index\.html#bracker/g, 'index.html#bracket');
fs.writeFileSync(path.join('judge', 'index.html'), judgeHtml, 'utf8');
console.log('Updated judge/index.html to use _astro/bundle.judge.js');

// --- rules/index.html ---
let rulesHtml = fs.readFileSync(path.join('rules', 'index.html'), 'utf8');
rulesHtml = rulesHtml.replace(/index\.html#bracker/g, 'index.html#bracket');
fs.writeFileSync(path.join('rules', 'index.html'), rulesHtml, 'utf8');
console.log('Updated rules/index.html');

console.log('=== All files updated successfully! ===');

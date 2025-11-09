/**
 * Script to process base64 images from imagesfromgoogle.txt
 * and update the techStackData.ts file with base64 images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the base64 images file
const base64File = path.join(__dirname, '..', 'data', 'imagesfromgoogle.txt');
const techStackFile = path.join(__dirname, '..', 'src', 'data', 'techStackData.ts');

// Mapping of tech names in the file to tech names in techStackData
const techMapping = {
  'groq': 'Groq',
  'llamaindex': 'LlamaIndex',
  'unsloth': 'Unsloth',
  'open router': 'OpenRouter',
  'google gemma': 'Google Gemma',
  'open ai': 'OpenAI',
  'github': 'GitHub',
  'dvc': 'DVC',
  'make': 'Make',
  'retell ai': 'Retell AI',
  'vector shift': 'VectorShift',
  'bolt.new': 'Bolt.new',
  'cursor': 'Cursor',
  'windsurf': 'WindSurf',
  'github copilot': 'GitHub Copilot',
  'claude code': 'Claude Code',
  'gemini cli': 'Gemini CLI',
  'stripe': 'Stripe'
};

// Parse base64 images from the text file
function parseBase64Images() {
  const content = fs.readFileSync(base64File, 'utf-8');
  const lines = content.split('\n');
  const imageMap = {};
  
  lines.forEach((line, index) => {
    // Skip empty lines or comments
    if (!line.trim() || line.trim().startsWith('#')) return;
    
    // Match pattern: "name -> data:image/..." or "name->data:image/..."
    if (line.includes('->') && line.includes('data:image')) {
      // Split by -> with optional spaces
      const parts = line.split(/\s*->\s*/);
      if (parts.length === 2) {
        const techName = parts[0].trim().toLowerCase();
        const base64Data = parts[1].trim();
        
        if (base64Data.startsWith('data:image')) {
          imageMap[techName] = base64Data;
          console.log(`✓ Found: ${techName} (${(base64Data.length / 1024).toFixed(2)} KB)`);
        }
      }
    }
  });
  
  return imageMap;
}

// Update techStackData.ts with base64 images
function updateTechStack() {
  const imageMap = parseBase64Images();
  const techStackContent = fs.readFileSync(techStackFile, 'utf-8');
  
  let updatedContent = techStackContent;
  
  // Replace image paths with base64 data
  Object.entries(techMapping).forEach(([key, techName]) => {
    if (imageMap[key]) {
      const imagePath = `/images/tech/`;
      const regex = new RegExp(`name: '${techName}'[^}]*image: '[^']*'`, 'g');
      
      updatedContent = updatedContent.replace(
        regex,
        (match) => match.replace(/image: '[^']*'/, `image: '${imageMap[key]}'`)
      );
      
      console.log(`✓ Updated ${techName} with base64 image`);
    }
  });
  
  // Write updated content back to file
  fs.writeFileSync(techStackFile, updatedContent, 'utf-8');
  console.log('\n✓ Successfully updated techStackData.ts with base64 images!');
}

// Create a summary of available images
function createSummary() {
  const imageMap = parseBase64Images();
  console.log('\n=== Available Base64 Images ===');
  Object.keys(imageMap).forEach(key => {
    const mapped = techMapping[key] || 'Not mapped';
    const size = (imageMap[key].length / 1024).toFixed(2);
    console.log(`${key} -> ${mapped} (${size} KB)`);
  });
  console.log(`\nTotal: ${Object.keys(imageMap).length} images\n`);
}

// Main execution
const args = process.argv.slice(2);

if (args.includes('--summary')) {
  createSummary();
} else if (args.includes('--update')) {
  updateTechStack();
} else {
  console.log('Usage:');
  console.log('  node processBase64Images.js --summary    Show available images');
  console.log('  node processBase64Images.js --update     Update techStackData.ts');
}

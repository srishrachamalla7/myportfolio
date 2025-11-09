# Using Base64 Images from Google

This folder contains base64-encoded images sourced from Google Images for various tech tools and platforms used in the portfolio.

## Files

- **imagesfromgoogle.txt** - Contains base64-encoded images mapped to technology names

## Format

Each line in `imagesfromgoogle.txt` follows this format:
```
technology name -> data:image/type;base64,<base64_string>
```

## Available Images

The file contains base64 images for:
- groq
- llamaindex
- unsloth
- open router (OpenRouter)
- google gemma (Google Gemma)
- open ai (OpenAI)
- github
- DVC
- make
- retell ai (Retell AI)
- vector shift (VectorShift)
- bolt.new
- cursor
- windsurf (WindSurf)
- github copilot (GitHub Copilot)
- claude code (Claude Code)
- gemini cli (Gemini CLI)
- stripe

## How to Use

### Option 1: Using the Script (Automated)

Run the provided Node.js script to automatically update `techStackData.ts`:

```bash
# View available images
node scripts/processBase64Images.js --summary

# Update techStackData.ts with base64 images
node scripts/processBase64Images.js --update
```

### Option 2: Manual Update

1. Copy the base64 string for the technology you want
2. In `src/data/techStackData.ts`, replace the image path with the base64 string:

**Before:**
```typescript
{ name: 'Groq', image: '/images/tech/groq.png', description: '...' }
```

**After:**
```typescript
{ name: 'Groq', image: 'data:image/png;base64,iVBORw0KG...', description: '...' }
```

### Option 3: Create a Separate Image Map

Create a new file `src/data/base64Images.ts`:

```typescript
export const base64Images: Record<string, string> = {
  'Groq': 'data:image/png;base64,iVBORw0KG...',
  'LlamaIndex': 'data:image/jpeg;base64,/9j/4AA...',
  // ... more images
};
```

Then import and use in `techStackData.ts`:

```typescript
import { base64Images } from './base64Images';

export const categories: TechCategory[] = [
  {
    title: 'AI & ML',
    items: [
      { 
        name: 'Groq', 
        image: base64Images['Groq'] || '/images/tech/groq.png', 
        description: '...' 
      },
      // ... more items
    ]
  }
];
```

## Advantages of Base64 Images

✅ No HTTP requests for images
✅ Faster initial page load
✅ No 404 errors for missing images
✅ Self-contained components

## Disadvantages

❌ Larger file size (base64 is ~33% larger than binary)
❌ No browser caching for individual images
❌ Harder to update images

## Recommendations

- Use base64 for **small icons and logos** (< 10KB)
- Use regular image files for **larger images**
- Consider using both: base64 as fallback for external sources

## Notes

- All images are sourced from Google Images
- Ensure proper licensing/attribution if required
- The base64 strings are very long and may affect code readability

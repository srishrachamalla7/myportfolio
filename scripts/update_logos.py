import base64
import os
import re

# Create directory
os.makedirs('public/images/tech', exist_ok=True)

def clean_base64(data):
    """Clean base64 string by removing data URI prefix and whitespace"""
    # Remove data:image/...;base64, prefix if present
    if 'base64,' in data:
        data = data.split('base64,')[1]
    # Remove any whitespace and newlines
    data = re.sub(r'\s+', '', data)
    return data

# Define logos with their base64 data
# Note: Due to message length limits, you should replace these with your actual full base64 strings
logos_to_update = [
    'groq.png',
    'llamaindex.jpeg',  
    'unsloth.png',
    'openrouter.png',
    'gemini.png',  # google gemma
    'openai.svg',
    'github.svg',
    'dvc.svg',
    'make.png',
    'retellai.png',
    'vectorshift.png',
    'bolt.png',
    'cursor.png',
    'windsurf.png', 
    'copilot.png',  # github copilot
    'claudecode.png',
    'geminicli.png',
    'stripe.png',
]

print("To update logos with Base64 data, please:")
print("1. The Base64 strings in your message appear to be very long")
print("2. Please save each logo individually by:")
print("   - Going to the original source")
print("   - Downloading the image")
print("   - Placing it in public/images/tech/")
print()
print("Or provide the complete, untruncated Base64 strings for each logo.")
print()
print("Logos that need updating:")
for logo in logos_to_update:
    print(f"  - {logo}")

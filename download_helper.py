import sys
import requests
import os

def download_file(url, out_path):
    # Ensure directory exists
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    try:
        # Some URLs might be base64 data URIs, we don't download those.
        if url.startswith('data:image'):
            print(f"Skipping base64 data URI for {out_path}")
            return
        response = requests.get(url, stream=True, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        with open(out_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print(f"Successfully downloaded {url} to {out_path}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {url}: {e}", file=sys.stderr)
        # Do not exit, continue with other downloads

import json

def process_downloads(json_path):
    with open(json_path, 'r') as f:
        data = json.load(f)
    
    for item in data.get('images', []):
        url = item.get('url')
        path = item.get('path')
        if url and path:
            download_file(url, path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python download_helper.py <json_file>", file=sys.stderr)
        sys.exit(1)
    
    json_file = sys.argv[1]
    process_downloads(json_file)

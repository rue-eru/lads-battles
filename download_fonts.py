import requests
import re
import os

fonts = [
    {"name": "Inknut_Antiqua", "family": "Inknut+Antiqua", "dir": "public/fonts/Inknut_Antiqua"},
    {"name": "Source_Serif_4", "family": "Source+Serif+4", "dir": "public/fonts/Source_Serif_4"},
    {"name": "Noto_Serif_JP", "family": "Noto+Serif+JP", "dir": "public/fonts/Noto_Serif_JP"}
]

weights = ["300", "400", "500", "600", "700"]

for font in fonts:
    os.makedirs(font["dir"], exist_ok=True)
    
    print(f"Downloading {font['name']}...")
    
    # Get CSS from Google Fonts
    url = f"https://fonts.googleapis.com/css2?family={font['family']}:wght@{';'.join(weights)}&display=swap"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    }
    response = requests.get(url, headers=headers)
    
    # Extract WOFF2 URLs
    woff2_urls = re.findall(r'url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)', response.text)
    
    if not woff2_urls:
        print(f"  No WOFF2 files found for {font['name']}")
        # Try to find TTF/OTF URLs instead
        ttf_urls = re.findall(r'url\((https://fonts\.gstatic\.com/[^)]+\.ttf)\)', response.text)
        for ttf_url in ttf_urls:
            weight_match = re.search(r'wght@(\d+)', ttf_url)
            weight = weight_match.group(1) if weight_match else "400"
            filename = f"{font['dir']}/{font['name']}-{weight}.ttf"
            print(f"  Downloading TTF weight {weight}...")
            font_data = requests.get(ttf_url).content
            with open(filename, "wb") as f:
                f.write(font_data)
    else:
        for woff2_url in woff2_urls:
            # Extract weight from URL
            weight_match = re.search(r'wght@(\d+)', woff2_url)
            weight = weight_match.group(1) if weight_match else "400"
            
            filename = f"{font['dir']}/{font['name']}-{weight}.woff2"
            print(f"  Downloading weight {weight}...")
            font_data = requests.get(woff2_url).content
            with open(filename, "wb") as f:
                f.write(font_data)

print("Done!")

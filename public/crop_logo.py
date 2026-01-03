from PIL import Image, ImageOps, ImageDraw

def crop_to_circle(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a circular mask
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + img.size, fill=255)
    
    # Apply the mask to the image
    result = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
    result.putalpha(mask)
    
    result.save(output_path)
    print(f"Saved circular logo to {output_path}")

if __name__ == "__main__":
    crop_to_circle("logo.jpeg", "logo-circle.png")

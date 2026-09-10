import math
from PIL import Image, ImageDraw

def create_app_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # 1. Background Rounded Rectangle
    radius = int(size * 0.22)
    # Background gradient approximation
    for y in range(size):
        ratio = y / size
        r = int(155 * (1 - ratio * 0.5) + 61 * (ratio * 0.5))
        g = int(81 * (1 - ratio * 0.5) + 32 * (ratio * 0.5))
        b = int(52 * (1 - ratio * 0.5) + 21 * (ratio * 0.5))
        draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
        
    # Mask to rounded rect
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, size, size], radius=radius, fill=255)
    
    # Apply rounded mask
    rounded_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rounded_img.paste(img, (0, 0), mask=mask)
    draw = ImageDraw.Draw(rounded_img)
    
    cx, cy = size / 2, size / 2
    
    # 2. Compass circles
    outer_r = size * 0.36
    inner_r = size * 0.30
    draw.ellipse([cx - outer_r, cy - outer_r, cx + outer_r, cy + outer_r], outline=(212, 163, 115, 120), width=max(1, int(size*0.008)))
    draw.ellipse([cx - inner_r, cy - inner_r, cx + inner_r, cy + inner_r], outline=(212, 163, 115, 180), width=max(1, int(size*0.005)))
    
    # Compass star tips
    star_len = size * 0.08
    for angle in [0, 90, 180, 270]:
        rad = math.radians(angle)
        x1 = cx + (inner_r) * math.cos(rad)
        y1 = cy + (inner_r) * math.sin(rad)
        x2 = cx + (inner_r + star_len) * math.cos(rad)
        y2 = cy + (inner_r + star_len) * math.sin(rad)
        draw.line([(x1, y1), (x2, y2)], fill=(255, 232, 163, 240), width=max(2, int(size*0.012)))
        
    # 3. Sacred Heart polygon
    scale = size / 512.0
    heart_points = []
    # Parametric heart equation
    steps = 100
    heart_center_y = cy * 0.95
    for i in range(steps):
        t = math.pi * 2 * (i / steps)
        # 16 sin^3(t)
        hx = 16 * (math.sin(t) ** 3)
        # -(13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t))
        hy = -(13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t))
        
        px = cx + hx * (scale * 7.5)
        py = heart_center_y + hy * (scale * 7.5)
        heart_points.append((px, py))
        
    draw.polygon(heart_points, fill=(235, 180, 125, 255), outline=(255, 240, 190, 255))
    
    # Sparkle in center
    sp_r = max(2, int(size * 0.025))
    draw.ellipse([cx - sp_r, heart_center_y - sp_r, cx + sp_r, heart_center_y + sp_r], fill=(255, 255, 255, 240))

    return rounded_img

# Generate icons
create_app_icon(512).save("icons/icon-512.png")
create_app_icon(192).save("icons/icon-192.png")
create_app_icon(180).save("icons/apple-touch-icon.png")
create_app_icon(32).save("icons/favicon-32.png")
print("Icons generated successfully!")

import cv2
import os
from PIL import Image

video_path = r"E:\Portfolio\animation.mp4"
output_dirs = [
    r"E:\Portfolio\character-frames",
    r"E:\Portfolio\public\character-frames"
]

for d in output_dirs:
    os.makedirs(d, exist_ok=True)

cap = cv2.VideoCapture(video_path)

# Directional mapping
frame_mapping = {
    "center": 36,
    "up": 87,
    "up-right": 30,
    "right": 24,
    "down-right": 6,
    "down": 48,
    "down-left": 0,
    "left": 60,
    "up-left": 72,
    "wave": 128,
    "point": 168,
}

# Also extract a slightly smoothed intermediate or alternate set if needed
extracted_data = {}

for name, target_idx in frame_mapping.items():
    cap.set(cv2.CAP_PROP_POS_FRAMES, target_idx)
    ret, frame = cap.read()
    if not ret:
        print(f"Failed to read frame {target_idx} for {name}")
        continue
    
    # OpenCV is BGR, convert to RGB for PIL
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(rgb_frame)
    
    # Save to both locations as WebP
    for d in output_dirs:
        webp_path = os.path.join(d, f"{name}.webp")
        jpg_path = os.path.join(d, f"{name}.jpg")
        pil_img.save(webp_path, "WEBP", quality=90, method=6)
        pil_img.save(jpg_path, "JPEG", quality=90)
    
    print(f"Extracted {name} from frame {target_idx} (saved as .webp and .jpg)")

cap.release()
print("All character frames extracted successfully!")

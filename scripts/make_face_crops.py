import cv2
import numpy as np
import os

input_dir = r"E:\Portfolio\scripts\frame_dump"
# Let's crop the head region: y from 0 to 700, x from 100 to 600 (in 720x1280, thumbnail is 360x640, so y: 0 to 350, x: 50 to 300)
# Let's check frames: 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90
test_frames = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90]

crops = []
for idx in test_frames:
    fpath = os.path.join(input_dir, f"frame_{idx:03d}.jpg")
    img = cv2.imread(fpath) # 360 x 640
    crop = img[20:300, 60:300] # head region
    crop = cv2.resize(crop, (150, 175))
    cv2.putText(crop, f"F{idx}", (10, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
    crops.append(crop)

rows = [np.hstack(crops[r*4 : (r+1)*4]) for r in range(4)]
grid = np.vstack(rows)
cv2.imwrite(r"E:\Portfolio\scripts\face_crops.jpg", grid)
print("Saved face crops")

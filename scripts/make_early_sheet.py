import cv2
import numpy as np
import os

input_dir = r"E:\Portfolio\scripts\frame_dump"

# Let's inspect frames 0 to 60 in steps of 3
indices = list(range(0, 60, 3))[:20]

tiles = []
for idx in indices:
    fpath = os.path.join(input_dir, f"frame_{idx:03d}.jpg")
    img = cv2.imread(fpath)
    small = cv2.resize(img, (180, 320))
    cv2.putText(small, f"F{idx}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    tiles.append(small)

rows = [np.hstack(tiles[r*5 : (r+1)*5]) for r in range(4)]
grid = np.vstack(rows)
cv2.imwrite(r"E:\Portfolio\scripts\contact_sheet_early.jpg", grid)
print("Saved early contact sheet")

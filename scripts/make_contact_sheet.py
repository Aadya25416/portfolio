import cv2
import numpy as np
import os

input_dir = r"E:\Portfolio\scripts\frame_dump"
# Let's create a montage of frames: 4 rows x 5 cols = 20 frames
selected_indices = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 191]

tiles = []
for idx in selected_indices:
    fpath = os.path.join(input_dir, f"frame_{idx:03d}.jpg")
    img = cv2.imread(fpath)
    # resize to 180x320
    small = cv2.resize(img, (180, 320))
    # put text
    cv2.putText(small, f"F{idx}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    tiles.append(small)

rows = []
for r in range(4):
    row_tiles = tiles[r*5 : (r+1)*5]
    rows.append(np.hstack(row_tiles))

grid = np.vstack(rows)
out_path = r"E:\Portfolio\scripts\contact_sheet_1.jpg"
cv2.imwrite(out_path, grid)
print(f"Saved contact sheet to {out_path}, size: {grid.shape}")

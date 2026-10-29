import cv2
import numpy as np
import os

input_dir = r"E:\Portfolio\scripts\frame_dump"
indices = [120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 190, 191]

tiles = []
for idx in indices:
    fpath = os.path.join(input_dir, f"frame_{idx:03d}.jpg")
    img = cv2.imread(fpath)
    small = cv2.resize(img, (180, 320))
    cv2.putText(small, f"F{idx}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
    tiles.append(small)

rows = [np.hstack(tiles[r*5 : (r+1)*5]) for r in range(4)]
grid = np.vstack(rows)
cv2.imwrite(r"E:\Portfolio\scripts\contact_sheet_late.jpg", grid)
print("Saved late contact sheet successfully")

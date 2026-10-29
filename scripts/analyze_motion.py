import cv2
import numpy as np
import glob
import os

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Check first frame face detection
img0 = cv2.imread(r"E:\Portfolio\scripts\frame_dump\frame_000.jpg")
gray0 = cv2.cvtColor(img0, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray0, 1.1, 4)
print("Faces in frame 0:", faces)

# Let's inspect motion/movement across the 192 frames
# Let's compute average difference from frame 0
diffs = []
frames = sorted(glob.glob(r"E:\Portfolio\scripts\frame_dump\frame_*.jpg"))

prev = None
motion_timeline = []

for idx, fpath in enumerate(frames):
    img = cv2.imread(fpath)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    if prev is not None:
        flow = cv2.absdiff(gray, prev)
        mean_diff = np.mean(flow)
        motion_timeline.append((idx, mean_diff))
    prev = gray

# Print summary of motion timeline
print("Total analyzed:", len(motion_timeline))
# Find intervals of low motion (pauses/poses) vs high motion (transitions)
low_motion = [item for item in motion_timeline if item[1] < 3.0]
print("Low motion frames (possible stable poses):", [item[0] for item in motion_timeline if item[1] < 2.0][:30])

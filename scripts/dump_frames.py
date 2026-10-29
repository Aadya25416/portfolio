import cv2
import os

video_path = r"E:\Portfolio\animation.mp4"
output_dir = r"E:\Portfolio\scripts\frame_dump"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

count = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    # Save every 2nd or 3rd frame as a thumbnail for inspection, or all 192
    out_path = os.path.join(output_dir, f"frame_{count:03d}.jpg")
    # Let's save half-res thumbnail (360x640) for fast inspection
    thumb = cv2.resize(frame, (360, 640))
    cv2.imwrite(out_path, thumb, [cv2.IMWRITE_JPEG_QUALITY, 85])
    count += 1

cap.release()
print(f"Dumped {count} frames to {output_dir}")

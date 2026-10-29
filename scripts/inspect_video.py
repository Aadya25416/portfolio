import cv2
import os

video_path = r"E:\Portfolio\animation.mp4"
print("File exists:", os.path.exists(video_path), "Size:", os.path.getsize(video_path))

cap = cv2.VideoCapture(video_path)
print("cap opened:", cap.isOpened())

if cap.isOpened():
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0
    print(f"Video Info:")
    print(f"  Dimensions: {width} x {height}")
    print(f"  Total Frames: {total_frames}")
    print(f"  FPS: {fps}")
    print(f"  Duration: {duration:.2f}s")
    
    # Read first frame and check background color
    ret, frame = cap.read()
    if ret:
        print(f"  Frame shape: {frame.shape}")
        # sample corners
        tl = frame[10, 10]
        tr = frame[10, width - 11]
        bl = frame[height - 11, 10]
        br = frame[height - 11, width - 11]
        print(f"  Top-Left (RGB): {tl[2]}, {tl[1]}, {tl[0]} -> Hex: #{tl[2]:02x}{tl[1]:02x}{tl[0]:02x}")
        print(f"  Top-Right (RGB): {tr[2]}, {tr[1]}, {tr[0]} -> Hex: #{tr[2]:02x}{tr[1]:02x}{tr[0]:02x}")
        print(f"  Bottom-Left (RGB): {bl[2]}, {bl[1]}, {bl[0]} -> Hex: #{bl[2]:02x}{bl[1]:02x}{bl[0]:02x}")
        print(f"  Bottom-Right (RGB): {br[2]}, {br[1]}, {br[0]} -> Hex: #{br[2]:02x}{br[1]:02x}{br[0]:02x}")
    cap.release()

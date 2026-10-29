export type DirectionalPose =
  | "center"
  | "up"
  | "up-right"
  | "right"
  | "down-right"
  | "down"
  | "down-left"
  | "left"
  | "up-left"
  | "wave"
  | "point";

export interface FrameAsset {
  key: DirectionalPose;
  webp: string;
  jpg: string;
  label: string;
}

export const CHARACTER_FRAMES: Record<DirectionalPose, FrameAsset> = {
  center: {
    key: "center",
    webp: "/character-frames/center.webp",
    jpg: "/character-frames/center.jpg",
    label: "Neutral Eye Contact",
  },
  up: {
    key: "up",
    webp: "/character-frames/up.webp",
    jpg: "/character-frames/up.jpg",
    label: "Look Up",
  },
  "up-right": {
    key: "up-right",
    webp: "/character-frames/up-right.webp",
    jpg: "/character-frames/up-right.jpg",
    label: "Look Up-Right",
  },
  right: {
    key: "right",
    webp: "/character-frames/right.webp",
    jpg: "/character-frames/right.jpg",
    label: "Look Right",
  },
  "down-right": {
    key: "down-right",
    webp: "/character-frames/down-right.webp",
    jpg: "/character-frames/down-right.jpg",
    label: "Look Down-Right",
  },
  down: {
    key: "down",
    webp: "/character-frames/down.webp",
    jpg: "/character-frames/down.jpg",
    label: "Look Down",
  },
  "down-left": {
    key: "down-left",
    webp: "/character-frames/down-left.webp",
    jpg: "/character-frames/down-left.jpg",
    label: "Look Down-Left",
  },
  left: {
    key: "left",
    webp: "/character-frames/left.webp",
    jpg: "/character-frames/left.jpg",
    label: "Look Left",
  },
  "up-left": {
    key: "up-left",
    webp: "/character-frames/up-left.webp",
    jpg: "/character-frames/up-left.jpg",
    label: "Look Up-Left",
  },
  wave: {
    key: "wave",
    webp: "/character-frames/wave.webp",
    jpg: "/character-frames/wave.jpg",
    label: "Greeting Wave",
  },
  point: {
    key: "point",
    webp: "/character-frames/point.webp",
    jpg: "/character-frames/point.jpg",
    label: "Pointing Down",
  },
};

/**
 * Calculates the appropriate directional pose based on cursor coordinates relative to face center.
 * @param cursorX viewport X coordinate of cursor
 * @param cursorY viewport Y coordinate of cursor
 * @param faceCenterX viewport X of character face center
 * @param faceCenterY viewport Y of character face center
 * @param neutralRadius radius in pixels within which character maintains direct eye contact
 */
export function calculatePoseFromPointer(
  cursorX: number,
  cursorY: number,
  faceCenterX: number,
  faceCenterY: number,
  neutralRadius: number = 75
): DirectionalPose {
  const dx = cursorX - faceCenterX;
  const dy = cursorY - faceCenterY;
  const distance = Math.hypot(dx, dy);

  // When cursor is within the face center area, return neutral eye contact
  if (distance < neutralRadius) {
    return "center";
  }

  // atan2 returns angle in radians: [-PI, PI]
  // 0 is right (dx > 0, dy = 0)
  // PI/2 is down (dx = 0, dy > 0)
  // -PI/2 is up (dx = 0, dy < 0)
  // PI / -PI is left (dx < 0, dy = 0)
  const angleRad = Math.atan2(dy, dx);
  const deg = (angleRad * 180) / Math.PI;

  // 8 distinct 45-degree sectors with exact boundaries
  if (deg >= -22.5 && deg < 22.5) {
    return "right";
  }
  if (deg >= 22.5 && deg < 67.5) {
    return "down-right";
  }
  if (deg >= 67.5 && deg < 112.5) {
    return "down";
  }
  if (deg >= 112.5 && deg < 157.5) {
    return "down-left";
  }
  if (deg >= 157.5 || deg < -157.5) {
    return "left";
  }
  if (deg >= -157.5 && deg < -112.5) {
    return "up-left";
  }
  if (deg >= -112.5 && deg < -67.5) {
    return "up";
  }
  if (deg >= -67.5 && deg < -22.5) {
    return "up-right";
  }

  return "center";
}

import { LOCK, UNLOCK } from "./actionTypes";

// Lock 액션 생성자
export const lock = () => ({
  type: LOCK,
});

// Unlock 액션 생성자
export const unlock = () => ({
  type: UNLOCK,
});

export function handleKeyDown(event, setMovement) {
  if (event.key === "w") setMovement((prev) => ({ ...prev, forward: true }));
  if (event.key === "s") setMovement((prev) => ({ ...prev, backward: true }));
  if (event.key === "a") setMovement((prev) => ({ ...prev, left: true }));
  if (event.key === "d") setMovement((prev) => ({ ...prev, right: true }));
}

export function handleKeyUp(event, setMovement) {
  if (event.key === "w") setMovement((prev) => ({ ...prev, forward: false }));
  if (event.key === "s") setMovement((prev) => ({ ...prev, backward: false }));
  if (event.key === "a") setMovement((prev) => ({ ...prev, left: false }));
  if (event.key === "d") setMovement((prev) => ({ ...prev, right: false }));
}

export function updateCameraMovement(movement, camera) {
  const { forward, backward, left, right, up, down } = movement;
  const movementSpeed = 0.1; // Adjust the movement speed as needed

  if (forward) camera.translateZ(-movementSpeed);
  if (backward) camera.translateZ(movementSpeed);
  if (left) camera.translateX(-movementSpeed);
  if (right) camera.translateX(movementSpeed);
  if (up) camera.translateY(movementSpeed);
  if (down) camera.translateY(-movementSpeed);
}

export function handleKeyDown(event, setMovement) {
    if (event.key === "w") setMovement((prev) => ({ ...prev, forward: true }));
    if (event.key === "s") setMovement((prev) => ({ ...prev, backward: true }));
    if (event.key === "a") setMovement((prev) => ({ ...prev, left: true }));
    if (event.key === "d") setMovement((prev) => ({ ...prev, right: true }));
    if (event.key === " ") setMovement((prev) => ({ ...prev, up: true }));
    if (event.key === "Shift") setMovement((prev) => ({ ...prev, down: true }));
  }
  
  export function handleKeyUp(event, setMovement) {
    if (event.key === "w") setMovement((prev) => ({ ...prev, forward: false }));
    if (event.key === "s") setMovement((prev) => ({ ...prev, backward: false }));
    if (event.key === "a") setMovement((prev) => ({ ...prev, left: false }));
    if (event.key === "d") setMovement((prev) => ({ ...prev, right: false }));
    if (event.key === " ") setMovement((prev) => ({ ...prev, up: false }));
    if (event.key === "Shift") setMovement((prev) => ({ ...prev, down: false }));
  }
  
  export function updateCameraMovement(movement, camera) {
    const { forward, backward, left, right, up, down } = movement;
  
    if (forward) camera.translateZ(-0.5);
    if (backward) camera.translateZ(0.5);
    if (left) camera.translateX(-0.5);
    if (right) camera.translateX(0.5);
    if (up) camera.translateY(0.5);
    if (down) camera.translateY(-0.5);
  }
  
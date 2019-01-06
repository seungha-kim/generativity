export function random(max: number) {
  return Math.floor(Math.random() * max);
}

export function randomColor() {
  return `rgb(${random(256)},${random(256)},${random(256)})`;
}

export function randomHsl(saturation: number = 100, light: number = 60) {
  return `hsl(${random(360)},${saturation}%,${light}%)`;
}

export function unitSin(phase: number) {
  return (Math.sin(phase) + 1) / 2;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById("home-section").appendChild(renderer.domElement);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("./01-3.jpeg"),
  })
);

scene.add(sphere);

const cursor = { x: 0, y: 0 };

window.addEventListener("mousemove", (_event) => {
  cursor.x = _event.clientX / window.innerWidth - 0.5;
  cursor.y = _event.clientY / window.innerHeight - 0.5;
});

const tick = () => {
  window.requestAnimationFrame(tick);

  sphere.rotation.y += 0.005;

  const cameraX = cursor.x - 1;
  const cameraY = -cursor.y;

  camera.position.x += (cameraX - camera.position.x) / 10;
  camera.position.y += (cameraY - camera.position.y) / 10;

  renderer.render(scene, camera);
};

tick();

camera.position.z = 12;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

let nav_projects = document.getElementById("projects");
let nav_home = document.getElementById("home");
let nav_about = document.getElementById("about");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop < 700) {
    nav_home.style.color = "#ffffff";
    nav_projects.style.color = "#000000";
    nav_about.style.color = "#000000";
  } else if (document.documentElement.scrollTop < 1500) {
    console.log(document.documentElement.scrollTop);
    nav_projects.style.color = "#ffffff";
    nav_home.style.color = "#000000";
    nav_about.style.color = "#000000";
  } else {
    nav_about.style.color = "#ffffff";
    nav_home.style.color = "#000000";
    nav_projects.style.color = "#000000";
  }
});

let images = document.querySelectorAll("img");

function fadeInImg() {
  let image = images[Math.floor(Math.random() * images.length)];
  image.style.transition = "all 1s";
  image.style.opacity = 1;
  setTimeout(() => {
    image.style.opacity = 0;
    Timer();
  }, 3500);
}

function Timer() {
  setTimeout(() => {
    fadeInImg();
  }, 2000);
}

fadeInImg();

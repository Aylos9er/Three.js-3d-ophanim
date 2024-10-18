

// Create a scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create ring structures
const ring1 = new THREE.TorusKnot(1, 0.4, 100, 100);
const ring2 = new THREE.Torus(1, 0.2, 16, 100);
const ring3 = new THREE.TorusKnot(0.5, 0.1, 100, 100);

// Apply materials and positioning
ring1.material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
ring2.material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
ring3.material = new THREE.MeshBasicMaterial({ color: 0xff00ff });

ring1.position.z = 2;
ring2.position.z = 1;
ring3.position.z = 0;

scene.add(ring1, ring2, ring3);

// Render the scene
renderer.render(scene, camera);

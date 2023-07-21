console.log('this works')
// import the THREE library
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = document.querySelector('#scene-container');


// get a reference to the scene-container element that will eventually hold the scene
console.log(THREE);

// create a scene
const scene = new THREE.Scene();

const WIDTH = container.clientWidth;
const HEIGHT = container.clientHeight;


scene.background = new THREE.Color('#233143');

// create a camera
const FOV = 75
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 100

const camera = new THREE.PerspectiveCamera( FOV, ASPECT, NEAR, FAR );
camera.position.set(4, 0, 10)

// grid helper
const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

// create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( WIDTH, HEIGHT );
container.appendChild( renderer.domElement );
const controls = new OrbitControls( camera, renderer.domElement );

// create objects
const geometry = new THREE.BoxGeometry( 4, 4, 4 );
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cube = new THREE.Mesh( geometry, material );

cube.position.set(0, 0, 4)
scene.add(cube)

// add sphere
const ballGeometry = new THREE.SphereGeometry(4, 32, 16);
const ballmaterial = new THREE.MeshBasicMaterial( {color: 0x00ffff})
const ball = new THREE.Mesh( ballGeometry, ballmaterial );

ball.position.set(0, 0, 0)
scene.add(ball)

// animation loop
const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0
    renderer.render(scene, camera)

}

animate();



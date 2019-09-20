let fft, mic;
let easycam;

function preload() {
    //EasyCam patch courtesy of Alex(tutor)
    Dw.EasyCam.prototype.apply = function(n) {
        var o = this.cam;
        n = n || o.renderer,
        n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
    };
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    easycam = createEasyCam();

    // create a new audio in object
    mic = new p5.AudioIn();
    // Turns on the mic
    mic.start();
    // Create a new amplitude object
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(0);
    let spectrum = fft.analyze();
    let bass = fft.getEnergy(100,300);
    let lowMid = fft.getEnergy(350,700);
    let mid = fft.getEnergy(750,1100);
    let highMid = fft.getEnergy(1150,1500);
    let treble = fft.getEnergy(1500,2500);

    ambientLight(255);
    pointLight(255, 255, 255, 0, 800, 0);
    ambientMaterial(240, 240, 43);
    soundOrb(0, lowMid, 800);
    soundOrb(175, mid, 1000);
    soundOrb(350, highMid, 1200);
    soundOrb(525, bass, 1400);
    soundOrb(700, treble, 1600);
    soundOrb(875, lowMid, 1800);
    soundOrb(1050, mid, 2000);
    soundOrb(1225, highMid, 2200);
    soundOrb(1400, bass, 2400);
    soundOrb(1575, treble, 2600);
    soundOrb(0, lowMid, 700);
    soundOrb(150, mid, 900);
    soundOrb(325, highMid, 1100);
    soundOrb(500, bass, 1300);
    soundOrb(675, treble, 1500);
    soundOrb(850, lowMid, 1700);
    soundOrb(1025, mid, 1900);
    soundOrb(1200, highMid, 2100);
    soundOrb(1375, bass, 2300);
    soundOrb(1550, treble, 2500);

}

function soundOrb(distance, size, speed) {
    push();
    rotateY(millis() / speed);
    translate(distance, 0, 0);
    noFill()
    stroke(0,0,255);
    sphere(size);
    pop();
}

function mousePressed(){
    getAudioContext().resume();
}
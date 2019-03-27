
Tone.Transport.bpm.value = 90;
Tone.Transport.start("0:0:0");
Tone.Transport.timeSignature = 6;  //6/4   6 4n beats per measure

var foghorn0 = new Tone.Player('foghorn.wav').toMaster()
foghorn0.volume.value = - 10
var foghorn0Event = new Tone.Event(playFoghorn0);
foghorn0Event.start("1:0:0");
foghorn0Event.loop = true;
foghorn0Event.loopEnd = ("1:0:0");
foghorn0Event.stop("46:0:0");
function playFoghorn0() {
  if (foghorn0.loaded) {
    foghorn0.start();
  }
}

var foghorn1 = new Tone.GrainPlayer ('foghorn.wav').toMaster()
foghorn1.playbackRate = 1
foghorn1.grainSize = 1
// foghorn1.loopStart = 0
// foghorn1.loopEnd = 6
foghorn1.detune = 200  //change pitch
foghorn1.volume.value = - 8
var foghorn1Event = new Tone.Event(playFoghorn1);
foghorn1Event.start("5:0:0");
foghorn1Event.loop = true;
foghorn1Event.loopEnd = ("1:0:0");
foghorn1Event.stop("30:0:0");
function playFoghorn1() {
  if (foghorn1.loaded) {
    foghorn1.start();
  }
}

var foghorn2 = new Tone.GrainPlayer ('foghorn.wav').toMaster()
foghorn2.playbackRate = 1
foghorn2.grainSize = 1
// foghorn1.loopStart = 0
// foghorn1.loopEnd = 6
foghorn2.detune = 300  //change pitch
foghorn2.volume.value = - 8
var foghorn2Event = new Tone.Event(playFoghorn2)
foghorn2Event.start("10:0:0")
foghorn2Event.loop = true;
foghorn2Event.loopEnd = ("2m")
foghorn2Event.stop("38:0:0")
function playFoghorn2() {
  if (foghorn2.loaded) {
    foghorn2.start();
  }
}


var foghorn3 = new Tone.GrainPlayer ('foghorn.wav').toMaster()
foghorn3.playbackRate = 2
foghorn3.grainSize = 0.2
foghorn3.loopStart = 1
foghorn3.loopEnd = 1.2
foghorn3.detune = 700  //change pitch
foghorn3.volume.value = - 6
var foghorn3Event = new Tone.Event(playFoghorn3);
foghorn3Event.start("22:3:0");
foghorn3Event.loop = true;
foghorn3Event.loopEnd = ("1:0:0");
foghorn3Event.stop("40:0:0")
function playFoghorn3() {
  if (foghorn3.loaded) {
    foghorn3.start();
  }
}


var foghorn4 = new Tone.GrainPlayer ('foghorn.wav').toMaster()
foghorn4.playbackRate = 2
foghorn4.grainSize = 0.2
foghorn4.loopStart = 1
foghorn4.loopEnd = 1.2
foghorn4.detune = 300  //change pitch
foghorn4.volume.value = - 6
var foghorn4Event = new Tone.Event(playFoghorn4);
foghorn4Event.start("26:3:0");
foghorn4Event.loop = true;
foghorn4Event.loopEnd = ("1:0:0");
foghorn4Event.stop("42:0:0")
function playFoghorn4() {
  if (foghorn4.loaded) {
    foghorn4.start();
  }
}


var synth = new Tone.MonoSynth({
  "oscillator": {
    "type": "sine"
  },
  "filter": {
    "Q": 7.0, 
    "type": "lowpass",
    "rolloff": -24,
    "gain": 10
  },
  "envelope": {
    "attack": 0.02,
    "decay": 0.02,
    "sustain": 0.3,
    "release": 0.06
  },
  "filterEnvelope": {
    "attack": 0.01,
    "decay": 0.2, 
    "sustain": 0.68,
    "release":0.1,
    "baseFrequency"  : 700 ,
    "octaves": 6
  }
}).toMaster();
synth.volume.value = -4;

var synthLoop1 = new Tone.Loop(function (time) {
  synth.triggerAttackRelease("B4","16n");
}, "4n").start("12:0:3");
synthLoop1.stop("36:0:0");

var synthLoop2 = new Tone.Loop(function (time) {
  synth.triggerAttackRelease("B4","16n");
}, "4n").start("16:1:0");
synthLoop2.stop("34:0:0");


var convolver = new Tone.Convolver('https://tambien.github.io/web-audio-samples/impulse-responses/feedback-spring.wav').toMaster() 
var metalSynth1 = new Tone.MetalSynth({
  "frequency": 50,
  "envelope": {
    "attack": 0.01,
    "decay": 0.11,
    "release":0.06
  },
  "harmonicity": 1,
  "modulationIndex" : 7,
  "resonance": 1000,
  "octaves":1.5
})
metalSynth1.connect(convolver).toMaster()
metalSynth1.volume.value = -23

var metalSynth1Loop = new Tone.Loop(function (time) {
  metalSynth1.triggerAttackRelease("16n");
}, "2n.").start("18:1:2");
metalSynth1Loop.stop("41:0:0");

var metalSynth2 = new Tone.MetalSynth({
  "frequency": 75,
  "envelope": {
    "attack": 0.01,
    "decay": 0.11,
    "release":0.06
  },
  "harmonicity": 1,
  "modulationIndex" : 7,
  "resonance": 1000,
  "octaves":1.5
})
metalSynth2.connect(convolver).toMaster()
metalSynth2.volume.value = -21

var metalSynth2Loop = new Tone.Loop(function (time) {
  metalSynth2.triggerAttackRelease("16n")
}, "2n.").start("18:2:0")
metalSynth2Loop.stop("43:0:0");

var metalSynth3 = new Tone.MetalSynth({
  "frequency": 100,
  "envelope": {
    "attack": 0.01,
    "decay": 0.11,
    "release":0.06
  },
  "harmonicity": 1,
  "modulationIndex" : 7,
  "resonance": 1000,
  "octaves":1.5
}).toMaster()
metalSynth3.connect(convolver).toMaster()
metalSynth3.volume.value = -19

var metalSynth3Loop = new Tone.Loop(function (time) {
  metalSynth3.triggerAttackRelease("16n")
}, "2n.").start("18:2:2")
metalSynth3Loop.stop("45:0:0");

// var metalSynth = new Tone.MetalSynth({
//   "frequency": 50,
//   "envelope": {
//     "attack": 0.01,
//     "decay": 0.11,
//     "release":0.06
//   },
//   "harmonicity": 1,
//   "modulationIndex" : 7,
//   "resonance": 1000,
//   "octaves":1.5
// }).toMaster()

// var metalSynthPart = new Tone.Part(function(time,freq){
//   metalSynth.frequency = freq
//   metalSynth.triggerAttackRelease("16n",time)
// },[["0:1:2",50],["0:2:0",75],["0:2:2",100]]).start()
// metalSynthPart.loop = true;
// metalSynthPart.loopEnd = "2n.";


// function setup(){
//   createCanvas(300,300);
// }
// function draw() {
//   background(0);
//   // console.log(Tone.Transport.position);
//   let bar = Tone.Transport.position.split(":")[0];
//   let quarter = Tone.Transport.position.split(":")[1];
//   let sixteenth = Tone.Transport.position.split(":")[2];
//   fill(255);
//   text("bar:" + bar,0,50);
//   text("quarter:" + quarter,0,100);
//   text("sixteenth:" + sixteenth,0,150);
//   // console.log(bar,quarter,sixteenth)
// }







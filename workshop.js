/**
 *    +----------------------------------------------------------+
 *    |                   SynthNote                              |
 *    |                                                          |
 *    |   +-------------------+         +-------------------+    |
 *    |   | OscillatorNode    |         | OscillatorNode    |    |
 *    |   | type=sawtooth     |         | type=sine (freq/2)|    |
 *    |   +-------------------+         +-------------------+    |
 *    |              \                       /                   |
 *    |               \                     /                    |
 *    |                v                   v                     |
 *    |                +-------------------+                     |
 *    |                |       Gain        |                     |
 *    |                |   ADSR envelope   |                     |
 *    |                +-------------------+                     |
 *    |                        |                                 |
 *    |                        v                                 |
 *    |                +-------------------+                     |
 *    |                |  BiquadFilterNode |                     |
 *    |                |    type=lowpass   |                     |
 *    |                +-------------------+                     |
 *    +----------------------------------------------------------+
 *                             |
 *                             v
 *                   +-------------------+
 *                   |     Master Gain   |
 *                   +-------------------+
 *                             |
 *                             v
 *                   +-------------------+
 *                   |   Destination     |
 *                   |   (speakers)      |
 *                   +-------------------+
 */
//We are going to make a synth note class here:



//BELOW HERE IS CODE TO MAKE EVERYTHING WORK
// variables to hold our notes
let note1, note2, note3, note4, note5, note6, note7, note8, note9, note10

let rootFreq = 261.63

// default cutoff frequency for the lowpass filter
let cutoff = 1000.;

// create an AudioContext (the main hub of Web Audio)
const ctx = new AudioContext();

// create a master gain node (controls overall loudness)
const masterGain = new GainNode(ctx);
masterGain.gain.value = 0.5; // set initial master volume to 50%

// connect master gain to the speakers
masterGain.connect(ctx.destination);



// --------------------------
// Event Listeners
// --------------------------

// cutoff frequency slider
document.querySelector("#cutoff").addEventListener("input", (event)=>{
    // update label to show the new cutoff frequency in Hz
    document.querySelector("#cutoffLabel").textContent = `${event.target.value} Hz`
    // store the cutoff value as a number
    cutoff = Number(event.target.value);
})

// master volume slider
document.querySelector("#master").addEventListener("input", (event)=>{
    // update label to show percentage
    document.querySelector("#masterLabel").textContent = `${event.target.value*100}%`
    // smoothly ramp master volume to the new value
    masterGain.gain.linearRampToValueAtTime(
        Number(event.target.value),
        ctx.currentTime + 0.05
    );
})


// --------------------------
// Keyboard Controls
// --------------------------

document.addEventListener("keydown", (event)=>{
    if (event.repeat) return // ignore repeats when key is held down
    let letter = event.key   // store the actual key pressed

    // if "a" is pressed
    if (letter=="a"){
        note1 = new SynthNote(ctx, masterGain, rootFreq, cutoff)
        note1.play()
    }

    // if "s" is pressed
    else if (letter=="s"){
        note2 = new SynthNote(ctx, masterGain, rootFreq * (9/8), cutoff)
        note2.play()
    }

    // if "d" is pressed
    else if (letter=="d"){
        note3 = new SynthNote(ctx, masterGain, rootFreq * (5/4), cutoff)
        note3.play()
    }

    // if "f" is pressed
    else if (letter=="f"){
        note4 = new SynthNote(ctx, masterGain, rootFreq * (4/3), cutoff)
        note4.play()
    }

    // if "g" is pressed
    else if (letter=="g"){
        note5 = new SynthNote(ctx, masterGain, rootFreq * (3/2), cutoff)
        note5.play()
    }

    // if "h" is pressed
    else if (letter=="h"){
        note6 = new SynthNote(ctx, masterGain, rootFreq * (5/3), cutoff)
        note6.play()
    }

    // if "j" is pressed
    else if (letter=="j"){
        note7 = new SynthNote(ctx, masterGain, rootFreq * (15/8), cutoff)
        note7.play()
    }

    // if "k" is pressed
    else if (letter=="k"){
        note8 = new SynthNote(ctx, masterGain, rootFreq * 2, cutoff)
        note8.play()
    }

    // if "l" is pressed
    else if (letter=="l"){
        note9 = new SynthNote(ctx, masterGain, rootFreq * (9/4), cutoff)
        note9.play()
    }

    // if ";" is pressed
    else if (letter==";"){
        note10 = new SynthNote(ctx, masterGain, rootFreq * (5/2), cutoff)
        note10.play()
    }
})

document.addEventListener("keyup", (event)=>{
    let letter = event.key

    // when "a" is released, stop note1
    if (letter=="a"){
        note1.stop()
    }

    // when "s" is released, stop note2
    else if (letter=="s"){
        note2.stop()
    }

    // when "d" is released, stop note3
    else if (letter=="d"){
        note3.stop()
    }

    // when "f" is released, stop note4
    else if (letter=="f"){
        note4.stop()
    }

    // when "g" is released, stop note5
    else if (letter=="g"){
        note5.stop()
    }

    // when "h" is released, stop note6
    else if (letter=="h"){
        note6.stop()
    }

    // when "j" is released, stop note7
    else if (letter=="j"){
        note7.stop()
    }

    // when "k" is released, stop note8
    else if (letter=="k"){
        note8.stop()
    }

    // when "l" is released, stop note9
    else if (letter=="l"){
        note9.stop()
    }

    // when ";" is released, stop note10
    else if (letter==";"){
        note10.stop()
    }
})



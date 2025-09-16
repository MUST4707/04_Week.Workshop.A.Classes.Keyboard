
# SynthNote Template

This repository contains a starter template for building a simple polyphonic synthesizer in the browser using the **Web Audio API**.

The code here sets up:

- A global `AudioContext` and `masterGain` (main volume control).
- Sliders for **cutoff frequency** (low-pass filter) and **master volume**.
- Keyboard event listeners for the keys **A through ;**.
- A placeholder for a `SynthNote` class that you will build together in class.

---

## Audio Graph

Each note you play will eventually follow this signal flow:

```mermaid
flowchart TD
    subgraph SynthNote
        osc1@{shape: paper-tape, label: OscillatorNode - sawtooth}
        osc2@@{shape: paper-tape, label: OscillatorNode - sine - half freq]
        adsr((Gain: ADSR envelope))
        filt{BiquadFilterNode: lowpass}

        osc1 --> adsr
        osc2 --> adsr
        adsr --> filt
    end

    
    master((Master Gain))
    dest[/Destination / speakers\]
    

    filt --> master --> dest
```

---

## Quick Introduction: Defining a Class in JavaScript

A class is like a **blueprint** for making objects.  

Here’s the basic structure:

```js
class Example {
  constructor(someValue) {
    // code that runs when we create a new Example
    this.value = someValue; // save property
  }

  doSomething() {
    console.log("Doing something with", this.value);
  }
}

// usage
let myExample = new Example(42);
myExample.doSomething();
````

---

## SynthNote Skeleton

Here is the basic structure of the class you will fill in:

```js
class SynthNote {
  constructor(audCtx, outputConnect, frequency, cutoffFreq) {
    // save properties
    this.ctx = audCtx;
    this.freq = frequency;

    // create oscillators here

    // create gain node for ADSR envelope here

    // create low-pass filter here

    // connect everything together: osc -> adsr -> filter -> output
  }

  play() {
    // start oscillators
    // apply attack + decay + sustain ramps
  }

  stop() {
    // apply release ramp
    // stop oscillators
  }
}
```

This skeleton shows you **where** to put your code.
We’ll build the details together during the workshop.

---

## How to Use

1. "Go Live" with `index.html` in your browser.
2. Click inside the page to activate sound.
3. Use keys **A through ;** to play notes (these are mapped to a scale starting at middle C, 261.63 Hz).
4. Adjust:

    * **Cutoff slider** → changes the cutoff frequency of the low-pass filter.
    * **Master slider** → changes the overall loudness.

---

## Your Task

* Implement the `SynthNote` class (constructor, `play()`, `stop()`).
* Each note should:

    * Create two oscillators (sawtooth + sine).
    * Pass through a gain node with an **ADSR envelope**.
    * Pass through a **low-pass filter** before reaching the master gain.
* Use `linearRampToValueAtTime()` to shape the attack, decay, sustain, and release.

---

## Goal

By the end, you will have:

* A working polyphonic synthesizer.
* A deeper understanding of **signal flow**, **envelopes**, and the **Web Audio API**.

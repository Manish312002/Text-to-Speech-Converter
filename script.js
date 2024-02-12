const speech = new SpeechSynthesisUtterance();
const textBox = document.getElementById("textBox");
const newBtn = document.getElementById("btn"); 

newBtn.addEventListener("click", () =>{
    speech.text = textBox.value;
    window.speechSynthesis.speak(speech);
});

let voices = [];
const voiceSelector = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelector.options[i] = new Option(voice.name,i)))
};

voiceSelector.addEventListener("change",()=>{
    speech.voice = voices[voiceSelector.value];
});


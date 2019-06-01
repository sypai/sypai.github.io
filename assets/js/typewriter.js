const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function(){
    // Current index of word
    const current = this.wordIndex % this.words.length;

    // Get Full Text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting){
        // Remove Char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else{
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into Element
    this.txtElement.innerHTML = "<span class=txt>" + this.txt + "</span>";

    // Initial Type Speed
    let typeSpeed = 350;
    if(this.isDeleting){
        typeSpeed /= 4;
    }

    // If word is complete
    if(! this.isDeleting && this.txt === fullTxt){
        // Pause at end
        typeSpeed = this.wait;
        //Set Delete to true
        this.isDeleting = true ;
    }

    else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //Set to next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }


    setTimeout(() => this.type(), typeSpeed);
}

// init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
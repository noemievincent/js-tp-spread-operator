(function (){
    const oLetterJump = {
        init() {
            document.documentElement.classList.add('js-enabled');
            this.eTitle = document.querySelector('.jump');
            this.aLetters = this.eTitle.textContent;
            this.GrowLetter(this.eTitle);
            for (const eLetter of this.aLetters) {
                const eSpan = document.createElement('span');
                if (eLetter === ' '){
                    eSpan.appendChild(document.createTextNode('\u00A0'));
                } else{
                    eSpan.appendChild(document.createTextNode(eLetter));
                }
                this.eTitle.appendChild(eSpan);
            }
        }, GrowLetter() {
        this.eTitle.textContent = "";
        }
    };
    oLetterJump.init();
})();

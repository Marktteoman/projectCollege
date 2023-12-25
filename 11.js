class Slider {
    constructor(slider, autoplay = true) {
        this.slider = slider;
        this.allFrames = slider.querySelectorAll('.carousel-item');
        this.frameChain = slider.querySelector('.carousel-slides');
        this.nextButton = slider.querySelector('.carousel-next');
        this.prevButton = slider.querySelector('.carousel-prev');

        this.index = 0;
        this.length = this.allFrames.length;
        this.autoplay = autoplay;
        this.paused = null;

        this.init();
    }

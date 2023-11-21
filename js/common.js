window.onload = function(){
    Reveal.initialize({
        plugins: [ RevealMarkdown ],
        markdown: {
            smartypants: true
        },
        slideNumber: 'c/t',
        showNotes: true,
        /*
        // Parallax background image
        parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg', // e.g. "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"
        // Parallax background size
        parallaxBackgroundSize: '21000px 900px', // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)
        // Number of pixels to move the parallax background per slide
        // - Calculated automatically unless specified
        // - Set to 0 to disable movement along an axis
        parallaxBackgroundHorizontal: 200,
        parallaxBackgroundVertical: 50
        */
    });

    Reveal.configure({
        keyboard: {
            27: () => { console.log('esc') }, // do something custom when ESC is pressed
            13: 'next', // go to the next slide when the ENTER key is pressed
            32: 'prev' // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
        }
    });

    Reveal.on('make-it-pop', () => {
        console.log('✨');
    });

}
const originalVictoryHTML = `
    I asked you to imagine yourself living in a 1950s society. As you clicked through the carousels, 
    you may have noticed how similar the images on the left and right appeared. That is because the 
    images on the right come from our primary source, <i>Don't Worry Darling</i>, which draws inspiration
    from the architecture, aesthetics, and ideals of 1950s America. <br><br>
    
    Congratulations! You're living in the romanticized past contemporary society seeked. Welcome to Victory, 
    a community designed to give its residents the perfect life. Here, every day is predictable, comfortable, and secure. 
    Men leave for work each morning while women enjoy beautiful homes, shopping, hanging with other women and a carefree lifestyle 
    free from financial concerns. There is no need to worry about paying bills, planning for the future, or 
    navigating any uncertainties. Everything you could ever need is already provided. <br><br>
    
    In Victory, luxury, stability, and happiness are simply a way of life. It is a place where everyone knows 
    their role, everything has its place, and life feels effortless. After all, you're safe here. Don't worry, darling.
`;

const truthVictoryHTML = `
    Victory is not the perfect utopia it pretends to be. Beneath the beautiful homes,
    cheerful routines, and romanticized domestic life is a system built on control.
    The world that promises safety actually removes choice, freedom, and autonomy.

    <br><br>

    In <i>Don't Worry Darling</i>, the fantasy of the 1950s becomes a warning:
    nostalgia can look comforting, but it can also hide oppression.
`;

function toggleVictory() {
    const section = document.getElementById("victory-section");
    const title = document.getElementById("victory-title");
    const smallText = document.getElementById("small-text");
    const text = document.getElementById("victory-text");
    const photoCard = document.getElementById("card-image");
    const statsText = document.getElementById("stats");
    const button = document.getElementById("wake-button");

    const youtube = document.getElementById("youtube-video");
    const truthVideo = document.getElementById("truth-video");

    const isTruthMode = section.classList.toggle("truth");
    photoCard.classList.toggle("fact");

    if (isTruthMode) {
        title.textContent = "The Reality Beneath Victory";
        smallText.textContent = "(Watch the video to uncover the truth)";
        text.innerHTML = truthVictoryHTML;
        statsText.innerHTML = "";
        button.textContent = "Go Back to Victory";

        youtube.src = youtube.src;
        youtube.style.display = "none";

        truthVideo.style.display = "block";
        truthVideo.pause();
        truthVideo.currentTime = 0;
        truthVideo.load();

    } else {
        title.textContent = "Welcome to Victory";
        smallText.textContent = "(watch trailer)";
        text.innerHTML = originalVictoryHTML;
        statsText.innerHTML = `
            Budget: $35M <br> 
            Box Office: $87M <br> 
            RT Score: 38%
        `;
        button.textContent = "Wake Up";

        truthVideo.pause();
        truthVideo.currentTime = 0;
        truthVideo.style.display = "none";

        youtube.style.display = "block";
    }

    section.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
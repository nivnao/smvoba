document.addEventListener('DOMContentLoaded', () => {
    const menue1 = document.getElementById('menue-1');
    const menue2 = document.getElementById('menue-2');
    const menue3 = document.getElementById('menue-3');
    const menue4 = document.getElementById('menue-4');
    const menue5 = document.getElementById('menue-5');

    const line1 = document.querySelector('.line1');
    const post1 = document.querySelector('.post1');
    const post2 = document.querySelector('.post2');
    const post3 = document.querySelector('.post3');
    const line3 = document.querySelector('.line3');

    menue1.addEventListener('mouseover', () => {
        line1.classList.add('highlighted');
    });
    menue1.addEventListener('mouseout', () => {
        line1.classList.remove('highlighted');
    });

    menue2.addEventListener('mouseover', () => {
        post1.classList.add('highlighted');
    });
    menue2.addEventListener('mouseout', () => {
        post1.classList.remove('highlighted');
    });

    menue3.addEventListener('mouseover', () => {
        post2.classList.add('highlighted');
    });
    menue3.addEventListener('mouseout', () => {
        post2.classList.remove('highlighted');
    });

    menue4.addEventListener('mouseover', () => {
        post3.classList.add('highlighted');
    });
    menue4.addEventListener('mouseout', () => {
        post3.classList.remove('highlighted');
    });

    menue5.addEventListener('mouseover', () => {
        line3.classList.add('highlighted');
    });
    menue5.addEventListener('mouseout', () => {
        line3.classList.remove('highlighted');
    });
});

    document.getElementById("b5").addEventListener("click", function() {
        var form = document.querySelector(".form");
        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    });
        document.getElementById("butt").addEventListener("click", function() {
            var mainAlert = document.querySelector(".mainalert");
            if (mainAlert.style.display === "none") {
                mainAlert.style.display = "block";
            } else {
                mainAlert.style.display = "none";
            }
        });

                document.getElementById("butt").addEventListener("click", function() {
            var mainAlert = document.querySelector(".mainalert");
            var form = document.querySelector(".form");
            
            if (mainAlert.style.display === "none") {
                mainAlert.style.display = "block";
            } else {
                mainAlert.style.display = "none";
            }
            
            form.style.opacity = (form.style.opacity === "0") ? "1" : "0";
        });

                document.querySelector(".cross").addEventListener("click", function() {
            var mainAlert = document.querySelector(".mainalert");
            mainAlert.style.display = "none";
        });
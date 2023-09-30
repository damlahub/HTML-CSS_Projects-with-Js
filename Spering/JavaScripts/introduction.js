    const INTRODUCTION = document.querySelector("#introduction");

    let introductionArt = document.createElement("article");
    let introduction_img=document.createElement("img");
    introduction_img.src="Assets/Images/slider-img.png";

    introductionArt.classList.add("introduction-start");
    introductionArt.innerHTML = `
    <h1>
    YOU CAN <br>
    HIRE FREELANCER<br>
    HERE
    </h1>
    <p>
    It is a long established fact that a reader will be distracted by the readable content of a page
    </p>
    <div class="introduction-btns">
    <button class="red-btn">About Us</button>
    <button class="light-btn">Get A Quote</button>
    </div>
    `;
    INTRODUCTION.appendChild(introductionArt);
    INTRODUCTION.appendChild(introduction_img);
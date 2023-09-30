const ABOUT =document.querySelector("#about");
let about_section=document.createElement("section");

about_section.classList.add("about-content");
about_section.innerHTML=`
<img src="Assets/Images/about-img.jpg" alt="">
            <h1>ABOUT SPERING COMPANY</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If
                youThere are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you</p>
            <button class="red-btn" type="button">Read More</button>
`;
ABOUT.appendChild(about_section);
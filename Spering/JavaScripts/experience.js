const EXPERIENCE=document.querySelector("#experience");

let experience_img=document.createElement("img");
let experience_article=document.createElement("article");

experience_img.src="Assets/Images/experience-img.jpg";
experience_article.classList.add("experience-contents");
experience_article.innerHTML=`
                <h1>BEST EXPERINCED FREELANCER HERE</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as
                </p>
                <div class="experience-btns">
                    <button class="dark-btn">Read More</button>
                    <button style="padding: 10px 50px;" class="red-btn">Hire</button>
                </div>
`;

EXPERIENCE.appendChild(experience_img);
EXPERIENCE.appendChild(experience_article);
const WORK = document.querySelector("#work");
let work_h1 = document.createElement("h1");
let work_section = document.createElement("section");

work_h1.innerHTML = `WORK FREELANER HAS DONE`;
work_section.classList.add("work-contents");
work_section.innerHTML = `
<section class="work-items">
<article class="work-item">
    <div class="active">
        <img src="Assets/Images/freelance/f1.png" alt="">
    </div>
    <div>
        <h5>$250 Million</h5>
        <h3>Paid to Freelancers</h3>
    </div>
</article>
<article class="work-item">
    <div class="work-circle">
        <img src="Assets/Images/freelance/f2.png" alt="">
    </div>
    <div>
        <h5>2 Million</h5>
        <h3>Paid to Freelancers</h3>
    </div>
</article>
<article class="work-item">
    <div class="work-circle">
        <img src="Assets/Images/freelance/f3.png" alt="">
    </div>
    <div>
        <h5>700,000</h5>
        <h3>Paid to Freelancers</h3>
    </div>
</article>
<article class="work-item">
    <div class="work-circle">
        <img src="Assets/Images/freelance/f4.png" alt="">
    </div>
    <div>
        <h5>98%</h5>
        <h3>Paid to Freelancers</h3>
    </div>
</article>
</section>
<img style="width: 800px;" src="Assets/Images/freelance/freelance-img.jpg" alt="">
`;
WORK.appendChild(work_h1);
WORK.appendChild(work_section);
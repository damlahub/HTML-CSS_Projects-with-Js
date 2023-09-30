const CATEGORY = document.querySelector("#category");
let category_h2 = document.createElement("h2");
let category_section = document.createElement("section");
category_section.classList.add("category-items");
category_h2.innerHTML = `CATEGORY`;
category_section.innerHTML = `
<article class="category-item">
<img src="Assets/Images/category/c1.png" alt="">
<h5>Design & Arts</h5>
</article>
<article class="category-item">
<img src="Assets/Images/category/c2.png" alt="">
<h5>Web Development </h5>
</article>
<article class="category-item">
<img src="Assets/Images/category/c3.png" alt="">
<h5>SEO Markting</h5>
</article>
<article class="category-item">
<img src="Assets/Images/category/c4.png" alt="">
<h5>Video Edting</h5>
</article>
<article class="category-item">
<img src="Assets/Images/category/c5.png" alt="">
<h5>Logo Design</h5>
</article>
<article class="category-item">
<img src="Assets/Images/category/c6.png" alt="">
<h5>Game Design</h5>
</article>
`;
CATEGORY.appendChild(category_h2);
CATEGORY.appendChild(category_section);
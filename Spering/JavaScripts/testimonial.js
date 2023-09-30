const TEST = document.querySelector("#testimonial");
let testimonial_h1 = document.createElement("h1");
let testimonial_section = document.createElement("section");

testimonial_h1.innerHTML = `TESTIMONIAL`;
testimonial_section.classList.add("testimonial-card");
testimonial_section.innerHTML = `
<h5>John Hissona</h5>
                <p>passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even slightly believable. If youThere are many
                    variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                </p>
                <img src="Assets/Images/quote.png" alt="">
                <div class="test-btns">
                    <div class="btn">
                        < </div>
                            <div class="btn">
                                >
                            </div>
                    </div>
`;
TEST.appendChild(testimonial_h1);
TEST.appendChild(testimonial_section);
const TEST = document.querySelector("#testimonial");
let testimonial_h1 = document.createElement("h1");
let testimonial_section = document.createElement("section");

testimonial_h1.innerHTML = `TESTIMONIAL`;
testimonial_section.classList.add("testimonial-card");
testimonial_section.innerHTML = `
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <section class="opinion swiper-slide">
                    <h5>John Hissona</h5>
                    <p>passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised words
                    </p>
                    <img src="Assets/Images/quote.png" alt="">                    </section>
                    <section class="opinion swiper-slide">
                    <h5>Damla Öksel</h5>
                    <p>passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    </p>
                    <img src="Assets/Images/quote.png" alt="">                    </section>
                    <section class="opinion swiper-slide">
                    <h5>Gizem Ay</h5>
                    <p>passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look even slightly believable. If youThere are many
                        variations of passages of Lorem Ipsum available, but the majority have suffered alteration in s
                    </p>
                    <img src="Assets/Images/quote.png" alt="">                    </section>
                </div>
            </div>
`;
TEST.appendChild(testimonial_h1);
TEST.appendChild(testimonial_section);
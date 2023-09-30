let footer_header=document.createElement("section");
let footer_body=document.createElement("section");
let footer_contact=document.createElement("section");

footer_header.classList.add("footer-header");
footer_body.classList.add("footer-body");
footer_contact.classList.add("footer-contacts");

footer_header.innerHTML=`
<span class="footer-brand">
                    <img src="Assets/Images/logo.png" alt="">
                    <h1>Spering</h1>
                </span>
                <span class="footer-social-medias">
                    <a href=""><img src="Assets/Images/social-medias/fb.png" alt=""></a>
                    <a href=""><img src="Assets/Images/social-medias/twitter.png" alt=""></a>
                    <a href=""><img src="Assets/Images/social-medias/linkedin.png" alt=""></a>
                    <a href=""><img src="Assets/Images/social-medias/instagram.png" alt=""></a>
                    <a href=""><img src="Assets/Images/social-medias/youtube.png" alt=""></a>
                </span>`;
footer_body.innerHTML=`
<nav class="footer-menu-contents">
                    <ul>
                        <li>
                            <h3>USEFUL LINK</h3>
                            <ul class="footer-menu">
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Work</a></li>
                                <li><a href="">Category</a></li>
                            </ul>
                        </li>
                        <li>
                            <h3>OFFICES</h3>
                            <p>
                                Readable content of a page when looking at its layoutreadable content of a page when
                                looking at its layout
                            </p>
                        </li>
                        <li>
                            <h3>INFORMATION</h3>
                            <p>
                                Readable content of a page when looking at its layoutreadable content of a page when
                                looking at its layout
                            </p>
                        </li>
                        <li>
                            <h3>NEWSLETTER</h3>
                            <input type="email" placeholder="Email"><br>
                            <button class="red-btn">SUBSCRIBE</button>
                        </li>
                    </ul>
                </nav>`;
footer_contact.innerHTML=`
<a href="" class="footer-contact">
                    <img src="Assets/Images/Contacts/location.png" alt="">
                    <p>Location</p>
                </a>
                <a href="" class="footer-contact">
                    <img src="Assets/Images/Contacts/mail.png" alt="">
                    <p>mail@domain.org</p>
                </a>
                <a href="" class="footer-contact">
                    <img src="Assets/Images/Contacts/call.png" alt="">
                    <p>Call</p>
                </a>`;
FOOTER.appendChild(footer_header);
FOOTER.appendChild(footer_body);
FOOTER.appendChild(footer_contact);
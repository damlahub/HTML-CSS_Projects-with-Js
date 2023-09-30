    const LOGIN = document.querySelector("#login");
    let header = document.querySelector("header");

    LOGIN.addEventListener("click", ShowContent);

    function ShowContent(e) {
        e.preventDefault();
        DisableScroll();
        CreateElement();
        Close();
    }

    function CreateElement() {
        let section = document.createElement("section");

        section.classList.add("login-content");
        section.innerHTML = `
        <section class="login-panel">
                        <button id="login-panel-close">
                            X
                        </button>
                        <h1>LOGIN</h1>
                        <form>
                            <input type="email" placeholder="E-Mail">
                            <input type="password" placeholder="Password">
                            <button class="red-btn">Login</button>
                        </form>
                    </section>
        `;
        header.appendChild(section);
    }

    function Close() {
        let closeBtn = document.getElementById("login-panel-close");
        closeBtn.addEventListener("click", function () {
            header.removeChild(header.lastElementChild);
            EnableScroll();

        });
    }

    function DisableScroll() { //Kaydırmayı Engelle
        // Konum değerlerini aldık.
        let scrollTop = document.documentElement.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft;

            // Eğer scroll kullanırsa, bir önceki konuma gel.
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
    function EnableScroll() { //Kaydırma Engelini Kaldır
        window.onscroll = function () { };
    }
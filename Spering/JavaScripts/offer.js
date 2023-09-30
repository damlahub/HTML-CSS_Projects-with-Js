const OFFER = document.querySelector(".offer");

CreateOfferHide();

function ShowContent() {
    RemoveLastChild();
    CreateOfferShow();
}

function HideContent() {
    RemoveLastChild();
    CreateOfferHide();
}
function CreateOfferHide() {
    let hideContent = document.createElement("section");

    hideContent.classList.add("offer-content-hide");
    hideContent.innerHTML = `
    <button id="offer-panel-open">
    BIG SALE ^
    </button>
    `;
    OFFER.appendChild(hideContent);

    let openContentBtn = document.querySelector("#offer-panel-open");   
    openContentBtn.addEventListener("click", ShowContent);
}
function CreateOfferShow() {
    let showContent = document.createElement("section");

    showContent.classList.add("offer-content-show");
    showContent.innerHTML = `
     <button id="offer-panel-close">
     X
     </button>
     <h1>SPECIAL OFFER<br>
    50%</h1>
    <a href="mailto:damlaoksel@hotmail.com">
    Promotion Detail : <br> mail.domain.com</a>
     `;
    OFFER.appendChild(showContent);

    let closeContentBtn = document.querySelector("#offer-panel-close");
    closeContentBtn.addEventListener("click", HideContent);
}

function RemoveLastChild() {
    OFFER.removeChild(OFFER.lastElementChild);
}
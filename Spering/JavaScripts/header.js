    let headerStart = document.createElement("section");
    let headerEnd = document.createElement("section");

    headerStart.classList.add("header-start");
    headerEnd.classList.add("header-end");
    headerStart.innerHTML = `
    <nav class="header-nav">
    <a class="brand" href="#">
        <img src="Assets/Images/logo.png" alt="Spering">
        <span title="Spering"> Spering</span>
    </a>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Category</a></li>
    </ul>
    </nav>
`;
    headerEnd.innerHTML = `
    <a id="login" href="#">Login</a>
    `;
    HEADER.appendChild(headerStart);
    HEADER.appendChild(headerEnd);
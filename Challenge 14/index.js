function login(containerClass, heading, inp1, inp2, btnText) {

    const loginHtml = `
    <div class="${containerClass}">
        <div class="login">
            <h1>${heading}</h1>
            <input type="text" placeholder="${inp1}" id="username">
            <input type="email" placeholder="${inp2}" id="email">
            <button class="login-button">${btnText}</button>
        </div>
    </div>
    `;

    document.body.innerHTML += loginHtml;

    const button = document.querySelector(".login-button");

    button.addEventListener("click", async () => {

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        document.body.innerHTML += `
            <div class="terminal"></div>
        `;

        await startHack(username, email);
    });
}

function waitRandom() {

    const delay = Math.floor(Math.random() * 6000) + 1000;

    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

async function startHack(username, email) {

    const terminal = document.querySelector(".terminal");

    const messages = [
        "Initializing Hacking",
        `Reading files of ${username}`,
        `Email detected: ${email}`,
        "Password file detected",
        "Sending all passwords and personal files to server",
        "Hacking complete"
    ];

    for (const msg of messages) {

        const p = document.createElement("p");
        terminal.appendChild(p);

        let dots = 0;

        const interval = setInterval(() => {

            dots = (dots + 1) % 4;

            p.textContent = msg + ".".repeat(dots);

        }, 300);

        await waitRandom();

        clearInterval(interval);

        p.textContent = msg + "...";
    }
}

login(
    "cont2",
    "Login",
    "Username",
    "Email",
    "Login"
);
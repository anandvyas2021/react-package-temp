import {
    messageStyles,
    boxStyles,
    infoMessage,
    successMessage,
    warnMessage,
    errorMessage,
} from "../../styles/components/message";

function Message() {
    // const dom = document?.createElement("div");
    // dom.className = messageStyles;
    // window.onload = () => document.body.appendChild(dom);
}

const typeHandler = (type) => {
    switch (type) {
        case "info":
            return infoMessage;
        case "success":
            return successMessage;
        case "warn":
            return warnMessage;
        case "error":
            return errorMessage;
        default:
            return infoMessage;
    }
};

Message.prototype.show = function (
    content,
    duration = 4000,
    type = "info",
    onClose = Function.prototype
) {
    const contentBox = document.createElement("div");
    const contentText = document.createElement("span");

    contentText.innerText = content;
    contentBox.className = `${boxStyles} ${typeHandler(type)}`;
    contentBox.classList.add("animate-rwc-msg-in");
    // contentBox.appendChild(icon);
    contentBox.appendChild(contentText);
    contentBox.style.top = `${this.count * 42}px`;
    dom.appendChild(contentBox);

    this.count++;

    // remove message box after duration
    setTimeout(() => {
        contentBox.classList.add("animate-rwc-msg-out");
        setTimeout(() => {
            dom.removeChild(contentBox);

            const boxes = document.querySelectorAll(".content-box");
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.top = `${
                    parseInt(boxes[i].style.top, 10) - 50
                }px`;
            }
            this.count--;

            if (typeof onClose === "function") onClose();
        }, 300);
    }, duration);
};

// API
["info", "success", "warn", "error"].map((method) => {
    return (Message.prototype[method] = function (content, duration, onClose) {
        this.show(content, duration, method, onClose);
    });
});

// the count of messages already exist
Message.prototype.count = 0;

export default new Message();

// const icon = document.createElement("i");
// icon.classList.add(type);
// icon.classList.add("message-icon");

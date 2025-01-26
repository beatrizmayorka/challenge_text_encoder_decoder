function encryptText() {
    let inputText = document.getElementById("inputText").value;

    if (/[^a-z\s]/.test(inputText)) {
        alert("Por favor, digite apenas letras minúsculas e sem acento.");
        return;
    }

    let encryptedText = inputText.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");

    document.getElementById("text-output").value = encryptedText;

    document.querySelector(".empty__result").style.display = "none";
    document.querySelector(".data__result").style.display = "block";

    updateCopyButtonVisibility();
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;

    if (/[^a-z\s]/.test(inputText)) {
        alert("Por favor, digite apenas letras minúsculas e sem acento.");
        return;
    }

    let decryptedText = inputText.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");

    document.getElementById("text-output").value = decryptedText;

    document.querySelector(".empty__result").style.display = "none";
    document.querySelector(".data__result").style.display = "block";

    updateCopyButtonVisibility();
}

function copy() {
    const outputText = document.getElementById('text-output');
    outputText.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}

function updateCopyButtonVisibility() {
    const outputText = document.getElementById('text-output').value;
    const copyButton = document.querySelector('.copy');

    if (outputText.trim() !== "") {
        copyButton.style.display = 'block';
    } else {
        copyButton.style.display = 'none';
    }
}
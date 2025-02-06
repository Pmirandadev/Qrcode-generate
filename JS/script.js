function generateQRCode() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        // Limpa o conteúdo anterior
        document.getElementById('qrcode').innerHTML = '';

        // Gera o novo QR Code
        new QRCode(document.getElementById('qrcode'), {
            text: url,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        alert('Por favor, insira um link válido.');
    }
}
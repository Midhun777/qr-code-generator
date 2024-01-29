let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
	if (qrText.value.lenght > 0) {
		qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
	} else {
		qrText.classList.add('error');
		setTimeout(() => {
			qrText.classList.remove('error');

		}, 500);
	}
}
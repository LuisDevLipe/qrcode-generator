const QRCODE_FORM = document.getElementById("qr-code-form");
const QRCODE = document.getElementById("qrcode");
const QRCODE_TEXT = document.getElementById("qrcode-text");

const QRCODE_OPTIONS_FORM = document.getElementById("qrcode-options-form");

const DOWNLOAD_QRCODE = document.getElementById("download-qrcode");

let options = {};
QRCODE_FORM.addEventListener(
	"submit",
	async (e, texto = e.target.elements["texto"].value, conteudo = e.target.elements["conteudo"].value) => {
		e.preventDefault();
		if (QRCODE.innerHTML !== "") {
			QRCODE.innerHTML = "";
		}
		generateQRCode(QRCODE, conteudo, options);
		QRCODE_TEXT.innerHTML = texto;
	}
);

QRCODE_OPTIONS_FORM.addEventListener("submit", (e) => {
	e.preventDefault();
	let formData = new FormData(e.target);
	options = {
		width: formData.get("width") || 128,
		height: formData.get("height") || 128,
		colorDark: formData.get("cor-qrcode") || "#000000",
		colorLight: formData.get("cor-fundo") || "#ffffff",
		correctLevel: QRCode.CorrectLevel[options.correctLevel] || QRCode.CorrectLevel.H,
	};
	return options;
});

function generateQRCode(element, text, options = {}) {
    console.log(options)
	if (Object.keys(options).length === 0)
         return new QRCode(element, text);
	return new QRCode(element, {
		useSVG: true,
		text: text,
		width: options.width,
        height: options.height,
        colorDark: options.colorDark,
        colorLight: options.colorLight,
        correctLevel: options.correctLevel,

	});
}

DOWNLOAD_QRCODE.addEventListener("click", () => {
	let qrcode_node = document.getElementById("qrcode-wrapper");

	domtoimage
		.toSvg(qrcode_node, { quality: 1 })
		.then(function (dataUrl) {
			var link = document.createElement("a");
			link.download = "qr-code.svg";
			link.href = dataUrl;
			link.click();
		})
		.catch(function (error) {
			console.error("oops, something went wrong!", error);
		});
});

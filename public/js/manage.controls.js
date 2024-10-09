document.addEventListener("DOMContentLoaded", () => {
	const ROOT = document.documentElement;
	const ROOTSTYLES = getComputedStyle(ROOT);

	const HTML = document.documentElement;

	const FONT_SIZE = document.getElementById("font-size").addEventListener("change", (e) => {
		HTML.style.setProperty("--custom-font-size", e.target.value + "px");
		document.getElementById("show-font-size-value").innerText = e.target.value + "px";
		return e.target.value;
	});

	const LINE_HEIGHT = document.getElementById("line-height").addEventListener("change", (e) => {
		HTML.style.setProperty("--custom-line-height", e.target.value + "px");
		document.getElementById("show-line-height-value").innerText = e.target.value + "px";
		return e.target.value;
	});

	const FONT_COLOR = document.getElementById("font-color").addEventListener("change", (e) => {
		HTML.style.setProperty("--custom-font-color", e.target.value);
		return e.target.value;
	});

    const BORDER_RADIUS = document.getElementById("border-radius").addEventListener("change", (e) => {
        HTML.style.setProperty("--custom-border-radius", e.target.value + "px");
        document.getElementById("show-border-radius-value").innerText = e.target.value + "px";
        return e.target.value;
    });

    const PADDING = document.getElementById("padding").addEventListener("change", (e) => {
        HTML.style.setProperty("--custom-padding", e.target.value + "px");
        document.getElementById("show-padding-value").innerText = e.target.value + "px";
        return e.target.value;
    });

    const BACKGROUND_QRCODE = document.getElementById("background-qrcode").addEventListener("change", (e) => {
        HTML.style.setProperty("--custom-background-qrcode", e.target.value);
        return e.target.value;
    });

    const RESETAR = document.getElementById("resetar").addEventListener("click", () => {
        function reloadCSS() {
            const links = document.getElementsByTagName('link');
            
            Array.from(links)
              .filter(link => link.rel.toLowerCase() === 'stylesheet' && link.href)
              .forEach(link => {
                const url = new URL(link.href, location.href);
                url.searchParams.set('forceReload', Date.now());
                link.href = url.href;
              });
          }

            reloadCSS();

            HTML.style.setProperty("--custom-font-size", ROOTSTYLES.getPropertyValue("--font-size"));
            HTML.style.setProperty("--custom-line-height", ROOTSTYLES.getPropertyValue("--line-height"));
            HTML.style.setProperty("--custom-font-color", ROOTSTYLES.getPropertyValue("--font-color"));

            HTML.style.setProperty("--custom-border-radius", ROOTSTYLES.getPropertyValue("--border-radius"));
            HTML.style.setProperty("--custom-padding", ROOTSTYLES.getPropertyValue("--padding"));

            document.getElementById("show-font-size-value").innerText = ROOTSTYLES.getPropertyValue("--font-size");
            document.getElementById("show-line-height-value").innerText = ROOTSTYLES.getPropertyValue("--line-height");
            
            document.getElementById("show-border-radius-value").innerText = ROOTSTYLES.getPropertyValue("--border-radius");
            document.getElementById("show-padding-value").innerText = ROOTSTYLES.getPropertyValue("--padding");
    }
    );
});

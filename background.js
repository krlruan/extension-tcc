chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Filtra para capturar apenas a navegação principal (página principal), ignorando scripts, imagens, etc.
    if (details.type === "main_frame") {
      console.log("URL capturada antecipadamente:", details.url);

      // Aqui você pode fazer o que quiser com a URL (salvar no storage, enviar para uma API, etc.)
    }
  },
  { urls: ["<all_urls>"] } // Captura de qualquer site
);
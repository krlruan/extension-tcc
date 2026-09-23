// Captura a URL atual onde o usuário tenta entrar
const urlAtual = window.location.href;

// Cria a mensagem de confirmação
const mensagem = `Você realmente deseja entrar no site:\n${urlAtual}?`;

// Abre a caixa de diálogo nativa do navegador (bloqueia a execução até uma resposta)
if (!confirm(mensagem)) {
  // Se o usuário clicar em "Cancelar":

  if (document.referrer) {
    // Se ele veio de outra página, volta para ela
    window.location.href = document.referrer;
  } else {
    // Se ele digitou direto na barra ou abriu nova aba, redireciona para uma página segura (ex: Google)
    window.location.href = "https://google.com";
  }
}

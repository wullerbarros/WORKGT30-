const colecaoDestaque = [
    {
        imagemSrc: './img-colecaoDestaque/camisa.svg',
        altImagem: "imagem de um traço de uma camisa",
        titulo: "Camisetas"
    },
    {
        imagemSrc: './img-colecaoDestaque/calça.svg',
        altImagem: "imagem de um traço de uma calça",
        titulo: "Calças"
    },
    {
        imagemSrc: './img-colecaoDestaque/calça.svg',
        altImagem: "imagem de um traço de uma camisa",
        titulo: "Bonés"
    },
    {
        imagemSrc: './img-colecaoDestaque/Group.svg',
        altImagem: "imagem de um traço de um heaphone",
        titulo: "Headphones"
    },
    {
        imagemSrc: './img-colecaoDestaque/tenis.svg',
        altImagem: "imagem de um traço de um tenis",
        titulo: "Tênis"
    }
];

const cardsColecao = document.getElementById("cards-colecao-destaque");

colecaoDestaque.forEach((item) => {
    // Contêiner principal do card
    const card = document.createElement("div");
    card.classList.add('flex', 'flex-col', 'items-center', 'gap-[10px]');

    // Div para a imagem
    const imagemDiv = document.createElement("div");
    imagemDiv.classList.add('bg-white', 'w-[104px]', 'h-[104px]', 'p-[20px]', 'rounded-[150px]', 'flex', 'items-center', 'justify-center');

    const imagem = document.createElement("img");
    imagem.src = item.imagemSrc;
    imagem.alt = item.altImagem;
    imagem.classList.add('w-[64px]', 'h-[63.92px]', 'hover:scale-110', 'transition-transform', 'duration-300', 'cursor-pointer');

    imagemDiv.appendChild(imagem);

    // Div para o título
    const tituloDiv = document.createElement("div");
    const titulo = document.createElement("h2");
    titulo.classList.add('font-[inter]', 'font-bold', 'text-[14px]', 'text-[#474747]', 'hover:text-[#C92071]', 'transition-colors', 'duration-300');
    titulo.textContent = item.titulo;

    tituloDiv.appendChild(titulo);

    // Adicionando as divs ao contêiner principal
    card.appendChild(imagemDiv);
    card.appendChild(tituloDiv);

    // Adicionando o card ao container principal
    cardsColecao.appendChild(card);
});
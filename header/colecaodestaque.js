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
    const colecaoDivImg = document.createElement("div");
    colecaoDivImg.classList.add('bg-white', 'w-[104px]', 'h-[104px]', 'p-[20px]', 'gap-[10px]', 'rounded-[150px]', 'flex', 'items-center', 'justify-center', 'gap-[10px]');

    const imagem = document.createElement("img");
    imagem.src = item.imagemSrc;
    imagem.alt = item.altImagem;
    imagem.classList.add('w-[64px]', 'h-[63.92px]' , 'hover:scale-110', 'transition-transform', 'duration-300', 'cursor-pointer');

    // const titulo = document.createElement("p");
    // titulo.classList.add('font-[inter]','font-bold', 'text-[14px]', 'text-[#474747]', 'mt-[160px]', 'mb-[20px]','hover:text-[#C92071]', 'transition-colors', 'duration-300');
    // titulo.textContent = item.titulo;

    // Adicionando os elementos criados ao card
    colecaoDivImg.appendChild(imagem);
    // cardsColecao.appendChild(titulo)

    // Adicionando o card ao container
    cardsColecao.appendChild(colecaoDivImg);
});
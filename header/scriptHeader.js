const destaqueCardsData = [
    {
        desconto: '30% OFF',
        titulo: 'Novo drop supreme',
        imagemSrc: './img-colecaoDestaque/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.svg',
        altImagem: 'camiseta preta',
        textoBotao: 'Comprar'
    },
    {
        desconto: '30% OFF',
        titulo: 'Coleção Adidas',
        imagemSrc: './img-colecaoDestaque/ddd 1.svg',
        altImagem: 'imagem de um tênis branco com detalhes pretos',
        textoBotao: 'Comprar'
    },
    {
        desconto: '30% OFF',
        titulo: 'Novo Beats Bass',
        imagemSrc: './img-colecaoDestaque/d9db11953a2d185d37246bb1f500c957 1.svg',
        altImagem: 'imagem de fone de ouvido, modelo Supra-auricular',
        textoBotao: 'Comprar'
    }
];

const cardsContainer = document.getElementById('destaque-cards-container');

destaqueCardsData.forEach(cardData => { 
    // 1. Criar os elementos HTML do card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('bg-[#D8E3F2]', 'w-[405px]', 'h-[251px]', 'rounded-[8px]', 'flex', 'items-center', 'justify-center', 'relative');

    const descontoP = document.createElement('p');
    descontoP.classList.add('bg-[#E7FF86]', 'px-6', 'text-center', 'rounded-[20px]', 'text-[14px]', 'absolute', 'transform', '-translate-y-[60px]', '-translate-x-[120px]');
    descontoP.textContent = cardData.desconto;

    const tituloH4 = document.createElement('h4');
    tituloH4.classList.add('font-bold', 'text-[32px]', 'w-[172px]', 'h-[72px]', 'text-[#1F1F1F]', 'absolute', 'transform', '-translate-x-[80px]', '-translate-y-[5px]');
    tituloH4.textContent = cardData.titulo;

    const imagemImg = document.createElement('img');
    imagemImg.src = cardData.imagemSrc;
    imagemImg.alt = cardData.altImagem;
    imagemImg.classList.add('w-[200px]', 'h-[200px]', 'transform', 'translate-x-[100px]', 'translate-y-[25px]', 'absolute');

    const botaoComprar = document.createElement('button');
    botaoComprar.classList.add('bg-white', 'hover:bg-[#E7FF86]', 'cursor-pointer', 'px-16', 'py-2', 'rounded-[8px]', 'absolute', 'transform', '-translate-x-[75px]', 'translate-y-[95px]', 'font-bold', 'text-[#C92071]');
    botaoComprar.textContent = cardData.textoBotao;

    // 2. Adicionar os elementos criados ao card
    cardDiv.appendChild(descontoP);
    cardDiv.appendChild(tituloH4);
    cardDiv.appendChild(imagemImg);
    cardDiv.appendChild(botaoComprar);

    // 3. Adicionar o card ao container
    cardsContainer.appendChild(cardDiv);
});
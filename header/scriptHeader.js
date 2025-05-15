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
    descontoP.classList.add('bg-[#E7FF86]', 'h-[32px]', 'w-[96px]', 'text-center', 'flex', 'items-center', 'justify-center', 'rounded-[29px]', 'text-[14px]', 'mt-[34px]', 'mb-[185px]', 'mr-[279px]', 'ml-[30px]', 'font-bold', 'text-[#474747]');
    descontoP.textContent = cardData.desconto;

    const tituloH2 = document.createElement('h2');
    tituloH2.classList.add('font-bold', 'text-[32px]', 'text-[inter]', 'leading-[36px]', 'w-[172px]', 'h-[72px]', 'text-[#1F1F1F]', 'absolute', 'mt-[76px]', 'mb-[76px]', 'mr-[203px]', 'ml-[30px]');
    tituloH2.textContent = cardData.titulo;

    const imagemImg = document.createElement('img');
    imagemImg.src = cardData.imagemSrc;
    imagemImg.alt = cardData.altImagem;
    imagemImg.classList.add('w-[242px]', 'h-[251px]', 'transform', 'translate-x-[80px]', 'translate-y-[0px]', 'absolute');

    const botaoComprar = document.createElement('button');
    botaoComprar.classList.add('bg-white', 'hover:bg-[#E7FF86]', 'cursor-pointer', 'w-[153px]', 'h-[48px]', 'rounded-[8px]', 'absolute', 'mr-[222px]', 'ml-[30px]', 'mt-[168px]', 'mb-[35px]', 'font-bold', 'text-[#C92071]');
    botaoComprar.textContent = cardData.textoBotao;

    // 2. Adicionar os elementos criados ao card
    cardDiv.appendChild(descontoP);
    cardDiv.appendChild(tituloH2);
    cardDiv.appendChild(imagemImg);
    cardDiv.appendChild(botaoComprar);

    // 3. Adicionar o card ao container
    cardsContainer.appendChild(cardDiv);
});
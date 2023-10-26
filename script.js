/*js do carousel*/
$(document).ready(function () {
  var currentIndex = 0;
  var images = $(".carousel-container img");
  var totalImages = images.length;

  function showImage(index) {
    images.hide();
    images.eq(index).show();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  }

  $(".next").on("click", nextImage);
  $(".prev").on("click", prevImage);

  showImage(currentIndex);

  // Adicione a mudança automática a cada 10 segundos (10000 ms)
  var intervalId = setInterval(nextImage, 10000);

  $(".carousel").hover(
    function () {
      clearInterval(intervalId);
    },
    function () {
      intervalId = setInterval(nextImage, 10000);
    }
  );
});

/*js da galeria*/
const produtos = [
  {
    imagem: "fotos/img1.jpg",
    titulo: "Luck",
    raca: "Caramelo tradicional",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Luck <br> Raça: Caramelo tradicional <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> Lucky tem porte médio, está castrado e vacinado. Foi resgatado de maus tratos, tem 1 ano <br><br> <b>Dados doador</b> <br> Nome: Leticia Feloni <br> Contato: (16) 99789-0905",
  },
  {
    imagem: "fotos/img2.jpg",
    titulo: "Snoop",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Snoop <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> Foi resgatado das ruas. Hoje tem cerca de 3 anos, castrado, vacinado, vermifugado <br><br> <b>Dados doador</b> <br> Nome: Mary <br> Contato: (16) 99233-5115",
  },
  {
    imagem: "fotos/img3.jpg",
    titulo: "Tunico",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Tunico <br> Raça: SRD <br> Sexo: Fêmea<br><br> <b>Mais informações:</b> <br> Foi resgatada do lixão, onde foi abandonada. Está em lar temporário pago. Tem cerca de 2 anos, castrada, vacinada e vermifugada <br><br> <b>Dados doador</b> <br> Nome: Mary <br> Contato: (16) 99233-5115",
  },
  {
    imagem: "fotos/img4.jpg",
    titulo: "Nina",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Nina <br> Raça: SRD <br> Sexo: Fêmea<br><br> <b>Mais informações:</b> <br> É porte médio, está castrado e vacinado <br><br> <b>Dados doador</b> <br> Nome: Leticia Feloni <br> Contato: (16) 99789-0905",
  },
  {
    imagem: "fotos/img5.jpg",
    titulo: "Bob",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Bob <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> Castrado, vacinado e adestrado <br> <b>Adoção especial:</b> <br> Pessoas que tenham liderança e gostem de caminhar ou correr <br><br> <b>Dados doador</b> <br> Nome: Leticia Feloni <br> Contato: (16) 99789-0905",
  },
  {
    imagem: "fotos/img6.jpg",
    titulo: "Não possui nome (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui (filhote) <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> Esse e outros filhotes irmãos dele foram resgatados por uma pessoa que está cuidando e dando lar temporário, porém não pode ficar com eles. São 2 machos e 3 fêmeas, devem ter entre 2 a 3 meses de idade, dóceis, e provavelmente ficarão porte médio. Estão sendo vacinados e recebendo cuidados veterinários <br><br> <b>Dados doador</b> <br> Nome: Adriana <br> Contato: (16) 99797-1688",
  },
  {
    imagem: "fotos/img7.jpg",
    titulo: "Maurício ",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Maurício <br> Sexo: Macho <br> Raça: SRD <br><br><br> <b>Mais informações:</b> <br> 9 meses de vida. São castrado, e vacinado com a 1° dose da vacina!  São negativados para Fiv e Felv <br><br> <b>Dados doador</b> <br> Nome: Kassia Brito <br> Contato: (16) 99787-5528",
  },
  {
    imagem: "fotos/img8.jpg",
    titulo: "Não possui (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui (filhote) <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Dados doador</b> <br> Nome: Marlucia Ramos <br> Contato: (16) 99742-1161",
  },
  {
    imagem: "fotos/img9.jpg",
    titulo: "Branquinha",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Branquinha <br> Raça: SRD <br> Sexo: Fêmea<br><br> <b>Mais informações:</b> <br> A branquinha positivou para FIV – Vírus da imunodeficiência felina (AIDS Felina)</b> <br> Nome: Ana Larissa <br> Contato: (16) 99764-8770",
  },
  {
    imagem: "fotos/img10.jpg",
    titulo: "Não possui nome",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui nome <br> Raça: Não identificado/Vira-Lata <br> Sexo: Fêmea<br><br> <b>Mais informações: Ela possui uma irmã e a preferência é que se adote ambas pois são muito apegadas</b> <br> Ela</b> <br> Nome: Giovana Real <br> Contato: (16) 99789-0905",
  },
  {
    imagem: "fotos/img11.jpg",
    titulo: "Não possui nome (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui nome (filhote) <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> 40 dias de vida. Somente para casas e apartamentos sem qualquer rota de fuga. Por serem muito novos, daremos preferência a quem NÃO tenha outros animais ou crianças  pequenas na casa. <br><br> <b>Dados doador</b> <br> Nome: Castração Felina Araraquara <br> Contato: (16) 99601-6585",
  },
  {
    imagem: "fotos/img12.jpg",
    titulo: "Não possui nome (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui nome (filhote) <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> 40 dias de vida. Somente para casas e apartamentos sem qualquer rota de fuga. Por serem muito novos, daremos preferência a quem NÃO tenha outros animais ou crianças  pequenas na casa. <br><br> <b>Dados doador</b> <br> Nome: Castração Felina Araraquara <br> Contato: (16) 99601-6585",
  },
  {
    imagem: "fotos/img13.jpg",
    titulo: "Não possui nome (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui nome (filhote) <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> Gatinhos  de 45 dias muito  saudáveis, dóceis e brincalhões disponíveis para lares sem qualquer rota de fuga.  Estão vermifugados e sem pulgas (advocate aplicado no dorso). Já comem ração seca e usam caixa de areia. <br> É porte médio, está castrado e vacinado <br><br> <b>Dados doador</b> <br> Nome: Castração Felina Araraquara <br> Contato: (16) 99601-6585",
  },
  {
    imagem: "fotos/img14.jpg",
    titulo: "Theodoro ",
    raca: "Não identificado/Vira-lata",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Theodoro <br> Raça: Não identificado/Vira-Lata <br> Sexo: Macho<br><br> <b>Mais informações:</b> <br> Ele foi resgatado das ruas e agora precisa de um lar, está vacinado e castrado e tem aproximadamente um ano. Theodoro é muito dócil e companheiro <br><br> <b>Dados doador</b> <br> Nome: Leticia Feloni <br> Contato: (16) 99789-0905",
  },
  {
    imagem: "fotos/img15.jpg",
    titulo: "Não possui nome (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui nome (filhote) <br> Raça: SRD <br> Sexo: Macho<br><br> <b>Mais informações: </b> <br> Gatinhos  de 45 dias muito  saudáveis, dóceis e brincalhões disponíveis para lares sem qualquer rota de fuga. Está vermifugado e sem pulgas (advocate aplicado no dorso). Já come ração seca e usa caixa de areia. <br><br> <b>Dados doador</b> <br> Nome: Castração Felina Araraquara <br> Contato: (16) 99601-6585",
  },
  {
    imagem: "fotos/img16.jpg",
    titulo: "Não possui nome (filhote)",
    raca: "SRD",
    descricao:
      "<b>Dados Animal</b> <br> Nome: Não possui nome (filhote) <br> Raça: SRD <br> Sexo: fêmea<br><br> <b>Mais informações:</b> <br> Têm 3 meses, está castrada, vermifugada e sem pulgas. <br><br> <b>Dados doador</b> <br> Nome: Castração Felina Araraquara <br> Contato: (16) 99601-6585",
  },
];

const pesquisa = document.getElementById("pesquisa");
pesquisa.addEventListener("input", buscaItem);

function buscaItem() {
  const valor = pesquisa.value.toLowerCase();
  const itens = document.querySelectorAll(".grid-item");

  for (let i = 0; i < itens.length; i++) {
    const titulo = itens[i].querySelector("h3").textContent.toLowerCase();
    const raca = itens[i].querySelector("p").textContent.toLowerCase();
    const itemDiv = itens[i];

    if (titulo.includes(valor) || raca.includes(valor)) {
      itemDiv.style.display = "block";
    } else {
      itemDiv.style.display = "none";
    }
  }
}

function criarGaleria() {
  const numeroItens = produtos.length;
  const containerGaleria = document.getElementById("gridContainer");
  containerGaleria.innerHTML = "";

  for (let i = 0; i < numeroItens; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "grid-item";

    const imagem = document.createElement("img");
    imagem.src = produtos[i].imagem;

    const titulo = document.createElement("h3");
    titulo.textContent = produtos[i].titulo;

    const raca = document.createElement("p");
    raca.textContent = produtos[i].raca;

    const button = document.createElement("button");
    button.textContent = "MAIS INFORMAÇÕES";
    button.classList.add("custom-button");

    button.addEventListener("click", function () {
      abrirModal(produtos[i]);
    });

    itemDiv.appendChild(imagem);
    itemDiv.appendChild(titulo);
    itemDiv.appendChild(raca);
    itemDiv.appendChild(button);

    containerGaleria.appendChild(itemDiv);
  }
}

function abrirModal(produto) {
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");
  modal.classList.remove("hide");
  fade.classList.remove("hide");

  const informacoesModal = document.querySelector(".modal-body");
  informacoesModal.innerHTML = `
      <h3>${produto.titulo}</h3>
      <p>${produto.descricao}</p>
    `;

  const closeModalButton = document.getElementById("close-modal");
  closeModalButton.addEventListener("click", toggleModal);
}

function toggleModal() {
  const modal = document.getElementById("modal");
  const fade = document.getElementById("fade");
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
}

criarGaleria();

const cepInput = document.getElementById('cep-local');


// função pega os dados da api e preenche os campos

function buscarDadosCEP(cep) {
  const apiUrl = `https://brasilaberto.com/api/v1/zipcode/${cep}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      return response.json();
    })
    .then((data) => {
      if(data.result.city) {
        $('#rua').val( data.result.street);
        $('#bairro').val( data.result.district);
        $('#cidade').val( data.result.city);
        $('#estado').val( data.result.state);
      } else {
        $("#cep-local").text("Erro! Cep inválido!")
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


cepInput.addEventListener('blur', () => {
  const cep = cepInput.value;
  if (cep) {
    buscarDadosCEP(cep);
  }
});

// função que adciona um hífen ('-') automatico quando digitado o cep
$(document).ready(() => {
  function formataCEP(campo) {
    campo.val(campo.val().replace(/\D/g, ''));
    if (campo.val().length > 5) {
      campo.val(campo.val().replace(/(\d{5})(\d{3})/, '$1-$2'));
    }
  }

  $('#cep-local').on('input', function () {
    formataCEP($(this));
  });
});


function atualizarProgresso() {
  const camposObrigatorios = document.querySelectorAll('.form-ajust input[required]');
  const camposPreenchidos = Array.from(camposObrigatorios).filter(input => input.value.trim() !== '');

  const progresso = (camposPreenchidos.length / camposObrigatorios.length) * 100;
  document.getElementById('progress-bar').style.width = progresso + '%';
}


const camposInput = document.querySelectorAll('.form-ajust input[required]');
camposInput.forEach(input => {
  input.addEventListener('input', atualizarProgresso);
});


function arriba(){

  $('html, body').animate({
    scrollTop: 1
  }, 'slow')
}
$('subida').click(arriba)
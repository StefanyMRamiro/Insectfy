import { PureComponent } from 'react';

// Definindo a interface para um predador
interface Predator {
  id: number;
  name: string;
  description: string;
  image: string; // URL da imagem do inseto
}

// Definindo a interface para um grupo de predadores
interface PredatorGroup {
  title: string;
  predators: Predator[];
}

interface State {
  predatorGroups: PredatorGroup[];
  openGroup: string | null; // Grupo aberto atualmente
}

export class Predadores extends PureComponent<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      predatorGroups: [
        {
          title: 'Besouros Predadores',
          predators: [
            {
              id: 1, 
              name: 'Coccinellidae',
              description: 'São conhecidos popularmente como joaninhas. Possuem porte pequeno a médio (0,8 a 11) mm, corpo compacto e convexo dorsalmente. As joaninhas são agentes de controle biológico natural podendo predar mais de 100 pulgões por dia.',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coccinella_septempunctata_Kaldari.jpg/280px-Coccinella_septempunctata_Kaldari.jpg',
            },
            {
              id: 2,
              name: 'Carabidae',
              description: 'São besouros escuros, castanhos ou coloridos de porte variado (1 a 80) mm e com pernas longas. São bons corredores e raramente voam.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/3979392683_fd5b38b9b5_w.jpg',
            },
            {
              id: 3,
              name: 'Cantharidae',
              description: 'São besouros de corpo mole, alongado, achatado e de coloração variada (preto a vermelho). Alimentam-se de outros insetos, néctar e pólen.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/47784461122_e79914a635_w.jpg',
            },
            {
              id: 4,
              name: 'Anthicidae',
              description: 'São insetos geralmente de corpo alongado, com uma constrição na cabeça formando um “pescoço”. Alimentam-se de pequenos artrópodes, fungos e pólen.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/Anthicus.jpg',
            },
          ],
        },
        {
          title: 'Percevejos Predadores',
          predators: [
            {
              id: 5,
              name: 'Anthocoridae',
              description: 'São percevejos ovalados ou alongados, escuros, variando de 1,4 a 4,5 mm de comprimento. Vivem sobre flores, onde predam outros insetos.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/3896108888_da6dd8a6ec_w.jpg',
            },
            {
              id: 6,
              name: 'Pentatomidae',
              description: 'São percevejos de corpo geralmente ovoide. Os insetos da subordem Heteroptera são predominantemente fitófagos, mas há um número considerável de espécies entomófagas.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/19612637402_d9441944c3_w.jpg',
            },
            {
              id: 7,
              name: 'Reduviidae',
              description: 'Conhecidos popularmente por percevejos assassinos pelo hábito predador. Apresentam cabeça geralmente alongada e constrita atrás do olho composto grande.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/44308157254_343278e2c1_w.jpg',
            },
          ],
        },
        {
          title: 'Moscas Predadoras',
          predators: [
            {
              id: 8,
              name: 'Asilidae',
              description: 'São dípteros relativamente comuns, variando entre 3 e 50 mm de comprimento. São predadores ativos de insetos em geral e aracnídeos. Os adultos imobilizam a presa injetando saliva que contém enzimas neurotóxicas e proteolíticas. São frequentemente encontrados nas extremidades de galhos secos ou da vegetação, principalmente em áreas abertas, onde tem boa visão de suas presas potenciais. As larvas vivem no solo ou em madeira em decomposição e são predadoras de ovos, larvas e pupas de outros insetos. Adultos de Porasilus barbielinii possuem uma grande agressividade e capacidade de busca, predando preferencialmente adultos de Deois flavopicta, os quais representaram 92,4% dos insetos capturados em pastagens.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/asilidae2-420x300.jpg',
            },
            {
              id: 9,
              name: 'Dolichopodidae',
              description: 'A família Dolichopodidae é bastante diversificada em áreas tropicais. Variam de 0,8 a 9 mm de comprimento. Adultos são predadores de outros insetos menores e são facilmente reconhecidos pela coloração verde ou azul metálica ou amarelada. As larvas são predominantemente predadoras e algumas são fitófagas. As larvas são encontradas no lodo, madeira em decomposição, sob casca de árvore e serapilheira. Vem sendo relatado como importante inimigo natural de pulgões na cultura do trigo.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/41957876312_6f9d7ecb7c_w.jpg',
            },
          ],
        },
        {
          title: 'Hymenopteras Predadores',
          predators: [
            {
              id: 10,
              name: 'Vespidae',
              description: 'Os vespídeos podem capturar uma grande diversidade de presas, apresentando possibilidades de utilização no controle de insetos-praga. A capacidade de forrageamento e seu potencial de predação poderá ser ainda maior em épocas de revoada de determinados insetos. Outro fator relevante é o raio de ação dos vespídeos. No Brasil, larvas, pupas e adultos do bicudo no interior das “maçãs” ainda verdes e fendidas foram predados pela vespa Brachygastra lecheguana (Latreille) (Hymenoptera, Vespidae). Além disso, são importantes agentes de controle do bicho mineiro do cafeeiro, Leucoptera coffeella (Guérin-Mèneville) (Lepidoptera, Lyonetiidae). E atuam regulando populações de outros insetos-pragas em cultivos de brássicas.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/32221095097_1e2bdb4522_w.jpg',
            },
            {
              id: 11,
              name: 'Formicidae',
              description: 'As formigas, especialmente aquelas do gênero Solenopsis, são consideradas as mais eficientes predadoras dessa ordem e mencionadas como eficazes no controle de insetos florestais ou de insetos-praga em citros ou cana-de-açúcar, com uma grande contribuição para o controle biológico natural de Diatraea saccharalis (Fabricius) (Lepidoptera, Crambidae). Contudo, nos EUA, constataram que as formigas S. invicta e S. geminata (Fabricius) foram os mais importantes predadores desse inseto-praga, com uma capacidade predatória crescente ao longo do ciclo da cultura, atingindo 84,4% em uma das localidades estudadas. As formigas são importantes predadoras de pragas de insetos em culturas perenes, como frutas, vegetais, plantas ornamentais, grãos, café, cana de açúcar e algodão.',
              image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/49149965982_aa00b80d62_w.jpg',
            },
          ],
        },
        {
            title: 'Neuroptera Predadores',
            predators: [
              {
                id: 12,
                name: 'Chrisopidae',
                description: 'É a maior família de neurópteros do Brasil. Adultos são de tamanho médio, como Chrysoperla externa (Hagen), que mede aproximadamente 12 mm de comprimento. Geralmente são verde-claros, com olhos dourados.  O hábito alimentar dos adultos varia desde excreta açucarado e pólen, para Chrysoperla Steinmann, à predação, em Chrysopa Leach. As larvas de crisopídeos merecem destaque pela abundância e frequência com que ocorrem em um agroecossistema citrícola, constituindo-se em agentes efetivos na regulação da densidade populacional de insetos fitófagos. Tem ação observada em cultivos hortícolas também para diversos insetos e ácaros fitófagos.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/28653078940_4dbb4a3f60_w.jpg',
              },
            ],
          },
          {
            title: 'Parasitóides',
            predators: [
              {
                id: 13,
                name: 'Braconidae',
                description: 'Os braconideos são parasitoides exclusivamente de insetos. Geralmente parasitam lepidópteros e dípteros. Entretanto praticamente todos os holometábolos são parasitados, com exceção dos Mecoptera, Trichoptera e Siphonaptera. Uma das espécies mais utilizadas dessa família, é o parasitoide Cotesia flavipes, sendo considerado o maior programa de controle biológico no mundo. Esse parasitoide é responsável por mais de 80% do parasitismo total da broca-da-cana. Outro organismo importante desta família é Diachasmimorpha longicaudata, parasitóide da mosca da fruta. Ele é encontrado em pomares de citros, maçãs e outras fruteiras atacadas por esta praga.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/9251180172_723be2c9ae_w.jpg',
              },
              {
                id: 14,
                name: 'Eulophidae',
                description: 'A biologia de Eulophidae é extremamente diversificada, sendo conhecidos como parasitas externos ou internos de numerosas famílias e ordens de insetos. No entanto, parasitam preferencialmente insetos das ordens Lepidoptera e Diptera, especialmente as espécies minadoras de folhas. Eles podem parasitar ovos, larvas e pupas. Um parasitoide desta família que vem sendo muito estudado e já vem sendo aplicado em pomares de citros é parasitoide Tamarixia radiata. Este parasitóide é muito importante para o manejo do psilídeo, a praga mais importante desta cultura.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/49644983847_0bbd5fdd1f_w.jpg',
              },
              {
                id: 15,
                name: 'Trichogrammatidae',
                description: 'Trichogrammatidae é uma das famílias mais utilizadas no controle biológico. As espécies dessa família são endoparasitas de ovos de Hemiptera, Coleoptera, Lepidoptera, Hymenoptera, Diptera e Thysanoptera. Tem-se utilizado este parasitoide para controle de insetos praga na cultura do algodão, cana de açúcar, soja e milho. A espécie Trichogramma atopovirilia é um importante parasitoide de ovos de Spodoptera frugiperda em cultivos de milho.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/49030938326_841d9c79a3_w.jpg',
              },
              {
                id: 16,
                name: 'Ichneumonidae',
                description: 'Os insetos da família Ichneumonidae são parasitas de larvas e/ou pupas de Coleoptera, Diptera, Hymenoptera e Lepidoptera. As fêmeas podem ovipositar entre pouco menos de dez até milhares de ovos. Os ovos de algumas espécies possuem um pedúnculo, através do qual o ovo é fixado externamente ao hospedeiro . Diadegma  é um gênero que parasita uma importante praga de brássicas, a Plutella xylostella.Também se tem utilizado o parasitoide Megarhyssa nortoni para o controle da vespa da madeira Sirex noctilio.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/48652619751_908ffc88a9_w.jpg',
              },
              
            ],
          },
          {
            title: 'Moscas Parasitoides',
            predators: [
              {
                id: 17,
                name: 'Sarcophagidae',
                description: ' Os adultos da família Sarcophagidae possuem faixas pretas longitudinais ao longo do tórax e abdômen ornamentado com coloração entre cinza e negro. Variam entre 2 e 25 mm de comprimento. São, em sua grande maioria, ovovivíparos, com os ovos eclodindo em larva no momento da postura, o que provavelmente pode ser considerado uma adaptação para parasitar hospedeiros que se movimentam rápido. Parasitoide de Hemiptera (Cigarras, pulgões e cochonilha) e Lepidoptera.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/28653078940_4dbb4a3f60_w.jpg',
              },
              {
                id: 18,
                name: 'Tachinidae',
                description: 'A família Tachinidae são parasitoides relativamente generalistas, parasitando principalmente larvas de Lepidoptera, Coleoptera, Hymenoptera e ninfas e adultos de Hemiptera. Tachinidae é uma das maiores famílias de Diptera. Os adultos variam entre 2 e 20 mm de comprimento e são muito diversificados quanto a forma do corpo. Trichopoda pennipes, um endoparasitóide de ninfas e adultos de Nezara viridula, é um dos inimigos naturais de maior sucesso dessa praga importante na cultura da soja.',
                image: 'https://www.museudeentomologia.ufv.br/wp-content/uploads/2020/03/40160909441_80b9ecd776_w.jpg',
              },
            ],
          },
      ],
      openGroup: null,
    };
  }

  toggleGroup = (group: string) => {
    this.setState((prevState) => ({
      openGroup: prevState.openGroup === group ? null : group,
    }));
  };

  render() {
    const { predatorGroups, openGroup } = this.state;

    return (
      <div className="p-4">
        <h1 className="text-center text-xl mb-4">Guia de Predadores Naturais</h1>
        {predatorGroups.map((group) => (
          <div key={group.title} className="mb-4">
            <button
              className="w-full text-left bg-amber-800 text-white p-2 rounded hover:bg-amber-700 focus:outline-none"
              onClick={() => this.toggleGroup(group.title)}
            >
              {group.title}
            </button>
            {openGroup === group.title && (
              <div className=" justify-center mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.predators.map((predator) => (
                  <div key={predator.id} className="border rounded p-4 shadow-md">
                    <img
                      src={predator.image}
                      alt={predator.name}
                      className="justify-center w-full h-32 object-cover mb-2 rounded"
                    />
                    <h2 className="text-lg justify-center font-semibold">{predator.name}</h2>
                    <p style={{ textAlign: 'justify' }}>{predator.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Predadores;

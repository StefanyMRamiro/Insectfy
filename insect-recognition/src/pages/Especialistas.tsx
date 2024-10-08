import { PureComponent } from 'react';


// Componente para exibir especialistas
class ContactSpecialists extends PureComponent {
  state = {
    specialists: [
      {
        id: 1,
        name: 'Prof. Dr.ª Vanda Pietrowski',
        email: 'vandapietrowski@gmail.com',
        phone: '(45) 32847901',
        image: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4784026J8" ,
        description: 'Especialista em entomologia agrícola.',
      },
      {
        id: 2,
        name: 'Prof. Dr. Odair José Kuhn ',
        email: 'ojkuhn@gmail.com',
        phone: '(45) 32847913',
        image: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4760575J9",
        description: 'Tem experiência na área de Agronomia, com ênfase em Fitopatologia, atuando em fisiologia e bioquímica fitopatológica, indução de resistência e controle biológico de doenças em plantas.',
      },
      // Adicione mais especialistas conforme necessário
    ],
  };

  render() {
    const { specialists } = this.state;

    return (
      <div className="p-4">
        <h1 className="text-center text-xl mb-4">Fale com nossos especialistas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialists.map((specialist) => (
            <div key={specialist.id} className="border rounded p-4 shadow-md">
              <img
                src={specialist.image}
                alt={specialist.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">{specialist.name}</h2>
              <p style={{ textAlign: 'justify' }}>{specialist.description}</p>
              <p>Email: <a href={`mailto:${specialist.email}`}>{specialist.email}</a></p>
              <p>Telefone: <a href={`tel:${specialist.phone}`}>{specialist.phone}</a></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ContactSpecialists;

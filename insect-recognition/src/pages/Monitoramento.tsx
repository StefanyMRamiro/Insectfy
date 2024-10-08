import { PureComponent, ChangeEvent, FormEvent } from 'react';

interface PopulationData {
  id: number;
  date: string;
  area: string;
  density: number;
}

interface State {
  date: string;
  area: string;
  density: number;
  populationData: PopulationData[];
}

export class Monitoramento extends PureComponent<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      date: '',
      area: '',
      density: 0,
      populationData: this.loadPopulationData() // Carregar dados salvos
    };
  }

  loadPopulationData = (): PopulationData[] => {
    const savedData = localStorage.getItem('populationData');
    if (savedData) {
      return JSON.parse(savedData);
    }
    return [];
  };

  savePopulationData = (data: PopulationData[]) => {
    localStorage.setItem('populationData', JSON.stringify(data));
  };

  handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const { date, area, density, populationData } = this.state;
    const newEntry: PopulationData = {
      id: populationData.length + 1,
      date,
      area,
      density
    };
    const updatedData = [...populationData, newEntry];
    this.setState({
      populationData: updatedData,
      date: '',
      area: '',
      density: 0
    });
    this.savePopulationData(updatedData); // Salvar dados atualizados
  };

  handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  render() {
    const { date, area, density, populationData } = this.state;

    return (
      <div className="p-4">
        <h1 className="text-xl mb-4">Monitoramento de População de Pragas</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="block mb-2 text-sm">Data</label>
          <input 
            type="date" 
            name="date" 
            value={date} 
            onChange={this.handleChange} 
            className="border rounded p-2 w-full mb-4"
            required
          />

          <label className="block mb-2 text-sm">Área</label>
          <input 
            type="text" 
            name="area" 
            value={area} 
            onChange={this.handleChange} 
            className="border rounded p-2 w-full mb-4"
            placeholder="Área"
            required
          />

          <label className="block mb-2 text-sm">Densidade de Pragas</label>
          <input 
            type="number" 
            name="density" 
            value={density} 
            onChange={this.handleChange} 
            className="border rounded p-2 w-full mb-4"
            placeholder="Densidade"
            required
          />

          <button type="submit" className="bg-amber-800 text-white p-2 rounded">
            Adicionar Registro
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-lg mb-2">Registros de Monitoramento</h2>
          <ul>
            {populationData.map((entry) => (
              <li key={entry.id} className="border p-2 mb-2">
                <strong>{entry.date}</strong> - Área: {entry.area} - Densidade: {entry.density}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Monitoramento;

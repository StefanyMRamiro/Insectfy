import { PureComponent, ChangeEvent, FormEvent } from 'react';

interface Entry {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface State {
  title: string;
  description: string;
  date: string;
  entries: Entry[];
}

export class Diario extends PureComponent<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      entries: this.loadEntries() // Carregar entradas do Local Storage
    };
  }

  loadEntries = (): Entry[] => {
    const savedEntries = localStorage.getItem('diaryEntries');
    if (savedEntries) {
      return JSON.parse(savedEntries);
    }
    return [];
  };

  saveEntries = (entries: Entry[]) => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  };

  handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const { title, description, date, entries } = this.state;
    const newEntry: Entry = {
      id: entries.length + 1,
      title,
      description,
      date
    };
    const updatedEntries = [...entries, newEntry];
    this.setState({
      entries: updatedEntries,
      title: '',
      description: '',
      date: ''
    });
    this.saveEntries(updatedEntries); // Salvar entradas atualizadas
  };

  handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  render() {
    const { title, description, date, entries } = this.state;

    return (
      <div className="p-4">
        <h1 className="text-xl mb-4 text-center">Diário de Campo</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="block mb-2 text-sm">Título</label>
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={this.handleChange} 
            className="border rounded p-2 w-full mb-4"
            placeholder="Título do registro"
            required
          />

          <label className="block mb-2 text-sm">Descrição</label>
          <textarea 
            name="description" 
            value={description} 
            onChange={this.handleChange} 
            className="border rounded p-2 w-full mb-4" 
            placeholder="Descreva a observação"
            required
          />

          <label className="block mb-2 text-sm">Data</label>
          <input 
            type="date" 
            name="date" 
            value={date} 
            onChange={this.handleChange} 
            className="border rounded p-2 w-full mb-4"
            required
          />

          <button type="submit" className="bg-amber-900 text-white p-2 rounded">
            Adicionar Registro
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-lg mb-2">Registros Anteriores</h2>
          <ul>
            {entries.map((entry) => (
              <li key={entry.id} className="border p-2 mb-2">
                <strong>{entry.title}</strong> - {entry.date}
                <p>{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Diario;

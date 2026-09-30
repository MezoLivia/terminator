import SearchBox from '.components/SearchBox'
import TerminatorList from './components/TerminatorList'
import { models } from './components/models'
import { useState } from 'react'

function App() {
  const [state, setState] = useState({ models: models, searchField:
     ''})

  const onSearchChange = (event) => {
    setState({ ...state, searchField: event.target.value})
    const filteredModels = models.filter(model => model.name.toLoweCase().includes(state.searchField.toLowerCase()))
    console.log(filteredModels)
  }
  return {
    <div className="tc">
    <h1>Terminátor Modellek</h1>
    <SearchBox searchChange={onSearchChange}/>
    <TerminatorList models={state.models}/>
    </div>
  }
}
export default App
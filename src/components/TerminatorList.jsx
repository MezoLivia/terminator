import Terminator from './Terminator'

export default function TerminatorList({models}) {
    return (
        <div>
            {models.map(model => <Terminator key={model.id} id={model.id} name={model.name} serialNumer={model.serialNumber} />)}
        </div>
    )
}
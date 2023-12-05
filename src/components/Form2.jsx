import { useState } from 'react';

const Form2 = () => {

    const [lista, setLista] = useState([])

    const [saluto, setSaluto] = useState('');
    const [newInvitato, setNewInvitato] = useState('');

    return (

        <div>

            <input type="text"
                value={newInvitato}
                onChange={(e) => setNewInvitato(e.target.value)} />

            <button
                onClick={() => {
                    setLista([
                        ...lista,
                        newInvitato
                    ]);
                    setNewInvitato('')
                }}
            >Aggiungi invitato</button>
            <ul>

                {lista.map((elem, i) => {
                    return (
                        <div key={`div${i}`}>

                            <li key={i}>{elem}</li>

                            <button key={`elimina${i}`}
                                onClick={() => {
                                    const newLista = [...lista];
                                    newLista.splice(i, 1);
                                    setLista(newLista);
                                }} >Elimina</button>

                            <button key={`saluta${i}`}
                                onClick={() => {
                                    setSaluto(`Benvenuto ${elem}`)
                                }}
                            >Saluta!</button>

                        </div>

                    )
                })}
            </ul>

            <p>{saluto}</p>

        </div>
    )
}

export default Form2;
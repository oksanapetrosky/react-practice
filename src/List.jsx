import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function List(){
    const chemists = people.filter(person => 
        person.profession === 'chemist'
    );
    const everyoneElse = people.filter(person => 
        person.profession !== 'chemist'
    );

    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
           <ul>
            {chemists.map(person => 
                <li>
                     <img
                        src={getImageUrl(person)}
                        alt={person.name} />
                        <p>
                            <b>{person.name}</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                </li>
            )}
           </ul>
            <h2>Everyone else</h2>
           <ul>
            {everyoneElse.map(person => 
                <li>
                     <img
                        src={getImageUrl(person)}
                        alt={person.name} />
                        <p>
                            <b>{person.name}</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                </li>
            )}
           </ul>
        </article>
    )
}

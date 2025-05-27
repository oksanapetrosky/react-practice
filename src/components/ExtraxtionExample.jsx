// In this solution, the Profile component accepts multiple props: imageId (a string), 
// name (a string), profession (a string), awards (an array of strings), discovery (a string), and imageSize (a number).

// Note that the imageSize prop has a default value, which is why we don’t pass it to the component.

import { getImageUrl } from './utils.js'

function Profile({
    name, imageId, profession, awards, discovery, imageSize = 70

}){
    return (
 <section className='profile'>
    <h2>{name}</h2>
    <img 
    className='avatar'
    src={getImageUrl(imageId)} alt={name} width={imageSize} height={imageSize}/>
    <ul>
        <li>
            <b>Profession: </b>{profession}</li>
        <li><b>Awards: </b>{awards.length}
        ({awards.join(', ')})
        </li>
        <li><b>Discovered: </b>{discovery}</li>
    </ul>
 </section>
    )
}

export default function Gallery() {
    return (
        <div>
<h1>Notable Scientists</h1>
 <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
        </div>
    )
}
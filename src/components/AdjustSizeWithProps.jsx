// Challenge 2 of 3: Adjust the image size based on a prop 
//In this example, Avatar receives a numeric size prop which determines the <img> width and height. 
// The size prop is set to 40 in this example. However, if you open the image in a new tab, 
// you’ll notice that the image itself is larger (160 pixels). The real image size is determined by which thumbnail size you’re requesting.

//Change the Avatar component to request the closest image size based on the size prop. 
// Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. 
// Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.

import { getImageUrl } from "../utils";

function Avatar({ person, size }) {
    let thumbnail = 's'
    if (size > 90) {
        thumbnail = 'b'
    }

    return (
        <img
            className="avatar"
            src={getImageUrl(person, thumbnail)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}
export default function Gallery() {
    return (
        <section>
            <Avatar
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />

            <Avatar size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }} />
        </section>
    )
}

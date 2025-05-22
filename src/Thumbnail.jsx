import { getImageUrl } from "./utils";
import './App.css'

function Avatar({ person, size, className }) {
    let thumbnailSize = 's';
    if (size > 90) {
        thumbnailSize = 'b'
    }
    return (
        <img
            className={className}
            src={getImageUrl(person, thumbnailSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default function NewProfile() {
    return (
        <>
            <Avatar className="img"
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar className="img"
                size={70}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar className="img"
                size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
        </>
    )
}
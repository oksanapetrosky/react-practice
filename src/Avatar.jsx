
import React from 'react';
import { getImageUrl } from './utils.js';


function Avatar({ person, size }) {
  
    return (
        <div>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </div>
    )
}

function Card({ children }){
    return (
        <div>
            {children}
        </div>
    )
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }} />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }} />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }} />
        </Card>
    )
}


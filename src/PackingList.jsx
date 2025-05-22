function Item({ name, isPacked, importance }) {
    return (
    <li className="item">
       {name} 
      {importance > 0 && ''}
      {importance > 0 && 
      <i>(importance: {importance})</i>}
    </li>
    )
}

    export default function PackingList() {
        return (
                <section>
                    <h1>Oksana Petrosky's Packing List</h1>
                    <ul>
                        <Item 
                            name="pants" 
                             importance={9} />
                        <Item 
                        importance={0} 
                            name="dress" />
                        <Item 
                        importance={6} 
                            name="wallet" />
                    </ul>
                </section>
        )
    }
const list = [
    {
        name: 'rent1',
        squareFeet: 300,
        id: 1,
        isSold: true
    },
    'rent1',
    'rent2',
    'rent3'
]

function RentList() {
    return(
        <ul>
            {list.map((rent, index) => {
                <li key={`${rent}-${index}`}>{ rent }</li>
            })}
        </ul>
    )
}

export default RentList


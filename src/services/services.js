import data from '../assets/data.json'

function getData(){
    console.log(data)
    return data
}

function getHouseData(id){
    return data.find((logement) =>{
        return logement.id == id
    })
}

export {getData, getHouseData}



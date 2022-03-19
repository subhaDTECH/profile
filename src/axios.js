import Axios from "axios"

const instance=Axios.create({
    baseURL:"https://suva-dtech11.herokuapp.com"
})


export default instance;
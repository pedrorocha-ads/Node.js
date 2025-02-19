import { randomUUID } from "crypto"
export { databaseMemory }

class databaseMemory{
    #videos = new Map()
    list(){ //retornarna todos os videos 
        this.#videos.values()
    }
    create(video){ //criar o video
        const videoId = randomUUID() //Id unico e universal
        this.#videos.set(videoId, video)
    }
    update(id,video){ //atualizar o video
        this.#videos.set(id, video)
    }
    delete(id){ //deletar o video, apenas o id, pois não precisa de informações do video, apenas o id
        this.#videos.set(id)
    }
}
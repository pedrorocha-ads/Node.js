import { randomUUID } from "node:crypto"

export class databaseMemory{
    #videos = new Map()
    list(){ //retornarna todos os videos 
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
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
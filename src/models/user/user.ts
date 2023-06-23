export class User {
    id: number | undefined 
    nom: string | undefined
    prenom: string | undefined
    role: string | undefined
    email: string | undefined 

    constructor(){
        this.id = 0,
        this.nom = "",
        this.prenom = "",
        this.role = "",
        this.email = ""
    }


    loadfromjson(jsonelement: any){
        Object.assign(this, jsonelement)
    }




}

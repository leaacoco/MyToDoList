export class Task {
    id: number | undefined;
    nom: string | undefined;
    commentaire: string | undefined;
    status: string | undefined;
  
    constructor(id: number, nom: string, commentaire: string, status: string) {
      this.id = id;
      this.nom = nom;
      this.commentaire = commentaire;
      this.status = status;
    }
  
    loadFromJson(jsonelement: any) {
      this.id = jsonelement.id;
      this.nom = jsonelement.nom;
      this.commentaire = jsonelement.commentaire;
      this.status = jsonelement.status;
    }
  }
  
export class User {
  id: number | undefined;
  nom: string | undefined;
  prenom: string | undefined;
  role: string | undefined;
  email: string | undefined;
  password: string | undefined;
  taches: Task[] | undefined;

  constructor() {
    this.id = 0;
    this.nom = '';
    this.prenom = '';
    this.role = '';
    this.email = '';
    this.password = '';
    this.taches = [];
  }

  loadFromJson(jsonelement: any) {
    this.id = jsonelement.id;
    this.nom = jsonelement.nom;
    this.prenom = jsonelement.prenom;
    this.role = jsonelement.role;
    this.email = jsonelement.email;
    this.password = jsonelement.password;

    if (jsonelement.taches && Array.isArray(jsonelement.taches)) {
      this.taches = jsonelement.taches.map((taskJson: any) => {
        const task = new Task();
        task.id = taskJson.id;
        task.nom = taskJson.nom;
        task.commentaire = taskJson.commentaire;
        task.status = taskJson.status;
        return task;
      });
    }
  }
}

export class Task {
  id: number | undefined;
  nom: string | undefined;
  commentaire: string | undefined;
  status: string | undefined;
}

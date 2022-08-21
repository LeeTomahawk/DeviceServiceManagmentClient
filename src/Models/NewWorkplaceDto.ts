interface NewWokrplace {
  identifier: string;
}
export class NewWorkplaceDto {
  constructor(formRegister: NewWokrplace) {
    this.identifier = formRegister.identifier;
  }
  identifier: string;
}

interface UpdateWorkplace {
  id: string;
  identifier: string;
}
export class UpdateWorkplaceDto {
  constructor(formRegister: UpdateWorkplace) {
    this.id = formRegister.id;
    this.identifier = formRegister.identifier;
  }
  id: string;
  identifier: string;
}

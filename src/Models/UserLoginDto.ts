import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

interface FormValues {
  email: string;
  password: string;
}

export class UserLoginDto {
  constructor(formLogin: FormValues) {
    this.email = formLogin.email;
    this.password = formLogin.password;
  }
  email: string;
  password: string;
}

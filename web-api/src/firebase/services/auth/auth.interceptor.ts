import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request } from 'express';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    @Inject(FirebaseService) private readonly firebaseService: FirebaseService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();
    let auth = { isAuthorized: true };

    if (request.method !== 'GET') {
      this.firebaseService.validate(request, auth);
    }

    return next.handle().pipe(
      map((data: any) => {
        if (!auth.isAuthorized) {
          throw new UnauthorizedException();
        } else {
          return data;
        }
      }),
    );
  }
}

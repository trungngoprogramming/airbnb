import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { setCurrentUser } from "../utils/auth.util";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(_err: any, user: any, _info: any, _ctx: ExecutionContext) {
    setCurrentUser(user);

    return user;
  }
}

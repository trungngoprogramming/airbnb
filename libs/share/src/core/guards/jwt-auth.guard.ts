import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ClsServiceManager } from "nestjs-cls";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(_err: any, user: any, _info: any, _ctx: ExecutionContext) {
    if (!user) throw new UnauthorizedException();

    ClsServiceManager.getClsService()?.set('currentUser', user);

    return user;
  }
}

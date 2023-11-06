import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      //   jwtFromRequest: (req) => {
      //     // accessToken
      //     const temp = req.headers.Authorization; // Bearer asdasdghhsad
      //     const accessToken = temp.toLowercase().replace('nearer ', '');
      //     return accessToken;
      //   },

      // d.ts는 C++의 헤더파일 같은 것.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '나의비밀번호',
    });
  }

  validate(payload) {
    console.log(payload);

    return {
      id: payload.sub,
    };
  }
}

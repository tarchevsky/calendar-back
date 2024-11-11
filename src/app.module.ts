import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { EmailModule } from './email/email.module'
import { AuthModule } from './auth/auth.module'
import { SettingsModule } from './settings/settings.module'
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    MediaModule,
    EmailModule,
    SettingsModule,
  ],
})
export class AppModule {}
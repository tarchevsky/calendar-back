import { Module } from '@nestjs/common'
import { EmailService } from './email.service'
import { MailerModule } from '@nestjs-modules/mailer'
import { getMailerConfig } from '../config/mailer.config'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getMailerConfig,
      inject: [ConfigService],
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
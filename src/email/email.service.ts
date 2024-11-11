import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail(to: string, subject: string, html: string) {
    return this.mailerService.sendMail({
      to,
      subject,
      html,
    })
  }

  sendWelcome(to: string) {
    return this.sendEmail(to, 'Спасибо за регистрацию!', '<p>Спасибо!</p>')
  }
}
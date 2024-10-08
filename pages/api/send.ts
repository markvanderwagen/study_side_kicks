import * as sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const data = JSON.parse(req.body);
    const { emailAddress, firstName, lastName, text, phone } = data;

    const msg = {
        to: 'studysidekicks@gmail.com',
        from: { email: 'markvanderwagen+site@gmail.com' },
        subject: 'Study Sidekicks: ' + firstName + ' ' + lastName + ' has sent you a message',
        text: text,
        html: `
  <div>
    <p>Message: ${text}</p>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Email them back: ${emailAddress}</p>
    <p>Phone them: <a href="tel:${phone}">${phone}</a></p>
  </div>
`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ status: 'Email sent' });
        console.log('Email Sent');
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'Email not sent',
            error: error.toString(),
        });
    }
}

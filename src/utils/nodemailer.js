import nodemailer from "nodemailer"
import { google } from "googleapis"

const email = process.env.GMAIL
const CLIENT_ID = process.env.OAUTH_CLIENT_ID
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET
const REDIRECT_URI = process.env.OAUTH_REDIRECT_URI
const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN

const oauth2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)
// eslint-disable-next-line camelcase
oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN })

export const sendMail = async ({ subject, html, text }) => {
  try {
    const accessToken = await oauth2client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: email,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: email,
      to: email,
      subject,
      text,
      html
    }

    const result = await transporter.sendMail(mailOptions)
    return result
  } catch (e) {
    return e
  }
}

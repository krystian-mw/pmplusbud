import formidable from "formidable";
import { readFileSync } from "fs";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const data = await new Promise(function (resolve, reject) {
      const form = new formidable.IncomingForm({ keepExtensions: true });
      form.parse(req, function (err, fields, files) {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const {
      Name: name,
      Email: email,
      Number: number,
      Message: message,
    } = data.fields;

    const templateId = "d-4b7fde2b56364e2c966a09201bc3a022";

    let msg = {
      to: "kontakt@pmplusbud.pl",
      from: "krystian@mwebdev.co.uk",
      replyTo: email,
      templateId,
      dynamicTemplateData: {
        name,
        email,
        number,
        message,
      },
      attachments: [],
    };

    const filesArr = Object.keys(data.files);

    for (let index = 0; index < filesArr.length; index++) {
      const file = filesArr[index];
      const fileToSend = data.files[file];
      const content = readFileSync(fileToSend.path).toString("base64");
      msg.attachments.push({
        content,
        filename: fileToSend.name,
        type: fileToSend.type,
        disposition: "attachment",
        contentId: file,
      });
    }

    await sgMail.send(msg);
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.json({ success: false, e: JSON.stringify(e) });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
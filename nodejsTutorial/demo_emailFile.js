var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maihoanghai6789@gmail.com',
        pass: 'yourpass'
    }
});

var mailOptions = {
    from: 'maihoanghai6789@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(err, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: ' + info.response)
    }
})
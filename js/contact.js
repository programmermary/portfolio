const form = document.querySelector('form')

function SendEmail(){
        Email.send({
            Host: "smtp.gmail.com",
            Username: "name",
            To: 'emanaliali601@gmail.com',
            From: "maryamihsan601@gmail.com",
            Body: "Well that was easy!!",
        })
            .then(function (message) {
                alert("mail sent successfully")
            });
    }
// service id : service_bt9edf5


// function SendEmail(){
//  emailjs.send('serviceId' , 'tempId' ,{
//     to:'emanaliali601@gmail.com',
//     form:'maryamihsan601@gmail.com',
//     message: message
//  }).then(
//     function(res){
//         alert("email has send " , res)
//     }
//  ).catch(function(error){
//     alert("error sending email" , error)
//  })

//     (function(){
//         emailjs.init("BOGqi68qRAy8Jh3T7")
//     })();

//     var params={
//         name : document.querySelector("#name").value,
//         email : document.querySelector("#email"),
//         message :document.querySelector("message")
//     }
//   var serviceId ="service_6yitdiv"
//   var tempId = "template_2bqhty5"

//   emailjs.send('serviceId' , 'tempId' , params)
//   .then(res => {
//     alert("email sent successfuly ");
//   })


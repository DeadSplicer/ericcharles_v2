// $(document).ready(function() {
//   $('#contact-form').submit(function(e) {
//     var name    = document.getElementById('inputName')
//     var email   = document.getElementById('inputEmail')
//     var message = document.getElementById('inputMessage')
//
//     if (!message.value) {
//       alertify.error("Please add a message in the comment block before submitting.");
//       return false;
//     } else {
//       $.ajax({
//         method: 'POST',
//         url: '//formspree.io/zombieishungry@yahoo.com',
//         data: $('#contact-form').serialize(),
//         datatype: 'json'
//       });
//       e.preventDefault();
//       $(this).get(0).reset();
//       alertify.success("Message sent");
//     }
//   });
// });

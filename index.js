document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  emailjs.sendForm('service_vmk2xnm', 'template_taotdtt', this)
    .then(function() {
      alert('✅ Email sent successfully!');
    }, function(error) {
      alert('❌ Failed to send email: ' + JSON.stringify(error));
    });
});



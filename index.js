document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  emailjs.sendForm('service_vmk2xnm', 'template_taotdtt', this)
    .then(function() {
      alert('✅ Email sent successfully!');
    }, function(error) {
      alert('❌ Failed to send email: ' + JSON.stringify(error));
    });
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      console.log(entry.target)
      entry.target.classList.add("show");
    }else{
      entry.target.classList.remove("show");
    }
  })
},{})
const toaniElements = document.querySelectorAll(".toani")
toaniElements.forEach(el=> observer.observe(el))


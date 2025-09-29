document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
 
  
  
  emailjs.sendForm('service_vmk2xnm', 'template_taotdtt', this)
    .then(function() {
      alert('✅ Email sent successfully!');
    }, function(error) {
      alert('❌ Failed to send email: ' + JSON.stringify(error));
    });
   this.reset();

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

var typed = new Typed("#typing", {
  strings: ["Aspiring Web Developer" ,"JavaScript Enthusiast", "Problem Solver" ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;


if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

function SendMail() {
  const btn = document.getElementById('contact-button');
  var params = {
    from_name: document.getElementById('from_name').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value
  }

  btn.textContent = 'Invio...';

  emailjs.send("service_xuedyc4", "template_xf8omcr", params).then(() => {
    btn.textContent = 'Invia Email';
    alert('Richiesta avvenuta, email inviata!');
  }, (err) => {
    btn.textContent = 'Invia Email';
    alert('Errore di sistema: \n' + JSON.stringify(err));
  });
}
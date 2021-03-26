const form = {
  name: document.querySelector("#elem-name"),
  email: document.querySelector("#elem-email"),
  subject: document.querySelector("#elem-subject"),
  message: document.querySelector("#elem-message"),
}

for (let elem of Object.values(form)) {
  elem.addEventListener('input', () => {
    if(elem.parentNode.classList.contains("field-invalid")){
      elem.parentNode.classList.remove("field-invalid")
    }
  });
}

function validate() {
  let result = true;
  if(!/^[a-zA-Z\s]*$/.test(form.name.value)){
    if(!form.name.parentNode.classList.contains("field-invalid")){
      form.name.parentNode.classList.add("field-invalid")
    }
    result = false;
  }
  if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(form.email.value)){
    if(!form.email.parentNode.classList.contains("field-invalid")){
      form.email.parentNode.classList.add("field-invalid")
    }
    result = false;
  }
  if(!/^[a-zA-Z\s]*$/.test(form.subject.value)){
    if(!form.subject.parentNode.classList.contains("field-invalid")){
      form.subject.parentNode.classList.add("field-invalid")
    }
    result = false;
  }
  //if(result===true) document.querySelector("form").submit()
  return result;
}
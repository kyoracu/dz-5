
function checkForm(form)
        {
          if(form.username.value == "") {
            alert("Ошибка: имя пользователя не может быть пустым!");
            form.username.focus();
            return false;
          }
          re = /^\w+$/;
          if(!re.test(form.username.value)) {
            alert("Ошибка: имя пользователя должно содержать только буквы, цифры и символы подчеркивания!");
            form.username.focus();
            return false;
          }
      
          if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
            if(form.pwd1.value.length < 6) {
              alert("Ошибка: пароль должен содержать не менее шести символов!");
              form.pwd1.focus();
              return false;
            }
            if(form.pwd1.value == form.username.value) {
              alert("Ошибка: пароль должен отличаться от имени пользователя!");
              form.pwd1.focus();
              return false;
            }
            re = /[0-9]/;
            if(!re.test(form.pwd1.value)) {
              alert("Ошибка: пароль должен содержать хотя бы одну цифру (0-9)!");
              form.pwd1.focus();
              return false;
            }
            re = /[a-z]/;
            if(!re.test(form.pwd1.value)) {
              alert("Ошибка: пароль должен содержать хотя бы одну строчную букву (a-z)!");
              form.pwd1.focus();
              return false;
            }
            re = /[A-Z]/;
            if(!re.test(form.pwd1.value)) {
              alert("Ошибка: пароль должен содержать хотя бы одну заглавную букву (A-Z)!");
              form.pwd1.focus();
              return false;
            }
          } else {
            alert("Ошибка: Пожалуйста, убедитесь, что вы ввели и подтвердили свой пароль!");
            form.pwd1.focus();
            return false;
          }
      
          alert("Вы ввели правильный пароль: " + form.pwd1.value);
          return true;
        }

let btnId = document.getElementById('btnId');

btnId.addEventListener('click', () => {
  btnId.style.visibility = 'hidden';
});
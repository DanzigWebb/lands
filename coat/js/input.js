var input = document.querySelector('input[name="name"]');
input.addEventListener('input', function () {
  input.value = input.value.replace(/[0-9]/g, '');
});

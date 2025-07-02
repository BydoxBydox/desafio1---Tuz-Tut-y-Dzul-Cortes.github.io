const form = document.getElementById("ticketForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const github = document.getElementById("github").value;
  const avatar = document.getElementById("avatar").files[0];

  if (!name || !email || !github || !avatar) {
    alert("Complete all fields.");
    return;
  }
  if (avatar.size > 500000) {
    alert("Avatar too big (max 500KB)");
    return;
  }

  document.getElementById("formSection").style.display = "none";
  document.getElementById("ticketSection").classList.remove("hidden");

  document.getElementById("ticketName").textContent = name;
  document.getElementById("ticketEmail").textContent = email;
  document.getElementById("ticketName2").textContent = name;
  document.getElementById("ticketGithub").textContent = github;

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("ticketAvatar").src = e.target.result;
  };
  reader.readAsDataURL(avatar);
});
//Juan Carlos Tuz Tut
//Daniel Cortes Cervera
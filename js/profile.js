const profiles = document.querySelectorAll('.perfil');

function navTrocarPerfil(){
    this.classList.toggle('trocarPerfil');
    $("#troca-profile").removeAttr("hidden");
}
profiles.forEach((profile) => {
    profile.addEventListener('click', navTrocarPerfil);
});









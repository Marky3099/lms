/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function showPassword(){
    var frm = document.getElementById('frmPassword');
    var txtHolder = document.getElementById('showPassIcon');

    if(frm.type === "password"){
       frm.type = "text";
       txtHolder.className = "fas fa-eye-slash";
    }else{
       frm.type = "password";
       txtHolder.className = "fas fa-eye";
    }
 }
 $('.your-checkbox').prop('indeterminate', true)

 function validateNumber(e) {
    const pattern = /^[0-9]$/;

    return pattern.test(e.key )
 }

function showConfirmPassword(){
    var frm = document.getElementById('formPassword');
    var txtHolder = document.getElementById('showPassIcon');

    if(frm.type === "password"){
    frm.type = "text";
    txtHolder.className = "fas fa-eye-slash";
    }else{
    frm.type = "password";
    txtHolder.className = "fas fa-eye";
    }
}
$('.your-checkbox').prop('indeterminate', true)


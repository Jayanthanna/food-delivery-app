var g=1;
window.onscroll = function() {myFunction()};
//  scroll function for sticky tag in html page
function myFunction()
{
    if(window.pageYOffset>=500)
    {
        document.getElementById("sticky").style.display='flex';
    }
    else{
        document.getElementById("sticky").style.display='none';
    }
}
//opens sidenav signup
function open_sidenav_signin()
{
    document.getElementById("sidenav-signin").style.width = "550px";
    document.getElementById("sidenav-login").style.width = "0px";
    document.getElementById("overlay").style.opacity = "0.3";
}
//closes sidenav signup
function close_sidenav_signin()
{
    document.getElementById("sidenav-signin").style.width = "0";
    document.getElementById("overlay").style.opacity = "1";
}
//opens sidenav login
function open_sidenav_login()
{
    document.getElementById("sidenav-login").style.width = "550px";
    document.getElementById("sidenav-signin").style.width = "0px";
    document.getElementById("overlay").style.opacity = "0.3";
}
//closes sidenav login
function close_sidenav_login()
{
    document.getElementById("sidenav-login").style.width = "0";
    document.getElementById("overlay").style.opacity = "1";
}
//shows password when presses show and hides when pressed hide
function show_password()
{
    if(g%2==1)
    {
        document.getElementById("signin_pass").type = "text";
        document.getElementById("login_pass").type="text";
        document.getElementById("signin_pass_show").innerHTML = "Hide";
        document.getElementById("login_pass_show").innerHTML = "Hide";
        g=2;
    }
    else
    {
        document.getElementById("signin_pass").type = "password";
        document.getElementById("login_pass").type="password";
        document.getElementById("signin_pass_show").innerHTML = "Show";
        document.getElementById("login_pass_show").innerHTML = "Show";
        g=1;
    }
    
}
function locateUser()
{
    navigator.geolocation.getCurrentPosition(showPosition); 
}
function showPosition(position)
{
    var inp=document.getElementById("image-location-input");
    var inps=document.getElementById("image-location-input-sticky");
    var lat= position.coords.latitude;
    var long=position.coords.longitude;
    let url= "https://nominatim.openstreetmap.org/reverse?lat="+lat+"&lon="+long+"&format=json";
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        inp.value=(data.address.road+","+data.address.city+","+data.address.postcode+","+data.address.country);
        inps.value=(data.address.road+","+data.address.city+","+data.address.postcode+","+data.address.country);
        localStorage.setItem("city",data.address.city);
        window.setTimeout(1000,order());
        })
    .catch(err=>locationError());
}
function order()
{
    window.open("food.html","_self");
}
function locationError()
{
    var inp=document.getElementById("image-location-input");
    var inps=document.getElementById("image-location-input-sticky");
    inp.placeholder="Sorry we could not get your location!";
    inps.placeholder="Sorry we could not get your location!";
    
}
function signin()
{
    var error=document.getElementById("signin_error");
    var phone= document.getElementById("signin_phone").value;
    var pass= document.getElementById("signin_pass").value;
    var cpass= document.getElementById("signin_cpass").value;
    if(phone.length!=10)
    {
        error.innerHTML="Incorrect phone number!";
        error.style.display="block";
    }
    else if(pass!=cpass)
    {
        error.innerHTML="Passwords does not match!";
        error.style.display="block";
    }
    else{
        window.open("food.html","_self");
        //!!!!here server side scripting
    }
}
function login()
{
    
}
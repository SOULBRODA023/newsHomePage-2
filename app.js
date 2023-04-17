function MobileMenu() {
    if(document.getElementById('navbard').style.right == '100%'){
        document.getElementById('navbard').style.right = '0' 
         document.getElementById('body').style.backgroundColor = "rgba(0,0,0,0.3)"
    }else{
        document.getElementById('navbard').style.right = '100%'
    }
    document.getElementById('navbard').style.zIndex = "1"
}
document.getElementById('image').addEventListener('click', MobileMenu)



function CloseMenu(){
document.getElementById('navbard').style.right= '100%'
document.getElementById('body').style.backgroundColor = "rgba(0,0,0,0)"

}
document.getElementById('close').addEventListener('click', CloseMenu)
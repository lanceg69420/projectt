function toggleMenu(){
    var menuToggle = document.querySelector('.kontingjslangsirhehe');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    }
 
    var icon = document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark-mud");
        if(document.body.classList.contains("dark-mud")){
            icon.src = "sun.png";
        }else {
            icon.src = "moon.png";
        }
    }

    
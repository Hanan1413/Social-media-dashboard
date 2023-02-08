

// const toggleBtn = document.getElementById("toggle-btn")
const ChangeColor =  document.getElementById("ChangeColor")
const smallCards = document.querySelectorAll('div.small-card')
const textElements = document.querySelectorAll('p.overview-num');
const bigTextElemnts = document.querySelectorAll('h2.number');
const  title = document.querySelectorAll("h3.title")
const bigCards = document.querySelectorAll("div.card")


// on button click call colorBackground function 
ChangeColor.onclick = function(){
   colorBackground()
}


      // A function to change background form light to dark and vice versa
const lightToDarkbg = (elemntColor) =>{
            if(elemntColor.classList.contains('light-mode')){
        
        //    if element contains class  light-mode and add dark-mode 
             elemntColor.classList.remove('light-mode');
            elemntColor.classList.add('dark-mode');
            }
        //  if element contains class  dark-mode  remove it and add  light-mode 

          else{
             elemntColor.classList.remove('dark-mode');
            elemntColor.classList.add('light-mode');

          }

          return elemntColor

    }

    // A function to change text from dark to light
const darkToLightText = (text) =>{

   if(text.classList.contains('light-text')){
        
       text.classList.remove('light-text');

   }else{

       text.classList.add('light-text');
          
      
        }

}

//  A function to change bakground color when button click
function colorBackground() { 
     let color = document.body.style.background;
     if(document.body.classList.contains('back-ground')){
        
        document.body.classList.remove('back-ground');
    }else{
        document.body.classList.add('back-ground');

    }




   

  // darkToLightText(title)


   
// Change background color of lower social media cards 

      
smallCards.forEach(element => {
        

          lightToDarkbg(element)  
      
        })
          


textElements.forEach(textColor => {
            
        darkToLightText(textColor)



      })
bigTextElemnts.forEach(textColor => {
            
        darkToLightText(textColor)



      })    

  

 bigCards.forEach(elem => {
                lightToDarkbg(elem)

        })


title.forEach(title => {
darkToLightText(title)

        })


      }



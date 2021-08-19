// Toggle home page banner 
let banner1 = document.querySelector('#banner-svg');
console.log(banner1);
let banner2 = document.querySelector('#about');
console.log(banner2);
let banner3 = document.querySelector('#banner-photo');
console.log(banner3);
banner2.classList.add('hide');
banner3.classList.add('hide');


if (document.querySelector('input[name="banner-select"]')) {
    document.querySelectorAll('input[name="banner-select"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {

        banner2.classList.remove('hide');
        banner3.classList.remove('hide');
          
          
        var item = event.target.value;
        console.log(item);

    
        switch (item) {
            case 'banner-2':
                banner2.classList.remove('hide');
                
         
                banner1.classList.add('hide');
               
                banner3.classList.add('hide');
              break;
              case 'banner-3':
                banner3.classList.remove('hide');
  
     
                banner1.classList.add('hide');
             
                banner2.classList.add('hide');
              break;
              case 'banner-1':
                banner1.classList.remove('hide');
         
              
                banner2.classList.add('hide');
           
                banner3.classList.add('hide');
              break;
            default:
                banner1.classList.remove('hide');
         
              
                banner2.classList.add('hide');
           
                banner3.classList.add('hide');
          }
          

        // if (item == 'banner-2') {
        //     banner2.classList.remove('d-none');
        //     banner1.classList.add('d-none');
        //     banner3.classList.add('d-none');
            
        // }


       
    


      });
    });
  } 
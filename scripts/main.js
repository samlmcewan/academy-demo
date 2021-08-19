// Toggle home page banner 
let banner1 = document.querySelector('#banner-svg');
console.log(banner1);
let banner2 = document.querySelector('#about');
console.log(banner2);
let banner3 = document.querySelector('#banner-photo');
console.log(banner3);
banner2.classList.add('d-none');
banner3.classList.add('d-none');

if (document.querySelector('input[name="banner-select"]')) {
    document.querySelectorAll('input[name="banner-select"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
          
        var item = event.target.value;
        console.log(item);


        switch (item) {
            case 'banner-2':
                banner2.classList.remove('d-none');
                banner1.classList.add('d-none');
                banner3.classList.add('d-none');
              break;
              case 'banner-3':
                banner3.classList.remove('d-none');
                banner2.classList.add('d-none');
                banner1.classList.add('d-none');
              break;
            default:
                banner1.classList.remove('d-none');
                banner2.classList.add('d-none');
                banner3.classList.add('d-none');
          }
          

        // if (item == 'banner-2') {
        //     banner2.classList.remove('d-none');
        //     banner1.classList.add('d-none');
        //     banner3.classList.add('d-none');
            
        // }


       
    


      });
    });
  }
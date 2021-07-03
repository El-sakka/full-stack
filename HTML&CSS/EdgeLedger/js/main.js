function initMap() {
  const loc = {lat :30.044420,lng :31.235712 };
  const map = new google.maps.Map(document.querySelector('.map'), {
          center: loc,
          zoom: 8
  });
  const marker = new google.Map.marker({position:loc ,map:map});
}
// Stick Menu Background
window.addEventListener('scroll',function(){
  if(window.scrollY > 150 ){
    document.querySelector('#navbar').style.opacity = 0.9;
  }else{
    document.querySelector('#navbar').style.opacity = 1;
  }
})
// Smooth Scrolling  
$('#navbar a, .btn').on('click',function(event){
  if(this.hash !== ''){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    },800);
  }
});

if(ScriptProcessorNode?.apply)
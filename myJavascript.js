function activate_dark_mode()
{
  var body = document.body;
  var sun = document.getElementById("sun");
  var moon =document.getElementById("moon");

  body.classList.add('bg-less-dark-jason');
  body.classList.add('dark_jason');
sun.classList.add('light_sun_inactive');
  moon.classList.add('dark_moon_active');

  body.classList.remove('bg_light');
  body.classList.remove('light_jason');
  sun.classList.remove('light_sun_active');
    moon.classList.remove('dark_moon_inactive');

}

function activate_light_mode(){
  var body = document.body;
  var sun = document.getElementById("sun");
  var moon =document.getElementById("moon");

  body.classList.remove('bg-less-dark-jason');
  body.classList.remove('dark_jason');
  sun.classList.remove('light_sun_inactive');
    moon.classList.remove('dark_moon_active');

  body.classList.add('bg_light');
  body.classList.add('light_jason');
  sun.classList.add('light_sun_active');
    moon.classList.add('dark_moon_inactive');
}

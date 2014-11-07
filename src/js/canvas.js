window.onload = function() {
   var color;

  var stage = new Kinetic.Stage({
    container: "kinetic",
    width: 900,
    height: 900,
    fill: "white"
  });

  var layer = new Kinetic.Layer();

    for(var i=0;i<datas.length;i++)
    {
        var path = new Kinetic.Path({
        stroke: 'black',
        fill: 'white',
        data: datas[i].path
      });
        path.on("click", function(){
        	this.setFill(color);
        	this.getLayer().draw();
        });
    	layer.add(path);
    }



    for(var i=0;i<maPalette.length;i++)
    {
      var rect = new Kinetic.Rect({
      	x: 240+i*50,
  		y: 40+i*20,
        width: 100,
        height: 50,
        fill: maPalette[i],
        stroke: 'black',
        strokeWidth: 4
      });
            rect.on("click", function(){
        	color = this.fill();
        });
    layer.add(rect);
    }
       
/*var path1 = new Kinetic.Path({
  x: 240,
  y: 40,
  data: "m 3.71875,2.90625 0,181.78125 C 4.7540754,183.80264 5.7672529,182.86878 6.8125,182 c 3.881048,-3.22581 7.851689,-6.33241 11.9375,-9.3125 4.085811,-2.98009 8.289819,-5.83468 12.6875,-8.53125 4.397681,-2.69657 8.995842,-5.24975 13.8125,-7.625 4.816658,-2.37525 9.844758,-4.57762 15.1875,-6.59375 5.342742,-2.01613 10.942603,-3.94834 16.75,-5.71875 5.807397,-1.77041 11.850051,-3.36391 18.09375,-4.75 6.2437,-1.38609 12.6921,-2.54309 19.34375,-3.40625 3.32583,-0.43158 6.7025,-0.78764 10.125,-1.0625 3.4225,-0.27486 6.89063,-0.49294 10.40625,-0.59375 3.51562,-0.10081 7.08229,-0.0906 10.6875,0 3.60521,0.0906 7.24625,0.26323 10.9375,0.5625 3.69125,0.29927 7.41376,0.7247 11.1875,1.25 3.77374,0.5253 7.5848,1.16885 11.4375,1.9375 3.8527,0.76865 7.7594,1.65817 11.6875,2.6875 3.9281,1.02933 7.87503,2.19267 11.875,3.5 3.99997,1.30733 8.05671,2.74108 12.125,4.34375 4.06829,1.60267 8.14819,3.36593 12.28125,5.28125 8.26613,3.83065 16.4615,7.98438 24.59375,12.28125 8.13225,4.29687 16.22908,8.73286 24.3125,13.21875 8.08342,4.48589 16.16161,9.00857 24.28125,13.40625 8.11964,4.39768 16.25907,8.68649 24.5,12.71875 4.12046,2.01613 8.27077,3.97096 12.4375,5.84375 4.16673,1.87279 8.37012,3.64894 12.59375,5.34375 4.22363,1.69481 8.45883,3.29908 12.75,4.78125 4.29117,1.48217 8.63067,2.85887 13,4.09375 4.36933,1.23488 8.76062,2.32831 13.21875,3.28125 4.45813,0.95294 8.9737,1.76991 13.53125,2.40625 4.55755,0.63634 9.17614,1.08991 13.84375,1.375 4.66761,0.28509 9.39919,0.38206 14.1875,0.28125 4.78831,-0.10081 9.48382,-0.32843 14.09375,-0.65625 4.60993,-0.32782 9.13489,-0.75123 13.5625,-1.28125 4.42761,-0.53002 8.75865,-1.16758 13,-1.875 4.24135,-0.70742 8.38634,-1.48375 12.4375,-2.34375 4.05116,-0.86 7.98672,-1.79347 11.84375,-2.78125 3.85703,-0.98778 7.62229,-2.03424 11.28125,-3.125 7.31792,-2.18151 14.24798,-4.52419 20.75,-6.96875 6.50202,-2.44456 12.59539,-4.99086 18.25,-7.5 5.65461,-2.50914 10.88054,-4.99975 15.65625,-7.375 9.55141,-4.7505 17.30948,-9.03831 23.15625,-12.0625 2.92339,-1.5121 6.34318,-3.54492 10.125,-5.9375 3.78182,-2.39258 7.92818,-5.12626 12.21875,-8.09375 8.58115,-5.93498 17.8256,-12.72379 26.34375,-19.125 3.95271,-2.97038 3.72054,-2.9083 7.21875,-5.59375 l 0,-145.375 -636.84375,0 z",
  fill: 'black',
  scale: 2
});*/

/*var path2 = new Kinetic.Path({
  x: 240,
  y: 40,
  data:  "m 151.56392,66.840373 c 6.27272,-5.559912 10.54958,-8.126025 18.96072,-7.69834 8.41115,0.427686 20.52891,8.838835 18.81817,20.386345 -1.71074,11.54751 -11.83263,17.962793 -22.52477,17.67767 -10.69214,-0.285124 -14.99493,-7.888082 -14.69505,-8.997644 0.7128,-2.637394 1.18731,-3.726001 1.72192,-7.682093 -1.28306,9.26652 -4.56198,15.966927 -12.97313,17.535109 -8.41115,1.56818 -17.96279,-1.140496 -15.39668,-14.113625 -1.71074,14.541305 -6.70041,15.396685 -12.54544,17.820235 -5.84504,2.42355 -20.671472,0 -20.671472,-10.121895 C 90.547446,103.33621 79.28506,103.47877 76.291261,103.33621 73.297462,103.19365 60.752019,100.77009 60.609457,92.501506 60.466895,84.232919 69.020606,80.241187 77.431756,81.381682 66.597055,78.387883 66.311931,71.259791 67.02474,67.980868 67.73755,64.701945 74.72308,55.435425 85.415219,58.001538 80.995802,70.40442 87.981333,73.825904 87.981333,73.825904 81.195931,70.734266 84.437407,59.25039 86.9834,55.720549 90.020437,51.509909 101.21067,47.284941 108.36768,55.292863 102.239,46.939281 92.157382,52.382575 92.157382,52.382575 91.016887,45.539606 95.251987,30.914787 111.07635,29.63173 c 15.82437,-1.283057 22.38221,6.985531 23.52271,11.690072 1.14049,4.704541 -2.85124,9.836768 -5.55991,11.832633 7.55577,-5.987597 13.8285,-6.98553 21.09915,-3.278922 7.27065,3.706608 7.98346,11.975195 7.98346,11.975195 -4.74018,3.06508 -6.55784,4.989665 -6.55784,4.989665 z"
  fill: 'black',
  scale: 2
});*/
      stage.add(layer);
//calque.add(forme);
//scene.add(calque);
};
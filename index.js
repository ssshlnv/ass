// 1
// 1 2 3

// 2
// function make(callback) {
//     setTimeout(function() {
//       let res = [1, 2, 3, 4, 5];
//       callback(res); 
//     }, 3000);
//   }
  
//   make(function(res) {
//     console.log(res); 
//     let sum = res.reduce((acc, curr) => acc + curr, 0);
//     console.log("Сумма элементов массива: " + sum);
//   });
  
// 3
// function make(num1, num2, callback) {
//     setTimeout(function() {
//       let arr = [1, 2, 3, 4, 5];
//       let result = arr[num1] + arr[num2];
//       callback(result); 
//     }, 3000);
//   }
  
//   make(1, 3, function(res) {
//     console.log("Сумма элементов массива: " + res); 
//   });
  
// 4
// function loadImage(url, callback) {
//     let image = new Image();
    
//     image.onload = function() {
//       callback(null, image);
//     };
  
//     image.onerror = function() {
//       callback(new Error('Ошибка при загрузке изображения'));
//     };
  
//     image.src = url;
//   }
  
//   loadImage('https://www.example.com/image.jpg', function(error, image) {
//     if (error) {
//       console.error(error.message);
//     } else {
//       console.log('Изображение успешно загружено:', image);
//     }
//   });
  
// 5
loadImage('img1.png', function(image1, err1) {
    if (err1) {
      console.error(err1.message);
    } else {
      document.body.append(image1);
      
      loadImage('img2.png', function(image2, err2) {
        if (err2) {
          console.error(err2.message);
        } else {
          document.body.append(image2);
          
          loadImage('img3.png', function(image3, err3) {
            if (err3) {
              console.error(err3.message);
            } else {
              document.body.append(image3);
              
              loadImage('img4.png', function(image4, err4) {
                if (err4) {
                  console.error(err4.message);
                } else {
                  document.body.append(image4);
                  
                  loadImage('img5.png', function(image5, err5) {
                    if (err5) {
                      console.error(err5.message);
                    } else {
                      document.body.append(image5);
                      
                      loadImage('img6.png', function(image6, err6) {
                        if (err6) {
                          console.error(err6.message);
                        } else {
                          document.body.append(image6);
                          
                          loadImage('img7.png', function(image7, err7) {
                            if (err7) {
                              console.error(err7.message);
                            } else {
                              document.body.append(image7);
                              
                              loadImage('img8.png', function(image8, err8) {
                                if (err8) {
                                  console.error(err8.message);
                                } else {
                                  document.body.append(image8);
                                  
                                  loadImage('img9.png', function(image9, err9) {
                                    if (err9) {
                                      console.error(err9.message);
                                    } else {
                                      document.body.append(image9);
                                      
                                      loadImage('img10.png', function(image10, err10) {
                                        if (err10) {
                                          console.error(err10.message);
                                        } else {
                                          document.body.append(image10);
                                          console.log('Все картинки загружены');
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
  
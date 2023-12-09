const products = [
    { id: "1", name: "Iphone x", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelI9MBFHpR2QNFSrNCxQz7Ib1f2hXGakX0CkvA2pbkXW7ODNSoGIU__llM4yfbfT35-0&usqp=CAU", price: 280, category: "moviles", description: "64gb", stock: 10 },
    { id: "2", name: "Iphone xr", img: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/10/iPhone-XR-01.jpg?fit=1500%2C1000&quality=50&strip=all&ssl=1", price: 320, category: "moviles", description: "128gb", stock: 10 },
    { id: "3", name: "Iphone 11", img: "https://mistercel.com/wp-content/uploads/2020/11/11-1.jpg", price: 370, category: "moviles", description: "128gb", stock: 10 },
    { id: "4", name: "Iphone SE", img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-starlight_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316262818", price: 270, category: "moviles", description: "64gb", stock: 10 },
    { id: "5", name: "Iphone 12", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzv59BluV8ClWygbfc2uR82w2ZbTX8wOECcA&usqp=CAU", price: 410, category: "moviles", description: "256gb", stock: 10 },
    { id: "6", name: "Iphone 12 pro", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0ay5Q96BzYg6gmkmLS0BAuhr9Vd8QfARTw&usqp=CAU", price: 480, category: "moviles", description: "128gb", stock: 10 },
    { id: "7", name: "Playstation 5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VRmsWgDx0tf2UBpLzDO7Z_0_zo8RS2tp1Q&usqp=CAU", price: 850, category: "consola", description: "825gb", stock: 10 },
    { id: "8", name: "Playstation 5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlJSprSh-rCZMYEtXMr1N7bYEGiQlT5c7Yw&usqp=CAU", price: 1000, category: "consola", description: "1tb", stock: 10 },
    { id: "9", name: "Xbox series s", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvRbyeCiy19vSwUjxnMqw--oapxiDsliaJw&usqp=CAU", price: 600, category: "consola", description: "512gb", stock: 10 },
    { id: "10", name: "Xbox series x", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3WSOMPIXsANbyaxztosqaOJ9q0ivB4qucA&usqp=CAU", price: 950, category: "consola", description: "1tb", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };
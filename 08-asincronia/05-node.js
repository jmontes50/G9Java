console.log("Hola mundo desde Node!");

const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar("Jorge"));

const getPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getPosts();
const url = "/api/v1/products";
const fileFormDOM = document.querySelector(".file-form");

const nameInputDOM = document.querySelector("#name");
const priceInputDOM = document.querySelector("#price");
const imageInputDOM = document.querySelector("#image");

const containerDOM = document.querySelector(".container");
let imageValue;

// imageInputDOM.addEventListener('change',(e)=>{
//  const file = e.target.files[0];
//  console.log(file);
// })

/*
->Using this event listener, an image would be taken from the client and uploaded to the server
->The server would then give us back a response using which we can publicly access the image
*/ 
imageInputDOM.addEventListener("change", async (e) => {
  const imageFile = e.target.files[0];
  
  const formData = new FormData();
  formData.append("uploadedImage", imageFile);
  // for (let [key, value] of formData.entries()) {
  //   console.log(key, value);
  // }
  
  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`${url}/uploadImage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    imageValue = src;
  } catch (error) {
    imageValue = null;
    console.log(error);
  }
});

fileFormDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInputDOM.value;
  const priceValue = priceInputDOM.value;
  try {
    const product = { name: nameValue, price: priceValue, imageUrl: imageValue };

    await axios.post(url, product);
    fetchProducts();
  } catch (error) {
    console.log(error);
  }
});

async function fetchProducts() {
  try {
    const {data:{allProducts:products}}= await axios.get(url);
    const productsDOM = products
      .map((product) => {
        return `<article class="product">
<img src="${product.imageUrl}" alt="${product.name}" class="img"/>
<footer>
<p>${product.name}</p>
<span>$${product.price}</span>
</footer>
</article>`;
      })
      .join("");
    containerDOM.innerHTML = productsDOM;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();


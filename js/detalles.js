document.addEventListener("DOMContentLoaded", function () {
    const detalleProductoSection = document.getElementById("detalle-producto-section");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(product => {
            const productDetailContainer = document.createElement("div");
            productDetailContainer.classList.add("producto-detalle");

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;

            const productInfo = document.createElement("div");
            productInfo.classList.add("producto-info");

            const title = document.createElement("h2");
            title.textContent = product.title;

            const description = document.createElement("p");
            description.textContent = product.description;

            const price = document.createElement("p");
            price.classList.add("precio");
            price.textContent = `$${product.price}`;

            const cantidadSelector = document.createElement("div");
            cantidadSelector.classList.add("cantidad-selector");

            const decrementBtn = document.createElement("button");
            decrementBtn.textContent = "-";
            decrementBtn.classList.add("cantidad-btn");
            decrementBtn.addEventListener("click", function () {
                const cantidadInput = document.getElementById("cantidad-input");
                if (cantidadInput.value > 1) {
                    cantidadInput.value = parseInt(cantidadInput.value) - 1;
                }
            });

            const incrementBtn = document.createElement("button");
            incrementBtn.textContent = "+";
            incrementBtn.classList.add("cantidad-btn");
            incrementBtn.addEventListener("click", function () {
                const cantidadInput = document.getElementById("cantidad-input");
                cantidadInput.value = parseInt(cantidadInput.value) + 1;
            });

            const cantidadInput = document.createElement("input");
            cantidadInput.id = "cantidad-input";
            cantidadInput.classList.add("cantidad-input");
            cantidadInput.type = "number";
            cantidadInput.value = 1;
            cantidadInput.min = 1; 

            cantidadSelector.appendChild(decrementBtn);
            cantidadSelector.appendChild(cantidadInput);
            cantidadSelector.appendChild(incrementBtn);

            const addButton = document.createElement("button");
            addButton.textContent = "Comprar";
            addButton.classList.add("add-to-cart-btn");

            addButton.addEventListener("click", function () {
                const cantidadSeleccionada = parseInt(cantidadInput.value);


                const mensajeCompraRealizada = `¡Compra realizada! Has comprado ${cantidadSeleccionada} ${cantidadSeleccionada === 1 ? 'producto' : 'productos'}.`;
                alert(mensajeCompraRealizada);
            });

            productInfo.appendChild(title);
            productInfo.appendChild(description);
            productInfo.appendChild(price);
            productInfo.appendChild(cantidadSelector);
            productInfo.appendChild(addButton);

            productDetailContainer.appendChild(image);
            productDetailContainer.appendChild(productInfo);

            detalleProductoSection.appendChild(productDetailContainer);
        })
        .catch(error => console.error("Error fetching product details:", error));
});

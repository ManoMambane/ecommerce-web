const wrapper = document.querySelector(".sliderWrapper")
console.log(wrapper)

const menuItems = document.querySelectorAll(".menuItem")

// for each item evenent listener
menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        console.log("you clicked" + index);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
})


// wrapper.style.transform = "translateX(-100vw)"
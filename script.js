//Counter 
let count = 0 //Count

//DOM counter
const countNumber = document.querySelector(".number");
const btns = document.querySelectorAll("button");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count++
        } else {
            count = 0
        }

        countNumber.textContent = count
    })
})





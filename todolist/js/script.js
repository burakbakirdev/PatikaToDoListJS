// Selecting DOMs
const ulDOM = document.querySelector('#list')
const inputTaskDOM = document.querySelector('#task')


// DOMs of Toast Messages to give information to the user.
const toast0DOM = document.querySelector('#liveToast0')
const toast1DOM = document.querySelector('#liveToast1')


//  This function is adding tasks to our list.
function newElement(){
    const inputValue = inputTaskDOM.value

    let liDOM = document.createElement('li')
    
    // If the input is empty, return error message.
    // Input boş ise, error mesajı döndür.
    if(!inputValue){
        $(toast1DOM).toast('show')
    }
    // If the input is not empty, return information message.
    // Input bos değilse, bilgi mesajı döndür.
    else{
        liDOM.innerHTML = inputValue
        ulDOM.append(liDOM)
        $(toast0DOM).toast('show')
        localStorage.setItem('tasks', JSON.stringify(ulDOM.innerHTML))
    }


    liDOM.addEventListener('click', () => {
        if(liDOM.classList.contains("checked"))
            liDOM.classList.remove("checked")
        else
            liDOM.classList.add("checked")
        localStorage.setItem('tasks', JSON.stringify(ulDOM.innerHTML))
    })

    const delIconSpan = document.createElement("span")
    delIconSpan.innerHTML = "&times;";
    delIconSpan.classList.add("close")
    delIconSpan.addEventListener('click', () => {
        removeElement(liDOM)
    })

    liDOM.appendChild(delIconSpan)

    localStorage.setItem('tasks', JSON.stringify(ulDOM.innerHTML))

}

    // to create new task by pressing Enter key
    document.querySelector('#task').addEventListener('keypress', (event) => {
        if(event.key === "Enter") newElement();
    })



    document.querySelectorAll('#list li').forEach((item) => {
        const delIconSpan = document.createElement("span")
        delIconSpan.innerHTML = "&times;";
        delIconSpan.classList.add("close")
        item.appendChild(delIconSpan)
        item.addEventListener("click", () => {
            if(item.classList.contains('checked'))
                item.classList.remove('checked')
            else
                item.classList.add('checked')
            
            localStorage.setItem('tasks', JSON.stringify(ulDOM.innerHTML))
        })
    })

    document.querySelector('#list li').forEach((item) => {
        let listItem = item.parentNode;
        item.addEventListener('click', () => {
            removeElement(listItem)
        })
    })

    function removeElement(li) {
        li.remove();
        localStorage.setItem('tasks', JSON.stringify(ulDOM.innerHTML))
    }

    

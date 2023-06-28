let form = document.getElememtById("github-form")




form.addEventListener('submit', function (e) {
    e.preventDefault()
    let search = document.getElementById("search").value


    fetch("https://api.github.com/search/users?q=octocat")
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.getElementById("result")
        })
})
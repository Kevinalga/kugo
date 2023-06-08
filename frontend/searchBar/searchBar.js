
function getSearchBar() {
    // const isAdminObj = await fetch('/isAdmin')
    // console.log(isAdminObj)
    const userType = 2

    if (userType === 0) {
        const searchBar = document.createElement('input')
        searchBar.placeholder = 'Usuario'
        return searchBar
    } else if (userType === 1) {
        const searchBar = document.createElement('input')
        searchBar.placeholder = 'Empresa'
        return searchBar
    } else {
        return document.createElement('div')
    }
}

export { getSearchBar }
function store_peticion(){

    ajaxObj = new XMLHttpRequest();
    ajaxObj.open("POST", "/store", true);
    ajaxObj.send(encodeURI('workspace=' + workspace));
}

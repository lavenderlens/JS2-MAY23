const {Observable} = rxjs;

function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}
print('paragraph');
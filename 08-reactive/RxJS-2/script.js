// const {Observable} = rxjs;
// don't need to explicity create an Observable
const { fromEvent } = rxjs;

function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}
// from mouse events
const clicks$ = fromEvent(document, 'click');

clicks$.subscribe(clicks$ => console.log(clicks$.clientX, clicks$.clientY));

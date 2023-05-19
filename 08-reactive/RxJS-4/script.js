// const {Observable} = rxjs;
const { fromEvent } = rxjs;
const { throttleTime, debounceTime } = rxjs.operators;

function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}
const mouseEvents$ = fromEvent(document, 'mousemove');

// Only get the first event in time period, 
// then delay emitting new events
// piping data streams can be likened to transformative array methods
// eg map, filter, reduce, continually over time
mouseEvents$.pipe(throttleTime(1000))
            .subscribe(e => print(e.type));

// Debounce is wait specified time AFTER last event
// use cases include form validation
mouseEvents$.pipe(debounceTime(1000))
            .subscribe(e => print(e.type));
const {timer, interval} = rxjs;

function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}
// Start with a Promise()
const timer$ = timer(3000);
timer$.subscribe(done => print('Timer finished!'));

// Repeating timer
const interval$ = interval(1000);
interval$.subscribe(int => print(int));
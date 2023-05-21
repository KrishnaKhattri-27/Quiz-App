const ques = [
    {
        'que': "Q1) Who is the captain of CSK?",
        'a': "MS Dhoni",
        'b': "Rohit Sharma",
        'c': "Virat Kohli",
        'd': "Chris Gayle",
        'correct': "a"
    },
    {
        'que': "Q2) What is the capital of India?",
        'a': "Bhopal",
        'b': "Mumbai",
        'c': "Delhi",
        'd': "Kolkata",
        'correct': "c"
    },
    {
        'que': "Q3) Who is the President of India?",
        'a': "Ram Nath Kovind",
        'b': "Droupadi Murmu",
        'c': "Narendra Modi",
        'd': "Pratibha Patil",
        'correct': "b",
    }
]

let index = 0;
let optionch = document.querySelectorAll('.option');
let questionch = document.querySelector('.question');
let right = 0;
let total = ques.length;
console.log(total);


const loadquestion = () => {
    let data = ques[index];
    const button = document.querySelector('.next');
    // console.log(questionch.innerHTML);
    questionch.innerHTML = data.que;
    // console.log(questionch.innerText);
    optionch[0].nextElementSibling.innerHTML = data.a;
    optionch[1].nextElementSibling.innerHTML = data.b;
    optionch[2].nextElementSibling.innerHTML = data.c;
    optionch[3].nextElementSibling.innerHTML = data.d;
    index++;
    if (index == total) {
        button.innerHTML = "Submit";
    }
}

loadquestion();



const feed = document.querySelector('.novalue');
const submit = () => {
    let data = ques[index - 1];
    const ans = getanswer();
    console.log(ans);
    if (ans === 0) {
        console.log("fuck");
        feed.classList.add('show')
        setTimeout(function() {
            feed.classList.remove('show');
        }, 3000)
    } else {
        if (ans === data.correct) {
            right++;
            console.log("ok");
        }
        if (index === total) {
            endfunction();


        } else {
            reset();
            loadquestion();

        }

    }
}


const getanswer = () => {
    let answer = 0;
    optionch.forEach((input) => {
        if (input.checked) {
            // console.log("done");
            // console.log(input.value);
            answer = input.value;
        }
    })
    return answer;
}

const reset = () => {
    optionch.forEach((input) => {
        input.checked = false;
    })
}


const endfunction = () => {
    document.getElementById("page").innerHTML = `
   <h1>Thank You..!!</h1>
   <p>${right} / ${total} are correct</p>
 `

}

let myInput=document.getElementById("yourName");
let partner=document.getElementById("HerName");
let calculate=document.querySelector(".btn");
let mainCard=document.querySelector(".card");
let hidden=document.querySelector(".hide");
let cardTitle=document.querySelector(".card-title");
let quote=document.querySelector(".quote");

hidden.style.display="none"



calculate.addEventListener("click",function(){

    if(myInput.value=="" || partner.value==""){
        alert("Information Missing")
    }else{
        let count=Math.floor(Math.random()*100)+1;
        console.log(count);
        let card=[

            {
                card:0,
                title:"Congratulations!",
                text:`Aww yeah! Your Love Score is ${count}. You and ${partner.value} love each other like  Romeo & Juliet. You should get married with ${partner.value} very soon. Best of Luck!`
            },
            {
                card:1,
                title:"Good Wishes!",
                text:`So sweet... Your Love Score is ${count}. You and ${partner.value} love each other more than anything in the world.`
            },
            {
                card:2,
                title:"Put More Concentration!",
                text:`Oh no... Your Love Score is ${count}. You and ${partner.value} love each other like oil and water.`
            }
            
        ];

        if(count>=1 && count<=30){
            mainCard.classList="bg-danger text-light"
            cardTitle.textContent=card[2].title
            quote.textContent=card[2].text
        }else if(count>=31 && count<=70){
            mainCard.classList="bg-warning text-light"
            cardTitle.textContent=card[1].title
            quote.textContent=card[1].text
        }else if(count>=71){
            mainCard.classList="bg-success text-light"
            cardTitle.textContent=card[0].title
            quote.textContent=card[0].text
        }
        hidden.style.display="block"
        myInput.value=""
        partner.value=""
    }

    
})


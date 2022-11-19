//ini untuk ambil id pertanyaan
const pertanyaan= document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container"); //in clas bukan id win


let init = 0;


const botSay = (data) => {
    return ["Hay Bro, Perkenalakan saya AlwinBot. Siapa nama kamu?",
    `Haay Bro ${data?.nama}, Berapa usia kamu sekarang?`,
    `Ohh ${data?.usia}, Kalau boleh tau, Apa pekerjaan kamu sekerang?`,
    `Wooow ${data?.pekerjaan}, Hobi kamu apa?`,
    `Keren banget ${data?.Hobi}, btw kamu sudah punya pacar belum yah?`,
    `Ohh ${data?.pacar}, Maaf nanya gini, ya udah kalau gitu, makasih waktu ya`


];
}

pertanyaan.innerHTML = botSay()[0];
let userData = [];


//ini untuk tombol send ya
function botStar() {
    if(jawaban.value.length <  1) return alert("silahakan tulisan jawaban Anda")
    init++
    if(init===1){
                                                                            //ini untuk membuat jawaban
        botDelay({ nama :jawaban.value });
    } else if (init === 2) {
         
        botDelay({ usia : jawaban.value });
    } else if (init === 3) {
        
        botDelay({ pekerjaan : jawaban.value });
    }else if (init === 4) {
        
        botDelay({ Hobi : jawaban.value });
    } else if (init === 5) {
       
        botDelay({ pacar : jawaban.value });
    } else if (init===6) {
        finishing();
    } else {
        botEnd();

    }
}

function botDelay(jawabanUser){
    loaders.style.display = "block" //ini untuk aktifan loders ya
    container[0].style.filter = "blur(8px)" //ini proses blur ya (kalau didalam class ya menggunakan [0])
    
    //console.log({userData : userData}); //ini biar tahu user data 
    setTimeout(() =>{
    pertanyaan.innerHTML = botSay(jawabanUser)[init] 
    loaders.style.display = "none"//ini untuk matikan loders ya
    container[0].style.filter = "none" //ini proses matikan blur ya 
    }, [1000])
    userData.push(jawaban.value); //ini untuk ambil data jawaban ya
    jawaban.value = ""; //ini memebersihkan layar
}


function finishing(){
   
    pertanyaan.innerHTML = `Makasih ya ${userData[0]} udah main ke AlwinBot. Lain kali kita  ${userData[3]} bareng ya!`
    jawaban.value = "";
    //console.log("Finishing...")
}

function botEnd(){
    alert(`Terimakasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`)
    window.location.reload();
    //console.log("bot End.....")

}
const k = document.getElementById('komfort')
const f = document.getElementById('free_tran')
const m = document.getElementById('more')
const s1 = document.getElementById('slide1')
const s2 = document.getElementById('slide2')
const s3 = document.getElementById('slide3')

f.onclick = function(){
    s1.style.display='block';
    s2.style.display='none';
    s3.style.display='none';
}
k.onclick = function(){
    s2.style.display='block';
    s1.style.display='none';
    s3.style.display='none';
}
m.onclick = function(){
    s3.style.display='block';
    s1.style.display='none';
    s2.style.display='none';
} 
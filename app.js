const topics = document.querySelectorAll('.topic')
// topics.forEach(topic => {addEventListener("click",dis)});
for(var i =0; i<topics.length; i++){
    topics[i].addEventListener('click',function(){
    var topicName = this.dataset.topic;
    var tabcontent = document.getElementById(topicName);
    var alltabcontent =document.querySelectorAll(".content");
    var alltabBtncontent =document.querySelectorAll(".topic");
    for(var j=0;j<alltabcontent.length;j++){
        alltabcontent[j].style.display="none"
    }
    for(var k=0;k<alltabBtncontent.length;k++){
        alltabBtncontent[k].classList.remove("active")
    }


    tabcontent.style.display="block";
    this.classList.add('active');
});}

const videoScreen =document.querySelector("#video");

const go = function(link){
    videoScreen.src=`https://www.youtube-nocookie.com/embed/${link}`;
}

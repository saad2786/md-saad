var i=0,j=0;
    const item1 = document.querySelector("#developer");
    var text1="Developer";
    const item2 = document.querySelector("#engineer");
    var text2="Engineer";
function typingDev()
{
    if(i<text1.length)
    {
        item1.innerHTML +=text1.charAt(i);
        i++;
        setTimeout(typingDev,150)
    }
}
function typingEng()
{
    if(j<text2.length)
    {
        item2.innerHTML +=text2.charAt(j);
        j++;
        setTimeout(typingEng,150)
    }

}
window.addEventListener('scroll', function () {
    if( this.window.pageYOffset > 200 )
    {
        document.querySelector(".box-1").classList.add("left-box");
        document.querySelector(".box-2").classList.add("right-box");
    }
    else if(this.window.pageYOffset > 600)
    {
        document.querySelector(".box-1").classList.remove("left-box");
        document.querySelector(".box-3").classList.remove("left-box");
        document.querySelector(".box-2").classList.remove("right-box");
        document.querySelector(".box-4").classList.remove("right-box");
    }
    if( this.window.pageYOffset > 300)
        {
            document.querySelector(".box-3").classList.add("left-box");
            document.querySelector(".box-4").classList.add("right-box");

        }
  });
  window.addEventListener('scroll', function () {
    if(this.window.pageYOffset > 2400)
    {
        document.querySelector(".lan-1").classList.add("c");
        document.querySelector(".lan-2").classList.add("cpp");
        document.querySelector(".lan-3").classList.add("js");
        document.querySelector(".lan-4").classList.add("java");
    }})
typingDev();
setTimeout(typingEng,1300);

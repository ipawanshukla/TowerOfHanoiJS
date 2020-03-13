
function validateLog(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    console.log(user);
        console.log(pass);  
    if(user == "admin" && pass == "admin"){
        window.location = "./home.html"; 
    }
    else{
        alert("Login Failed");
    }

}
var moves=1;
var result="";

function towerOfHanoi(n, from_rod, to_rod, mid_rod)
{
    if (n == 1)
    {
       result+="Move disk 1 from rod " +  from_rod + " to rod " + to_rod+"<br/>";
        return;
    }
    moves++;
    towerOfHanoi(n-1, from_rod, mid_rod, to_rod);
    moves++;
    result+="Move disk "+n+" from rod " +  from_rod + " to rod " + to_rod+"<br/>";
    towerOfHanoi(n-1, mid_rod, to_rod, from_rod);
}
function callTOH(){
    var num = parseInt(document.getElementById('disks').value);
    console.log(num);
    towerOfHanoi(num, 'A', 'C', 'B');
    document.getElementById('result').innerHTML= result;
    document.getElementById('moves').innerHTML= moves;
    


}
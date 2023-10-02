a=""; 
sym="";

function ops(op){
  sym=op;
  a+=op;
  document.getElementById("inputvalue").value=a;

}

function cleartxt(clrmsg)
{
 
  if(clrmsg=="allclear")
 { document.getElementById("inputvalue").value=0;
 a=null;
}
  if(clrmsg=="lastvalue")
{
  alert(a);
  b=a.length;
  alert(b);
  for(i=0;i<b;i++)
  {
    if(b-1==i){
      b[i]=0;
    }
   
  }
  document.getElementById("inputvalue").value=b;
}
}



input="";

function allfun(val){
 var answertext= document.getElementById("answertext");

  if(val=="."||val=="1"||val=="2"||val=="3"||val=="4"||val=="5"||val=="6"||val=="7"||val=="8"||val=="9"||val=="0")
  {   
    
      input+=val;
      document.getElementById("inputvalue").value=input; 
      
  }

if(val=="%"){


}

  if(val=="+"||val=="-"||val=="*"||val=="/")
    {
      input+=val;
      sym=val;
      document.getElementById("inputvalue").value=input; 

    }

if(val=="lastvalue")
{
  document.getElementById("inputvalue").value=0;
  input=0; 
}
if(val=="allclear")
{
  document.getElementById("inputvalue").value=0;
  input=0; 
}

if("%"==val){
  array_val=input.split(val);
  ans=Number(array_val[0])/100;
  answertext.value=ans;
  document.getElementById("inputvalue").value=0;
  input=0;
  console.log();
}

if("x^2"==val){
  array_val=input.split(val);
  ans=Number(array_val[0])*Number(array_val[0]);
  answertext.value=ans;
  document.getElementById("inputvalue").value=0;
  input=0;
  console.log();
}


  if(val=="=")
  {
    array_val=input.split(sym);
    alert(array_val);


                                                                                                                                                                                                                                                                                                                                              
  switch(sym)
  {
    case "+" : ans=Number(array_val[0])+Number(array_val[1]);
               answertext.value=ans;
               document.getElementById("inputvalue").value=0;
               input=0; 
               console.log();
               break;   
    case "-" : ans=Number(array_val[0])-Number(array_val[1]);
               answertext.value=ans;
               document.getElementById("inputvalue").value=0;
               input=0; 
               console.log();
               break;  
    case "*" : ans=Number(array_val[0])*Number(array_val[1]);
               answertext.value=ans;
               document.getElementById("inputvalue").value=0;
               input=0; 
               console.log();
               break; 
    case "/" : ans=Number(array_val[0])/Number(array_val[1]);
               answertext.value=ans;
               document.getElementById("inputvalue").value=0;
               input=0; 
               console.log();
               break;
  
    }
  }

}

// function cleartxt(){
//   alert("hi");
// }


function cal(x){
a+=x
  document.getElementById("inputvalue").value=a;

}

function exe(){

  totvalue=a.split("+");
                                                                                                                                                                                                                                                                                                                                          
  switch(sym)
  {
    case "+" : ans=Number(totvalue[0])+Number(totvalue[1]);
               document.getElementById("inputvalue").value=ans; 
               console.log();
               break;   
    case "-" : ans=Number(totvalue[0])-Number(totvalue[1]);
               document.getElementById("inputvalue").value=ans; 
               console.log();
               break;  
    case "*" : ans=Number(totvalue[0])*Number(totvalue[1]);
               document.getElementById("inputvalue").value=ans; 
               console.log();
               break; 
    case "/" : ans=Number(totvalue[0])/Number(totvalue[1]);
               document.getElementById("inputvalue").value=ans; 
               console.log();
               break;
    case "%" : ans=Number(totvalue[0])%Number(totvalue[1]);
               document.getElementById("inputvalue").value=ans; 
               console.log();
               break;
    case "x^2" : 
               document.getElementById("inputvalue").value=ans; 
               console.log();
               break;

}

}
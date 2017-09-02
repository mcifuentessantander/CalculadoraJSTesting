var checkbutton="";
count=0;
array=new Array(100);
decimal=0;
bracketcount=0;
var temp="";
var posneg=0;


function scroll(jumpSpaces,position) {
var msg = "SuperCalc v1.0"
var out = ""
if (killScroll) {return false} 
for (var i=0; i<position; i++){
out += msg.charAt(i)}
for (i=1;i<jumpSpaces;i++) {
out += " "}
out += msg.charAt(position)
document.calc.screen.value = out
if (jumpSpaces <= 1) {
position++
if (msg.charAt(position) == ' ') {
position++ }
jumpSpaces = 100-position        
}
else if (jumpSpaces >  3) {
jumpSpaces *= .75}
else {
jumpSpaces--}
if (position != msg.length) {
var cmd = "scroll(" + jumpSpaces + "," + position + ")";
scrollID = window.setTimeout(cmd,5);
} 
else {
scrolling = false
return false}
return true;
}
function startScroller() {
if (scrolling)
if (!confirm('Re-initialize snapIn?'))
return false
killScroll = true
scrolling = true
var killID = window.setTimeout('killScroll=false',6)
scrollID = window.setTimeout('scroll(100,0)',10)
return true
}
var scrollID = Object
var scrolling = false
var killScroll = false


function check(checkbutton)
{  if(checkbutton != 0 && checkbutton != 1 && checkbutton != 2 && checkbutton != 3 && checkbutton != 4 && checkbutton != 5 && checkbutton != 6 && checkbutton != 7 && checkbutton != 8 && checkbutton != 9)
   {  if(checkbutton=='?')
         alert('¿Que desea hacer?');                       

      if(checkbutton=='+')
      {  decimal=0;
         array[count]=checkbutton;
         count++;
         document.calc.screen.value=document.calc.screen.value+array[count-1];
      }
      if(checkbutton=='-')
      {  decimal=0;
         array[count]=checkbutton;
         count++;
         document.calc.screen.value=document.calc.screen.value+array[count-1];
      }
      if(checkbutton=='/')
      {  decimal=0;
         array[count]=checkbutton;
         count++;
         document.calc.screen.value=document.calc.screen.value+array[count-1];
      }
      if(checkbutton=='*')
      {  decimal=0;
         array[count]=checkbutton;
         count++;
         document.calc.screen.value=document.calc.screen.value+array[count-1];
      }
      if(checkbutton=='.')
      {  if(decimal>0)
         { document.calc.screen.value=document.calc.screen.value;
         }
         else
         { document.calc.screen.value=document.calc.screen.value+'.';
           decimal++;
         }
         array[count]=checkbutton;
         count++;
      }
      if(checkbutton=='00')
      {  document.calc.screen.value=document.calc.screen.value+'00';
         array[count]=checkbutton;
         count++;
      }
      if(checkbutton=='c')
      {  document.calc.screen.value="";
         count=0;
         decimal=0;
         bracketcount=0;
         array[count]=0;
      }
      if(checkbutton=='ce')
      {  var t="";
         if(count<=0)
         {  decimal=0;
            bracketcount=0;
            count=0;
            array[count]=0;
            document.calc.screen.value="";
         }
         else
         {  count--;
            document.calc.screen.value="";
            for(x=0;x<count;x++)
               document.calc.screen.value=document.calc.screen.value+array[x];
         }
      }
      if(checkbutton=='(')
      {  document.calc.screen.value=document.calc.screen.value+checkbutton;
         bracketcount++;
         array[count]=checkbutton;
         count++;
      }
      if(checkbutton==')')
      {  document.calc.screen.value=document.calc.screen.value+checkbutton;
         bracketcount--;
         array[count]=checkbutton;
         count++;
      }
      if(checkbutton=='=')
      {   if((array[0]!='('&&array[0]!='-'&&array[0]!='3.14159'&&array[0]!=0&&array[0]!=1&&array[0]!=2&&array[0]!=3&&array[0]!=4&&array[0]!=5&&array[0]!=6&&array[0]!=7&&array[0]!=8&&array[0]!=9)||bracketcount!=0)
          { if(document.calc.screen.value==""||document.calc.screen.value==undefined)
               alert('Error! No has ingresado nada.');
            if(bracketcount!=0)
            {  alert('Error! Verifica los ().');
               bracketcount=0;
            }
            if(array[0]=='+'||array[0]=='-'||array[0]=='*'||array[0]=='/'||array[0]==')')
               alert('Error! La primera entrada debe ser un entero.')
            else
               document.calc.screen.value=eval(document.calc.screen.value);
          }
          else
            document.calc.screen.value=eval(document.calc.screen.value);  
      }
   }
   else
   {  array[count]=checkbutton;
      count++;
      document.calc.screen.value=document.calc.screen.value+array[count-1];
   }
}

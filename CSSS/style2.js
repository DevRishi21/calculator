var screen=document.getElementById("output");
function display(num)
{
    screen.value += num;
}
function calculate()
{
    try
    {
        screen.value = eval(screen.value);
    }
    catch(err)
    {
        alert("Error");
    }
}
function clear()
{
    try{
        screen.value = ' ';
    }
    catch(err)
    {
        alert("Error");
    }
}
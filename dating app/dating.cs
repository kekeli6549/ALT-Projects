Console.WriteLine("Your welcome To Love Cupids");
int ages;
Console.WriteLine("Write Down your age new lovers  ");
Convert.ToInt32(Console.ReadLine());

if (ages < 15)
{
Console.WriteLine("that's child abuse");
goto next;
}
else if( ages< 25)
{
    Console.WriteLine("looking Fynee");
goto next;
}
else if (ages <= 35)
{
    Console.WriteLine("what's up Cougar");
goto next;
}
else if(ages <=45)
{
    Console.WriteLine("You still want some umm");
goto next;
}
else if(ages <=55)
{
    Console.WriteLine("you no dey tire");
goto next;
}
else
{
    Console.Write("we no dey do grandma for here  GETAT!!");
}

next:
Console.WriteLine("Let's Move To the Next Stage");
Console.WriteLine("What is the Best Romatic Movie of all Time: ");
string movie;
switch (movie){
    case 'A':
    Console.WriteLine("Kissing Booth 1&2");
     Console.Write("Your Correct🥰😍😘"); 
    break;
    case 'B':
    Console.WriteLine("Titanic");
     Console.Write("Awwwn🥰");
    break;
    case 'C':
    Console.WriteLine("Life in Year");
     Console.Write("True love😍");
    break;
    case 'D':
    Console.WriteLine("Arcane");
    Console.Write("that's sad😥");
    break;
    default:
    Console.WriteLine("Unromantic!😥😓, try again "); 
}
Console.ReadLine();
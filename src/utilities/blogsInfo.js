export const posts = [
    {
        date:'January 13, 2021',
        time:'10 min',
        id:"class",
        title:"JavaScript Classes",
        p1:'In JavaScript, classes are the special type of functions. We can define the class just like function declarations and function expressions.The JavaScript class contains various class members within a body including methods or constructor. The class is executed in strict mode. ',
        p2:'So, the code containing the silent error or mistake throws an error.The class syntax contains two components: 1.Class declarations 2.Class expressions',
        p3:"1.Class Declarations Example:Let's see a simple example of declaring the class.",
        p4:"2.Class Declarations Example: Hoisting.Unlike function declaration, the class declaration is not a part of JavaScript hoisting. So, it is required to declare the class before invoking it.Let's see an example.",
        p5:"We can express the class with the particular name. Here, the scope of the class name is up to the class body. The class is retrieved using class.name property.Unlike class declaration, the class expression allows us to re-declare the same class.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        example:"Class Example: ",
        code3:false,
        c1:`<script>  
    //Declaring class  
    class Employee  
      {  
    //Initializing an object  
        constructor(id,name)  
        {  
          this.id=id;  
          this.name=name;  
        }  
    //Declaring method  
        detail()  
        {  
      document.writeln(this.id+" "+this.name+"<br>")  
        }  
      }  
    //passing object to a variable   
    var e1=new Employee(101,"Martin Roy");  
    var e2=new Employee(102,"Duke William");  
    e1.detail(); //calling method  
    e2.detail();  
</script> `,
    c2:`<script>  
//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
//Re-declaring class  
class Employee  
  {  
  }  
</script> `
    },
    {
      date:'January 15, 2021',
      time:'14 min',
        id:"encaptualations",
        title:"JavaScript Encapsulation",
        p1:'The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: Use var keyword to make data members privateUse setter methods to set the data and getter methods to get that data',
        p2:'The encapsulation allows us to handle an object using the following properties.Read/Write - Here, we use setter methods to write the data and getter methods read that data.Read Only - In this case, we use getter methods only.Write Only - In this case, we use setter methods only.',
        p3:"JavaScript Encapsulation ExampleLet's see a simple example of encapsulation that contains two data members with its setter and getter methods. ",
        p4:"JavaScript Encapsulation Example: Validate.In this example, we validate the marks of the student.",
        p5:"The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        code3:false,
        example:"Encapsulation example",
        c1:`<script>  
    class Student  
      {  
        constructor()  
        {  
           var name;  
           var marks;  
        }  
            getName()  
            {  
              return this.name;  
            }  
          setName(name)  
          {  
            this.name=name;  
          }  
            
          getMarks()  
          {  
            return this.marks;  
          }  
        setMarks(marks)  
        {  
          this.marks=marks;  
        }  
      
        }  
        var stud=new Student();  
         stud.setName("John");  
         stud.setMarks(80);  
         document.writeln(stud.getName()+" "+stud.getMarks());  
</script>  `,
        c2:`<script>  
    class Student  
      {  
        constructor()  
        {  
           var name;  
           var marks;  
        }  
            getName()  
            {  
              return this.name;  
            }  
          setName(name)  
          {  
            this.name=name;  
          }  
            
          getMarks()  
          {  
            return this.marks;  
          }  
        setMarks(marks)  
        {  
            if(marks<0||marks>100)  
            {  
              alert("Invalid Marks");  
            }  
          else  
            {  
              this.marks=marks;  
            }  
        }  
        }  
        var stud=new Student();  
         stud.setName("John");  
         stud.setMarks(110);//alert() invokes  
         document.writeln(stud.getName()+" "+stud.getMarks());  
</script>  `
    },
    {
      date:'february 13, 2021',
      time:'12 min',
        id:"polymorphism",
        title:"JavaScript Polymorphism",
        p1:'The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.',
        p2:'It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods. ',
        p3:" Example 1: Let's see an example where a child class object invokes the parent class method.",
        p4:"Example: 2 Let's see an example where a child and parent class contains the same method. Here, the object of child class invokes both classes method.",
        p5:"The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.",
        other:"Example 3: Let's see the same example with prototype-based approach.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        example:"JavaScript Polymorphism Example:",
        code3:true,
        c1:`<script>  
class A  
  {  
     display()  
    {  
      document.writeln("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
var b=new B();  
b.display();  
</script> `,
        c2:`<script>  
class A  
  {  
     display()  
    {  
      document.writeln("A is invoked<br>");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      document.writeln("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  
</script> `,
c3:`<script>  
function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{  
    
}  
  
B.prototype=Object.create(A.prototype);  
  
var a=[new A(), new B()]  
  
a.forEach(function(msg)  
{  
  document.writeln(msg.display()+"<br>");  
});  
<script> `
    },
    {
      date:'January 24, 2021',
      time:'23 min',
        id:"abstraction",
        title:"JavaScript Abstraction",
        p1:'An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.',
        p2:'Points to remember. 1.We cannot create an instance of Abstract Class. 2.It reduces the duplication of code.',
        p3:"Example 1 - Let's check whether we can create an instance of Abstract class or not.",
        p4:"Example 2 - Let's see an example to achieve abstraction.",
        p5:"An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one",
        other:"Example 3 - In this example, we use instanceof operator to test whether the object refers to the corresponding class.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        example:"JavaScript Abstraction Example.",
        code3:true,
        c1:`<script>  
//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName= vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
  
}  
Vehicle.prototype.display=function()  
{  
    return this.vehicleName;  
}  
var vehicle=new Vehicle();  
 </script> `,
        c2:`<script>  
//Creating a constructor function  
 function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
document.writeln(bike.display());  
  
  
 </script> `,
        c3:`<script>  
    //Creating a constructor function  
     function Vehicle()  
    {  
        this.vehicleName=vehicleName;  
        throw new Error("You cannot create an instance of Abstract class");  
    }  
    //Creating a constructor function  
    function Bike(vehicleName)  
    {  
        this.vehicleName=vehicleName;  
    }  
    Bike.prototype=Object.create(Vehicle.prototype);  
    var bike=new Bike("Honda");  
    document.writeln(bike instanceof Vehicle);  
    document.writeln(bike instanceof Bike);  
      
</script>  `
    }

]
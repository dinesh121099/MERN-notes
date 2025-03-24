/*Inheritance
---single level inheritance*/
class parent{
    func1(){
        console.log("inherited");
    }
}
class child extends parent{

}
let objchild=new child();
objchild.func1();

/*---multilevel inheritance*/
class child2 extends child{

}
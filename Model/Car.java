package Model;

import java.io.File;

public class Car{
    protected File image;
    protected double x,y;

    public Car(Object o){
        image = (File)o;
        
    }


}
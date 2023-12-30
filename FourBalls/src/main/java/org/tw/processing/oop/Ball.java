package org.tw.processing.oop;

public class Ball {
    public int positionX;
    public int positionY;
    private final int speed;
    public int diameter;
    Ball(int positionX,int positionY,int speed,int diameter){
        this.diameter=diameter;
        this.positionX=positionX;
        this.positionY=positionY;
        this.speed=speed;
    }
    void moveBall(){
        this.positionX+=speed;
    }
}

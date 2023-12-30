package org.tw.processing;
import processing.core.PApplet;
public class TryProcessing extends PApplet{
    private final float speed=1;
    private float ball1=speed;
    private float ball2=speed;
    private float ball3=speed;
    private float ball4=speed;
    private final float height=720,width=720;
    @Override
    public void settings() {
        super.settings();
        size((int)width,(int)height);
    }

    @Override
    public void setup() {
        super.setup();
    }

    @Override
    public void draw() {
        ellipse(ball1,height/5,100,100);
        ellipse(ball2,(2*height)/5,100,100);
        ellipse(ball3,(3*height)/5,100,100);
        ellipse(ball4,(4*height)/5,100,100);
        ball1+=1;
        ball2+=2;
        ball3+=3;
        ball4+=4;
    }

    public static void main(String[] args){
        PApplet.main("org.tw.processing.TryProcessing",args);
    }
}

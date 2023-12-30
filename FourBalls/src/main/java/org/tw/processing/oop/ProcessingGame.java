package org.tw.processing.oop;

import processing.core.PApplet;

import java.util.ArrayList;
import java.util.Arrays;

public class ProcessingGame extends PApplet {
    private final int SCREEN_HEIGHT=1080;
    private final int SCREEN_WIDTH=1920;
    private final int BALL_1_POSITIONY=SCREEN_HEIGHT/5;
    private final int BALL_2_POSITIONY=(2*SCREEN_HEIGHT)/5;
    private final int BALL_3_POSITIONY=(3*SCREEN_HEIGHT)/5;
    private final int BALL_4_POSITIONY=(4*SCREEN_HEIGHT)/5;
    private final int BALL_1_SPEED=1;
    private final int BALL_2_SPEED=2;
    private final int BALL_3_SPEED=3;
    private final int BALL_4_SPEED=4;
    private final int BALL_DIAMETER=10;



    private final ArrayList<Ball> balls=new ArrayList<Ball>(Arrays.asList(
            new Ball(1, BALL_1_POSITIONY, BALL_1_SPEED, BALL_DIAMETER),
            new Ball(1, BALL_2_POSITIONY, BALL_2_SPEED, BALL_DIAMETER),
            new Ball(1, BALL_3_POSITIONY, BALL_3_SPEED, BALL_DIAMETER),
            new Ball(1, BALL_4_POSITIONY, BALL_4_SPEED, BALL_DIAMETER)
    ));

    @Override
    public void settings() {
        super.settings();
        size(SCREEN_WIDTH,SCREEN_HEIGHT);
    }

    @Override
    public void draw() {
        for(Ball ball:balls){
            ellipse(ball.positionX,ball.positionY,ball.diameter,ball.diameter);
            ball.moveBall();
        }
    }

    public static void main(String[] args){
        PApplet.main("org.tw.processing.oop.ProcessingGame",args);
    }

}
